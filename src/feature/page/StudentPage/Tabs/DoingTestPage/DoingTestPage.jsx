import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import testQuestionAPI from "../../../../../services/StudentPage/TestQuestionAPI";
import LayoutDoingTestPage from "./components/LayoutDoingTestPage";
import PagtinationDoingTestPage from "./components/PagtinationDoingTestPage";
import QuestionDoingTestPage from "./components/QuestionDoingTestPage";
import ReviewingDoingTestPage from "./components/ReviewingDoingTestPage";

const DoingTestPage = () => {
  // const params = useParams();
  const testResourceAPI = useSelector((state) => state.test.fetchTestResources);
  const [page, setPage] = useState(1);
  const [choosenAnswer, setChoosenAnswer] = useState([]);
  const [isMovingForward, setIsMovingFoward] = useState(true);
  const [remindNumber, setRemindNumber] = useState([1]);
  const [allDataTestQuesstion, setAllDataTestQuestion] = useState([]);

  // const payloadGetResult = {
  //   testId: params.id,
  //   sendToId: testResourceAPI.createdBy,
  //   subjectId: testResourceAPI.subjectId,
  // };

  const payloadGetQuestion = {
    QuestionIds: testResourceAPI.QuestionIds,
    assignees: testResourceAPI.assignees,
  };

  const { data: testQuestion } = useQuery(
    ["testQuestion", page],
    () =>
      testQuestionAPI.questionTest({ page: page, body: payloadGetQuestion }),
    {
      fetchPolicy: "network-only",
    },
    {
      refetchOnChange: true,
    }
  );

  useEffect(() => {
    if (isMovingForward && testQuestion) {
      setAllDataTestQuestion([...allDataTestQuesstion, testQuestion.data.data]);
    }
  }, [testQuestion]);

  // const { result } = useQuery(
  //   "result",
  //   () => testAPI.getResults(payloadGetResult),
  //   {
  //     fetchPolicy: "network-only",
  //   }
  // );

  const onChangePagtination = useCallback(
    (number) => {
      setPage(number);
      const isNumberExist = remindNumber.includes(number);
      if (isNumberExist) {
        setIsMovingFoward(false);
      } else {
        setIsMovingFoward(true);
        setRemindNumber([...remindNumber, number]);
      }
      console.log("isNumberExist", isNumberExist);
    },

    [page]
  );

  console.log("allDataTestQuesstion", allDataTestQuesstion);

  console.log("isMovingForward", isMovingForward);

  const totalPages = testQuestion && testQuestion.data.pagination;

  // useEffect(() => {
  //   const progressOftheTest = page/totalPages
  // }, [])

  const onChoosenAnswer = useCallback((answersData) => {
    if (answersData !== undefined) {
      const arrayOfAnswer = [];
      const updateChoonsenAnswer =
        (answersData && answersData.find((e) => e.choosen === true)) || [];
      arrayOfAnswer.push(updateChoonsenAnswer);
      setChoosenAnswer(arrayOfAnswer);
    }
  }, []);

  return (
    <LayoutDoingTestPage>
      <ReviewingDoingTestPage value={69} />
      <QuestionDoingTestPage
        testQuestion={testQuestion}
        onChoosenAnswer={onChoosenAnswer}
      />
      <PagtinationDoingTestPage
        testQuestion={testQuestion}
        page={page}
        totalPages={totalPages}
        onChangePagtination={onChangePagtination}
      />
    </LayoutDoingTestPage>
  );
};

export default DoingTestPage;
