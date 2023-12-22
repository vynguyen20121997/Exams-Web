import { Button, Typography } from "@material-tailwind/react";
import { SimpleFooter } from "../../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { Logo } from "../../../../assets/Logo/Logo";

const ResetPassPage = () => {
  return (
    <div className="background-website">
      <div className=" bg-white w-1/3 mx-auto rounded-3xl px-20 py-10">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-3 gap-x-12 pt-10 pb-10">
          <div>
            <Logo />
          </div>
          <div className="pt-3">
            <Typography variant="h4" color="grey">
              You've got yourself a new password.{" "}
            </Typography>
          </div>
          <p>
            The new password for your //username// have been succesfully
            changed. Please check your email
          </p>
        </div>

        <div className="flex justify-center pb-10">
          <Button variant="gradient" fullWidth>
            <Link to=""> Back to login </Link>
          </Button>
        </div>

        <SimpleFooter />
      </div>
    </div>
  );
};

export default ResetPassPage;
