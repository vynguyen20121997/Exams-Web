import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";

const QuestionDoingTestPage = ({ testQuestion }) => {
  const [answerData, setAnswerData] = useState([]);

  useEffect(() => {
    if (testQuestion) {
      const questionListData = testQuestion?.data.data[0] || [];
      setAnswerData(questionListData);
    }
  }, [testQuestion]);

  const onChangeSelected = useCallback(
    (_id) => {
      const choosenAsnwer =
        answerData && answerData.answers?.filter((e) => e.choosen === true);
      if (choosenAsnwer.length > 0) {
        return null;
      }
      setAnswerData((prevAnswerData) => ({
        ...prevAnswerData,
        answers: prevAnswerData.answers.map((el) =>
          el._id === _id ? { ...el, choosen: !el.choosen } : el
        ),
      }));
    },
    [answerData]
  );
  console.log(answerData);

  return (
    <div className="px-14 py-14 bg-gray-100	rounded-lg my-10">
      <Card className="w-full">
        <CardHeader>
          {answerData && answerData.questionContent?.toUpperCase()}
        </CardHeader>
        <CardBody>
          <List className="w-full">
            {answerData &&
              answerData.answers?.map((item) => {
                const unChoosenStyle =
                  "text-sm font-normal text-blue-gray-700 hover:bg-purple-50 hover:text-black focus:bg-purple-50 focus:text-black";
                const choosenStyle =
                  "text-sm font-normal text-blue-gray-700 bg-purple-50 hover:bg-purple-50 hover:text-black";
                return (
                  <ListItem
                    className={item.choosen ? choosenStyle : unChoosenStyle}
                    onClick={() => onChangeSelected(item._id)}
                  >
                    <Checkbox
                      className="rounded-full "
                      checked={item.choosen === true}
                    />
                    {item.content}
                  </ListItem>
                );
              })}
          </List>
        </CardBody>
      </Card>
    </div>
  );
};

export default QuestionDoingTestPage;
