import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  List,
  ListItem,
} from "@material-tailwind/react";
import { answers } from "../../../../../../tests/data/StudentPage/QuestionData";

const QuestionDoingTestPage = () => {
  return (
    <div className="px-14 py-14 bg-gray-100	rounded-lg my-10">
      <Card className="w-full">
        <CardHeader> QUESTION</CardHeader>
        <CardBody>
          <List className="w-56">
            {answers.map((item) => (
              <ListItem>
                <Checkbox
                  className="rounded-full"
                  // checked={choosen}
                  // onClick={() => onChangeSelected(_id)}
                />
                {item.answer}
              </ListItem>
            ))}
          </List>
        </CardBody>
      </Card>
    </div>
  );
};

export default QuestionDoingTestPage;
