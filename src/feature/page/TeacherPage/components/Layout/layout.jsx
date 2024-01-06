import { Logo } from "../../../../../assets/Logo/Logo";
import { SimpleFooter } from "../../../../../components/Footer/Footer";
import { TeacherNavbar } from "../Navbar/Navbar";

const TeacherPageLayout = ({ children }) => {
  return (
    <div className="background-website-admin">
      <div className="bg-white w-11/12 mx-auto rounded-3xl py-5 max-h-[950px]	 ">
        <div
          className="bg-purple rounded-t-3xl h-20 flex w-full flex-row pt-4
        justify-between px-20"
        >
          <div className="pt-4">
            <Logo textcolor="text-black" logocolor="black" />
          </div>
          <div>
            <TeacherNavbar />
          </div>
        </div>
        <div className="px-20 pt-14 pb-10"> {children}</div>

        <div className="px-20">
          <SimpleFooter />
        </div>
      </div>
    </div>
  );
};

export default TeacherPageLayout;
