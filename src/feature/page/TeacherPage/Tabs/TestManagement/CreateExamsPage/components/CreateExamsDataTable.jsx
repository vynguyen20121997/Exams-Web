import { Card, Checkbox, Typography } from "@material-tailwind/react";
import {
  CREATE_EXAMS_TABLE_HEAD,
  CREATE_EXAMS_TABLE_ROWS,
} from "../constants/constants";
import { useState } from "react";

export function CreateExamsDataTable() {
  const [questionData, setQuestionData] = useState(CREATE_EXAMS_TABLE_ROWS);
  console.log(questionData);

  const onChangeSelected = (id) => {
    const questionDataUpdated = questionData.map((el) => {
      if (el.id === id) {
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

  return (
    <Card className="h-[570px] w-[1200px] overflow-scroll round-full">
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
            (
              {
                id,
                question,
                answer1,
                answer2,
                answer3,
                answer4,
                date,
                choosen,
              },
              index
            ) => {
              const isLast = index === CREATE_EXAMS_TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-gray-50";

              return (
                <tr
                  key={id}
                  className={choosen ? `${classes} bg-purple-50 ` : null}
                >
                  <td>
                    <Checkbox
                      color="purple"
                      className="rounded-full"
                      checked={choosen}
                      onClick={() => onChangeSelected(id)}
                    />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal"
                    >
                      {question}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {answer1}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {answer2}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {answer3}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {answer4}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
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
