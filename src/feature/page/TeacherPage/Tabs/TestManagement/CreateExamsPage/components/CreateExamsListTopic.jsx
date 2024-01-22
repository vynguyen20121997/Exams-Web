import { Card, Option, Select } from "@material-tailwind/react";
// import { classList } from "../../../../../../../tests/data/TeacherPage/classData";

export const CreateExamsListTopic = ({
  classList,
  setFieldValue,
  setFieldTouched,
}) => {
  const classData = classList?.data.data || [];
  return (
    <Card className="w-96 mx-auto	">
      <Select
        color="purple"
        variant="outlined"
        label="Select Class"
        onChange={(value) => setFieldValue("classId", value)}
        onBlur={() => setFieldTouched("classId", true)}
      >
        {classData.map((item) => (
          <Option key={item._id} value={item._id}>
            {item.title}
          </Option>
        ))}
      </Select>
    </Card>
  );
};
