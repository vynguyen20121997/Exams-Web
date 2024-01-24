import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { start } from "../../../../../redux/test/testSlice";
import testAPI from "../../../../../services/StudentPage/TestAPI";
import LayoutSubmitDoingTestPage from "./components/LayoutSubmitDoingTestPage";
import { SubjecGenerator } from "../../../../../utils/subjecGenerator";
import { useEffect } from "react";
import subjectAPI from "../../../../../services/AdminPage/SubjectAPI";

const SubmitTestPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: testData } = useQuery(
    "testData",
    () => testAPI.getTest(params.id),
    {
      fetchPolicy: "network-only",
    }
  );
  const { data: subjectData } = useQuery(
    "subject",
    () => subjectAPI.subjects(),
    {
      fetchPolicy: "network-only",
    },
    { refetchOnChange: false }
  );

  const test = testData && testData.data;

  const payload = {
    QuestionIds: test && test.questions,
    assignees: test && test.assignees,
    createdBy: test && test.createdBy,
    subjectId: test && test.subject,
    time: test && test.timeOfTheTest,
  };

  const onSubmitStartingTest = () => {
    dispatch(start(payload));
    navigate(`/student/doing-test/${test && test._id}`);
  };

  const idSubject = test && test.subject;

  const subjectName = SubjecGenerator(subjectData, idSubject);

  return (
    <LayoutSubmitDoingTestPage>
      <Card
        shadow={false}
        className="relative grid pt-10 max-h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/PQZMTpD/2.png')] bg-cover bg-center"
        >
          {" "}
          <Typography
            variant="h1"
            className="mb-6 font-bold leading-[1.5] "
            color="black"
          >
            {subjectName?.toUpperCase()}
          </Typography>
          <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h3"
            className="mb-6 font-bold leading-[1.5]"
            color="black"
          >
            {test?.title.toUpperCase()}
          </Typography>
          <Typography variant="h5" className="mb-4 ">
            {test?.description}
          </Typography>
          <Typography variant="h5" className="mb-4 ">
            {test?.timeOfTheTest} Minute
          </Typography>
          <Button
            className="rounded-full"
            size="lg"
            onClick={onSubmitStartingTest}
          >
            START
          </Button>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </LayoutSubmitDoingTestPage>
  );
};

export default SubmitTestPage;
