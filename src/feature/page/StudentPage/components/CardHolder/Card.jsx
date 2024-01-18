import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { testTopicData } from "../../../../../tests/data/TeacherPage/subjectData";
import { ProgressLabel } from "../PrgressBar/ProgressBar";

export const StudentTestCard = () => {
  const topicData = testTopicData.topics;
  const navigate = useNavigate();

  return (
    <>
      {topicData.map((item) => {
        return (
          <Card className="w-[250px] h-[380px] shadow-lg mr-10">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://i.ibb.co/G5wScRf/Thi-t-k-ch-a-c-t-n.png"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/30 " />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </IconButton>
            </CardHeader>
            <CardBody>
              <div className=" text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-small"
                >
                  {item.topic}
                </Typography>
                <Typography variant="small" color="gray" className="font-small">
                  lorem islum dolor sit amet, consectetur
                </Typography>
              </div>
              <div className="pt-2">
                <ProgressLabel />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                color="blue-gray"
                size="lg"
                fullWidth={true}
                onClick={() => navigate("student/doing-test")}
              >
                CONTINUE
              </Button>
            </CardFooter>
          </Card>
        );
      })}{" "}
    </>
  );
};
