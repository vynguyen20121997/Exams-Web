import { ForgotPassCard } from "../../../components/FogotPassCard/FogotPassCard";
import { SimpleFooter } from "../../../components/Footer/Footer";
import { Logo } from "../../../components/Logo/Logo";
import "./style.css";

const ForgotPassPage = () => {
  return (
    <div className="background-website">
      <div class=" bg-white w-1/3 mx-auto rounded-3xl px-20 py-10">
        <div class="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 pt-10 pb-20">
          <div>
            <Logo />
          </div>
        </div>

        <div class="flex justify-center pb-10">
          <ForgotPassCard />
        </div>

        <SimpleFooter />
      </div>
    </div>
  );
};

export default ForgotPassPage;
