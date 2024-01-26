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
  }, []);

  const onChangePagtination = useCallback(
    (number) => {
      setPage(number);
      setCurrentIndex(number - 1);
      setOnNext(!onNext);
    },
    [page]
  );

  const totalPages = testQuestion && testQuestion.data.totalItem;

  const onChoosenAnswer = useCallback((answersData) => {
    const answers = [...answersData];

    if (answersData !== undefined) {
      const updateChoonsenAnswer =
        answersData &&
        answersData.answers?.findIndex((e) => e.choosen === true);

      if (updateChoonsenAnswer !== -1) {
        answers[updateChoonsenAnswer] = {
          answerId: answersData[updateChoonsenAnswer]._id,
          questionId: answersData._id,
        };

        setChoosenAnswer(answers);
      }
    }
  }, []);

  const filterQuestionByIndex = () => {
    const question = allDataTestQuesstion.find(
      (e, index) => index === currentIndex
    );
    setCurrentQuestion(question);
  };

  useEffect(() => {
    filterQuestionByIndex();
  }, [page, currentIndex]);

  const Onfinish = async () => {
    dispatch(end());
    try {
      const response = await testAPI.updateResults(payloadUpdateResult);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("choosenAnswer", choosenAnswer);
  return (
    <LayoutDoingTestPage>
      <ReviewingDoingTestPage value={69} />

      <QuestionDoingTestPage
        onNext={onNext}
        testQuestion={currentQuestion}
        onChoosenAnswer={onChoosenAnswer}
      />
      <PagtinationDoingTestPage
        testQuestion={testQuestion}
        page={page}
        totalPages={totalPages}
        onChangePagtination={onChangePagtination}
        Onfinish={Onfinish}
      />
    </LayoutDoingTestPage>
  );
};

export default DoingTestPage;
