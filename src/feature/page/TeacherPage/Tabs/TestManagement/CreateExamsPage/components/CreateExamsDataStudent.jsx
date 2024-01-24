import { Avatar, Card, Checkbox, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { CREATE_EXAMS_STUDENT_DATA_TABLE_ROWS } from "../constants/constants";

export const CreateExamsDataStudent = ({
  studentList,
  setValues,
  setFieldValue,
}) => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    if (studentList) {
      const onChooseStudentList = studentList?.data.data || [];
      setStudentData(onChooseStudentList);
    }
  }, [studentList]);

  const onChangeSelected = (_id) => {
    const studentDataUpdated = studentData.map((el) => {
      if (el._id === _id) {
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

  useEffect(() => {
    const chosenStudentList = studentData.filter((e) => e.choosen === true);
    setFieldValue("assignees", chosenStudentList);
  }, [setFieldValue, setValues, studentData]);

  return (
    <>
      <Card className="my-4 max-h-[230px] w-96 overflow-scroll mx-auto round-full">
        <table className="w-full  table-auto text-left">
          <thead>
            <tr>
              <th
                colspan="3"
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 min-w-8 max-w-48"
              >
                <Typography
                  variant="medium"
                  color="black"
                  className="font-normal leading-none opacity-70"
                >
                  Assign Student
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {studentData?.map(({ _id, img, name, choosen }, index) => {
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
                      className="rounded-full"
                      checked={choosen}
                      onClick={() => onChangeSelected(_id)}
                    />
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-1024.png"
                        alt={name}
                        size="sm"
                      />
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
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
};
