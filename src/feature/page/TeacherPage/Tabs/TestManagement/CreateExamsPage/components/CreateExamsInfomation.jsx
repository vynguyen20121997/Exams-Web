import { Input, Navbar, Typography } from "@material-tailwind/react";

const CreateExamsInfomation = () => {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto w-96 from-purple-400 to-purple-600 mb-2"
    >
      <div className="flex items-center justify-between py-1 text-white">
        <div>
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="  cursor-pointer py-1.5"
          >
            Exams Title:
          </Typography>
        </div>

        <Input
          type="search"
          color="white"
          label="Insert here..."
          shrink={false}
          containerProps={{ className: "w-[80px]" }}
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
          label="Choose here..."
          shrink={false}
          containerProps={{ className: "w-[80px] " }}
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
          type="time"
          color="white"
          label="Choose here..."
          shrink={false}
          containerProps={{ className: "w-[80px]" }}
        />
      </div>
    </Navbar>
  );
};

export default CreateExamsInfomation;
