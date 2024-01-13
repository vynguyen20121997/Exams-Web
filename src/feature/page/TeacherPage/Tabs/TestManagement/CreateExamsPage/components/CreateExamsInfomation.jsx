import { Input, Navbar, Typography } from "@material-tailwind/react";

const CreateExamsInfomation = () => {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto w-96 from-purple-400 to-purple-600 mb-2"
    >
      <div className="flex items-center justify-between py-1 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="cursor-pointer py-1.5"
        >
          Exams Title:
        </Typography>

        <Input
          color="white"
          label="Title"
          shrink={false}
          containerProps={{ className: "w-[60px]" }}
        />
      </div>
      <div className="flex items-center justify-between py-1 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="cursor-pointer py-1.5"
        >
          Description:
        </Typography>

        <Input
          color="white"
          label="Description"
          shrink={false}
          containerProps={{ className: "w-[60px]" }}
        />
      </div>
      <div className="flex items-center justify-between py-1 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="cursor-pointer py-1.5"
        >
          Limit Time:
        </Typography>

        <Input
          type="number"
          color="white"
          label="Minutes"
          shrink={false}
          containerProps={{ className: "w-[60px]" }}
        />
      </div>
      <div className="flex items-center py-2 justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className=" cursor-pointer py-1.5"
        >
          Starting Time:
        </Typography>
        <Input
          type="datetime-local"
          color="white"
          label="Date and Time"
          shrink={false}
          containerProps={{ className: "w-[60px] " }}
        />
      </div>
      <div className="flex items-center pt-2 justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className=" cursor-pointer py-1.5"
        >
          End Time:
        </Typography>
        <Input
          type="datetime-local"
          color="white"
          label="Date and Time"
          shrink={false}
          containerProps={{ className: "w-[60px]" }}
        />
      </div>
    </Navbar>
  );
};

export default CreateExamsInfomation;
