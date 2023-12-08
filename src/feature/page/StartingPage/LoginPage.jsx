import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import {
  boxContainer,
  headerBoxContainer,
} from "../../../components/BoxContainer/BoxContainer";
import { CarouselTransition } from "../../../components/Carousel/Carousel";
import { SimpleFooter } from "../../../components/Footer/Footer";
import { LoginCard } from "../../../components/LoginCard/LoginCard";
import { Logo } from "../../../components/Logo/Logo";
import { pageContainer } from "../../../components/PageContainer/PageContainer";
import "./style.css";
import { RegisterCard } from "../../../components/RegisterCard/RegisterCard";

const LoginPage = () => {
  const [register, setRegister] = useState(false);

  return (
    <div className="background-website">
      <div class={pageContainer}>
        <div class={headerBoxContainer}>
          <div>
            <Logo />
          </div>
          {register === false && (
            <div>
              <Button variant="gradient" onClick={() => setRegister(true)}>
                Register
              </Button>
            </div>
          )}
        </div>

        <div class={boxContainer}>
          {register === true && <RegisterCard setRegister={setRegister} />}
          {register === false && <LoginCard setRegister={setRegister} />}

          <CarouselTransition />
        </div>

        <SimpleFooter />
      </div>
    </div>
  );
};

export default LoginPage;
