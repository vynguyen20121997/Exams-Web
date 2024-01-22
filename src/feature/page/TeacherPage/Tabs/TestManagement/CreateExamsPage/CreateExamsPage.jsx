import { Button, Typography } from "@material-tailwind/react";
import { useQuery } from "react-query";
import TeacherPageLayout from "../../../components/Layout/layout";
import { getListUserTeacherPage } from "../../../../../../services/TeacherPage/GetListUserAPI";
import ClassAPITeacherPage from "../../../../../../services/TeacherPage/ClassAPI";
import { USER_ROLES } from "./constants/constants";
import { QuestionAPITeacherPage } from "../../../../../../services/TeacherPage/QuestionAPI";
import { Formik } from "formik";
import { CreateExamsInfomation } from "./components/CreateExamsInfomation";
import { CreateExamsDataStudent } from "./components/CreateExamsDataStudent";
import { CreateExamsDataQuestion } from "./components/CreateExamsDataTable";
import { CreateExamsListTopic } from "./components/CreateExamsListTopic";
import testAPI from "../../../../../../services/TeacherPage/TestAPI";
import { toast } from "react-toastify";
import { CustomToastContainer } from "../../../../../../utils/toast";
import { useNavigate } from "react-router-dom";

function CreateExamsPage() {
  const navigate = useNavigate();
  const { data: studentList } = useQuery(
    "studentList",
    () => getListUserTeacherPage.getListUser({ role: USER_ROLES.STUDENT }),
    { fetchPolicy: "network-only" }
  );

  const { data: classList } = useQuery(
    "classList",
    () => ClassAPITeacherPage.classes(),
    { fetchPolicy: "network-only" }
  );

  const { data: questionList } = useQuery(
    "questionList",
    () => QuestionAPITeacherPage.getQuestions({ limit: 10, page: 1 }),
    { fetchPolicy: "network-only" }
  );

  return (
    <Formik
      initialValues={{
        title: "",
        classId: "",
        description: "",
        timeOfTheTest: "",
        deadline: "",
        assignees: [],
        questions: [],
      }}
      onSubmit={async (values) => {
        console.log(values);
        try {
          await testAPI.createTest(values);
        } catch (error) {
        } finally {
          toast("Test created successfully!");
          navigate("/teacher");
        }
      }}
    >
      {(props) => (
        <>
          <TeacherPageLayout>
            <div className="grid grid-cols-4">
              <div>
                <div className="flex justify-center">
                  <Typography
                    variant="h4"
                    color="black"
                    className=" text-black-500 pb-5 "
                  >
                    SUBJECT NAME
                  </Typography>
                </div>
                <div className="pb-3">
                  <CreateExamsListTopic
                    classList={classList}
                    setFieldValue={props.setFieldValue}
                    setFieldTouched={props.setFieldTouched}
                  />
                </div>
                <div>
                  <CreateExamsInfomation
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    title={props.values.title}
                    description={props.values.description}
                    timeOfTheTest={props.values.timeOfTheTest}
                    deadline={props.values.deadline}
                  />
                </div>
                <div>
                  <CreateExamsDataStudent
                    studentList={studentList}
                    setFieldValue={props.setFieldValue}
                  />
                </div>
                <div>
                  <Button
                    className="rounded-lg 
                   mx-auto 
                    w-96 bg-[#cfd8dc] 
                    text-slate-800 
                    font-normal  opacity-70"
                    fullWidth
                    onClick={() => props.handleSubmit()}
                  >
                    Create exams
                  </Button>
                </div>
              </div>
              <div class="col-span-3">
                <CreateExamsDataQuestion
                  setFieldValue={props.setFieldValue}
                  questionList={questionList}
                />
              </div>
            </div>
          </TeacherPageLayout>
          <CustomToastContainer />
        </>
      )}
    </Formik>
  );
}

export default CreateExamsPage;
