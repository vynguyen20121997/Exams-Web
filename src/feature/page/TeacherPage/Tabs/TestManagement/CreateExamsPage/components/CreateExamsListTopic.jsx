import { Card, Option, Select } from "@material-tailwind/react";

export const CreateExamsListTopic = (classList) => {
  return (
    <>
      <Card className="w-96">
        <Select variant="outlined" label="Select Class">
          {classList?.map((item) => (
            <Option key={item._id} value={item.title}>
              {item.title}
            </Option>
          ))}
        </Select>
      </Card>
    </>
  );
};
