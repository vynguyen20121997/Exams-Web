import React, { useState } from "react";
import {
  CREATE_EXAMS_STUDENT_DATA_TABLE_ROWS,
  CREATE_EXAMS_STUDENT_TABLE_HEAD,
} from "../constants/constants";
import { Avatar, Card, Checkbox, Typography } from "@material-tailwind/react";

const CreateExamsDataStudent = () => {
  const [studentData, setStudentData] = useState(
    CREATE_EXAMS_STUDENT_DATA_TABLE_ROWS
  );

  const onChangeSelected = (id) => {
    const studentDataUpdated = studentData.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          choosen: !el.choosen,
        };
      } else {
        return el;
      }
    });
    setStudentData(studentDataUpdated);
  };
  return (
    <>
      <Card className="mt-2 h-[150px] w-full overflow-scroll round-full">
        <table className="w-full  table-auto text-left">
          <thead>
            <tr>
              {CREATE_EXAMS_STUDENT_TABLE_HEAD.map((head) => (
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
            {CREATE_EXAMS_STUDENT_DATA_TABLE_ROWS?.map(
              ({ img, name, choosen }, index) => {
                const isLast =
                  index === CREATE_EXAMS_STUDENT_DATA_TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-50";

                return (
                  <tr
                    key={index}
                    className={choosen ? `${classes} bg-purple-50 ` : null}
                  >
                    <td>
                      <Checkbox
                        color="purple"
                        className="rounded-full"
                        checked={choosen}
                        // onClick={() => onChangeSelected(id)}
                      />
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Class
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default CreateExamsDataStudent;
