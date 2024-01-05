import { Logo } from "../../../../../assets/Logo/Logo";
import { SimpleFooter } from "../../../../../components/Footer/Footer";
import { AdminNavbar } from "../Navbar/Navbar";

const AdminPageLayout = ({ children }) => {
  return (
    <div className="background-website-admin">
      <div className="bg-white w-11/12 mx-auto rounded-3xl py-5 ">
        <div
          className="bg-purple rounded-t-3xl h-20 flex w-full flex-row pt-4
        justify-between px-20"
        >
          <div className="pt-4">
            <Logo textcolor="text-black" logocolor="black" />
          </div>
          <div>
            <AdminNavbar />
          </div>
        </div>
        <div className="px-20 pt-5 pb-10"> {children}</div>

        <div className="px-20">
          <SimpleFooter />
        </div>
      </div>
    </div>
  );
};

export default AdminPageLayout;
