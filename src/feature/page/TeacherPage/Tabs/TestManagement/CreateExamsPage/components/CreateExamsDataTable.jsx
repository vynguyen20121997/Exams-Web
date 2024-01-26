import { Card, Checkbox, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { CREATE_EXAMS_TABLE_HEAD } from "../constants/constants";

export function CreateExamsDataQuestion({ questionList, setFieldValue }) {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    if (questionList) {
      const questionListData = questionList?.data.data || [];
      setQuestionData(questionListData);
    }
  }, [questionList, setFieldValue]);

  const onChangeSelected = (_id) => {
    const questionDataUpdated = questionData.map((el) => {
      if (el._id === _id) {
        return {
          ...el,
          choosen: !el.choosen,
        };
      } else {
        return el;
      }
    });
    setQuestionData(questionDataUpdated);
  };

  useEffect(() => {
    const chosenQuestionsList = questionData?.filter((e) => e.choosen === true);
    if (chosenQuestionsList) {
      setFieldValue("questions", chosenQuestionsList);
    }
    console.log("chosenQuestionsList", chosenQuestionsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionData]);

  return (
    <Card className="ml-8 max-h-[735px] min-w-full max-w-[1400px] overflow-scroll round-full">
      <table className="w-full  table-auto text-left">
        <thead>
          <tr>
            {CREATE_EXAMS_TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 min-w-8 max-w-48"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {questionData?.map(
            ({ _id, questionContent, answers, createdAt, choosen }, index) => {
              const isLast = index === questionData.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-gray-50";

              return (
                <tr
                  key={_id}
                  className={choosen ? `${classes} bg-purple-50 ` : null}
                >
                  <td>
                    <Checkbox
                      color="purple"
                      className="rounded-full"
                      checked={choosen}
                      onClick={() => onChangeSelected(_id)}
                    />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal"
                    >
                      {questionContent}
                    </Typography>
                  </td>
                  {answers?.map((ans) => (
                    <td>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {ans.content}
                      </Typography>
                    </td>
                  ))}
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
}
