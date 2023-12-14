import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import {
  boxContainer,
  headerBoxContainer,
} from "../../../../components/BoxContainer/BoxContainer";
import { CarouselTransition } from "../../../../components/Carousel/Carousel";
import { SimpleFooter } from "../../../../components/Footer/Footer";
import { Logo } from "../../../../components/Logo/Logo";
import { pageContainer } from "../../../../components/PageContainer/PageContainer";
import { RegisterCard } from "./components/RegisterCard/RegisterCard";
import { LoginCard } from "./components/LoginCard/LoginCard";

const LoginRegisterPage = () => {
  const [register, setRegister] = useState(false);

  return (
    <div className="background-website">
      <div className={pageContainer}>
        <div className={headerBoxContainer}>
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

        <div className={boxContainer}>
          {register === true && <RegisterCard setRegister={setRegister} />}
          {register === false && <LoginCard setRegister={setRegister} />}

          <CarouselTransition />
        </div>

        <SimpleFooter />
      </div>
    </div>
  );
};

export default LoginRegisterPage;
