import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import testQuestionAPI from "../../../../../services/StudentPage/TestQuestionAPI";
import LayoutDoingTestPage from "./components/LayoutDoingTestPage";
import PagtinationDoingTestPage from "./components/PagtinationDoingTestPage";
import QuestionDoingTestPage from "./components/QuestionDoingTestPage";
import ReviewingDoingTestPage from "./components/ReviewingDoingTestPage";
import { end } from "../../../../../redux/test/testSlice";
import { useParams } from "react-router-dom";
import testAPI from "../../../../../services/StudentPage/TestAPI";
import { NotificationDialog } from "../../../../../components/MessDialog/MessDialog";

const DoingTestPage = () => {
  const params = useParams();
  const testResourceAPI = useSelector((state) => state.test.fetchTestResources);
  const [page, setPage] = useState(1);
  const [choosenAnswer, setChoosenAnswer] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [allDataTestQuesstion, setAllDataTestQuestion] = useState([]);
  const [onNext, setOnNext] = useState(false);
  const dispatch = useDispatch();
  const [idQuestion, setIdQuestion] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [score, setScore] = useState(0);
  const handleOpenDialog = () => setOpenDialog(!openDialog);
  const testStatusAPI = useSelector((state) => state.test.isDoingTest);

  const payloadCreateResult = {
    testId: params.id,
    sendToId: testResourceAPI.createdBy,
    subjectId: testResourceAPI.subjectId,
  };

  const payloadGetQuestion = {
    QuestionIds: testResourceAPI.QuestionIds,
    assignees: testResourceAPI.assignees,
  };

  const payloadUpdateResult = {
    testId: params.id,
    answers: choosenAnswer,
  };

  const { data: testQuestion } = useQuery(
    "testQuestion",
    () =>
      testQuestionAPI.questionTest({ limit: 100, body: payloadGetQuestion }),
    {
      fetchPolicy: "network-only",
    },
    {
      refetchOnChange: false,
    }
  );

  useEffect(() => {
    if (testQuestion) {
      setAllDataTestQuestion(testQuestion && testQuestion.data.data);
      setCurrentQuestion(testQuestion && testQuestion.data.data[0]);
    }
  }, [testQuestion]);

  const createTestResult = async () => {
    try {
      const response = await testAPI.getResults(payloadCreateResult);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log("createTestResult");
    createTestResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangePagtination = useCallback(
    (number) => {
      setPage(number);
      setCurrentIndex(number - 1);
      setOnNext(!onNext);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page]
  );

  const totalPages = testQuestion && testQuestion.data.totalItem;

  const onChoosenAnswer = useCallback((answersData) => {
    if (answersData !== undefined) {
      const updateChoonsenAnswer =
        answersData && answersData.answers?.find((e) => e.choosen === true);
      setIdQuestion(answersData._id);

      if (updateChoonsenAnswer !== undefined) {
        setChoosenAnswer((prevChoosenAnswer) => {
          if (idQuestion.length > 0 && answersData._id === idQuestion) {
            const test2 = {
              answerId: updateChoonsenAnswer._id,
              questionId: answersData._id,
            };
            const test = choosenAnswer
              .map((answer) => answer.questionId !== idQuestion)
              .push(test2);
            return [test];
          } else {
            return [
              ...prevChoosenAnswer,
              {
                answerId: updateChoonsenAnswer._id,
                questionId: answersData._id,
              },
            ];
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterQuestionByIndex = () => {
    const question = allDataTestQuesstion.find(
      (e, index) => index === currentIndex
    );
    setCurrentQuestion(question);
  };
  const countProgress = (Number(choosenAnswer.length) / totalPages) * 100;

  useEffect(() => {
    filterQuestionByIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, currentIndex]);

  const Onfinish = async () => {
    dispatch(end());
    try {
      const response = await testAPI.updateResults(payloadUpdateResult);
      console.log("response", response);
      if (response) {
        setScore(response && response.data.result);
        handleOpenDialog();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <LayoutDoingTestPage>
      <ReviewingDoingTestPage value={countProgress} />

      <QuestionDoingTestPage
        onNext={onNext}
        testQuestion={currentQuestion}
        onChoosenAnswer={onChoosenAnswer}
      />
      <PagtinationDoingTestPage
        testQuestion={testQuestion}
        page={page}
        s
        totalPages={totalPages}
        onChangePagtination={onChangePagtination}
        Onfinish={Onfinish}
      />
      <NotificationDialog
        open={openDialog}
        handleOpen={handleOpenDialog}
        score={score}
      />
    </LayoutDoingTestPage>
  );
};

export default DoingTestPage;
