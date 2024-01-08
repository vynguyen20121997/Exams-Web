import { Card, Option, Select } from "@material-tailwind/react";

export const CreateExamsListTopic = (classList) => {
  return (
    <>
      <Card className="w-96">
        <Select variant="outlined" label="Select Class">
{classList?.map((class) => (
  <Option key={class._id} value={class.title}>
    {class.title}
  </Option>
))}        
        </Select>
      </Card>
    </>
  );
};
