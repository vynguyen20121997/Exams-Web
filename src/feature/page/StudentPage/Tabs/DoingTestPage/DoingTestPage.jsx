import React from "react";
import ReviewingDoingTestPage from "./components/ReviewingDoingTestPage";
import LayoutDoingTestPage from "./components/LayoutDoingTestPage";
import QuestionDoingTestPage from "./components/QuestionDoingTestPage";
import PagtinationDoingTestPage from "./components/PagtinationDoingTestPage";

const DoingTestPage = () => {
  return (
    <LayoutDoingTestPage>
      <ReviewingDoingTestPage />
      <QuestionDoingTestPage />
      <PagtinationDoingTestPage />
    </LayoutDoingTestPage>
  );
};

export default DoingTestPage;
