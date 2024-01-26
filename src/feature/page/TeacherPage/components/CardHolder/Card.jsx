import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../../constants/urls";
import { testTopicData } from "../../../../../tests/data/TeacherPage/subjectData";
import { useEffect, useState } from "react";

export const TestCard = ({ allTestList }) => {
  const navigate = useNavigate();
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    if (allTestList) {
      const testsDataList = allTestList?.data.data || [];
      setTestData(testsDataList);
    }
  }, [allTestList]);
  console.log(testData);

  return (
    <>
      {testData.map((item) => {
        return (
          <Card className="w-[250px] h-[350px] shadow-lg mr-10">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://i.ibb.co/G5wScRf/Thi-t-k-ch-a-c-t-n.png"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/30 " />
            </CardHeader>
            <CardBody>
              <div className=" text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-small"
                >
                  {item.title}
                </Typography>
                <Typography variant="small" color="gray" className="font-small">
                  {item.description}
                </Typography>
                <Typography variant="small" color="gray" className="font-small">
                  {item.count}
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                size="lg"
                fullWidth={true}
                onClick={() => navigate(`/${PATHS.teacher_exams_detail}`)}
              >
                CHECK
              </Button>
            </CardFooter>
          </Card>
        );
      })}{" "}
    </>
  );
};
