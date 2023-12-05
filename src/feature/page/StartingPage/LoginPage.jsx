import React from "react";
import { pageContainer } from "../../../components/PageContainer/PageContainer";
import { boxContainer, headerBoxContainer } from "../../../components/BoxContainer/BoxContainer";
import { Logo } from "../../../components/Logo/Logo";
import { SimpleFooter } from "../../../components/Footer/Footer";
import { CarouselTransition } from "../../../components/Carousel/Carousel";
import { Button } from "@material-tailwind/react";
import { LoginCard } from "../../../components/LoginCard/LoginCard";
import { backGround } from "../../../components/Background/Background";

const LoginPage = () => {
  return (
    <div class={backGround}>

    <div class={pageContainer}>

      <div class={headerBoxContainer}>
        <div>
          <Logo />
        </div>
        <div>
          <Button>Register</Button>
        </div>
      </div>

      <div class={boxContainer}>
      <LoginCard/>
          <CarouselTransition />
      </div>

      <SimpleFooter />
    </div>
    </div>

  );
};

export default LoginPage;
