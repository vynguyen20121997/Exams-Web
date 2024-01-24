import React, { useCallback, useEffect, useState } from "react";
import ReviewingDoingTestPage from "./components/ReviewingDoingTestPage";
import LayoutDoingTestPage from "./components/LayoutDoingTestPage";
import QuestionDoingTestPage from "./components/QuestionDoingTestPage";
import PagtinationDoingTestPage from "./components/PagtinationDoingTestPage";
import { useQuery } from "react-query";
import testAPI from "../../../../../services/StudentPage/TestAPI";
import { useParams } from "react-router-dom";
import testQuestionAPI from "../../../../../services/StudentPage/TestQuestionAPI";
import { useSelector } from "react-redux";

const DoingTestPage = () => {
  const params = useParams();
  const testResourceAPI = useSelector((state) => state.test.fetchTestResources);
  const [page, setPage] = useState(1);

  const payloadGetResult = {
    testId: params.id,
    sendToId: testResourceAPI.createdBy,
    subjectId: testResourceAPI.subjectId,
  };

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
    { refetchOnChange: true }
  );

  const { result } = useQuery(
    "result",
    () => testAPI.getResults(payloadGetResult),
    {
      fetchPolicy: "network-only",
    }
  );

  const onChangePagtination = useCallback(
    (number) => {
      setPage(number);
    },
    [page]
  );
  return (
    <LayoutDoingTestPage>
      <ReviewingDoingTestPage />
      <QuestionDoingTestPage testQuestion={testQuestion} />
      <PagtinationDoingTestPage
        testQuestion={testQuestion}
        page={page}
        onChangePagtination={onChangePagtination}
      />
    </LayoutDoingTestPage>
  );
};

export default DoingTestPage;
