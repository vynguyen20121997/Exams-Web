import { Button, Typography } from "@material-tailwind/react";
import TeacherPageLayout from "../../../components/Layout/layout";
import { CreateExamsDataTable } from "./components/CreateExamsDataTable";
import { CreateExamsListTopic } from "./components/CreateExamsListTopic";
import CreateExamsInfomation from "./components/CreateExamsInfomation";

const CreateExamsPage = () => {
  return (
    <TeacherPageLayout>
      <div className="flex justify-between	">
        <div>
          <div>
            <Typography
              variant="h4"
              color="black"
              className=" text-black-500 pb-5"
            >
              SUBJECT NAME
            </Typography>
          </div>
          <div>
            <CreateExamsInfomation />
          </div>
          <div>
            <CreateExamsListTopic />
          </div>
          <div>
            <Button
              className="rounded-lg my-5 bg-[#cfd8dc] text-slate-800 font-normal   opacity-70"
              fullWidth
            >
              Create exams
            </Button>
          </div>
        </div>
        <div>
          <CreateExamsDataTable />
        </div>
      </div>
    </TeacherPageLayout>
  );
};

export default CreateExamsPage;
