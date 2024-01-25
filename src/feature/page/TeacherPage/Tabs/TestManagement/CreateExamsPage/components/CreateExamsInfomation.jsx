import { Card, CardBody, Input } from "@material-tailwind/react";

export const CreateExamsInfomation = ({
  onBlur,
  onChange,
  title,
  description,
  timeOfTheTest,
  deadline,
  startTime,
}) => {
  return (
    <Card
      variant="gradient"
      color="blue-gray"
      className="mx-auto w-96 from-purple-400 to-purple-600 mb-2"
    >
      <CardBody>
        <div className=" items-center pb-2  ">
          <Input
            color="white"
            label="Exams Title"
            onChange={onChange}
            onBlur={onBlur}
            value={title}
            name="title"
          />
        </div>
        <div className=" items-center  py-2 ">
          <Input
            color="white"
            label="Description"
            onChange={onChange}
            onBlur={onBlur}
            value={description}
            name="description"
          />
        </div>
        <div className=" items-center  py-2 ">
          <Input
            type="number"
            color="white"
            label="Minutes"
            onChange={onChange}
            onBlur={onBlur}
            value={timeOfTheTest}
            name="timeOfTheTest"
          />
        </div>
        <div className=" items-center  py-2 ">
          <Input
            type="datetime-local"
            color="white"
            label="Starting Time"
            onChange={onChange}
            onBlur={onBlur}
            value={startTime}
            name="startTime"
          />
        </div>
        <div className=" items-center  py-2 ">
          <Input
            type="datetime-local"
            color="white"
            label="Dead Line"
            onChange={onChange}
            onBlur={onBlur}
            value={deadline}
            name="deadline"
          />
        </div>
      </CardBody>
    </Card>
  );
};
