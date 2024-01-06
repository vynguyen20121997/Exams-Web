import { ToastContainer } from "react-toastify";

export const CustomToastContainer = () => {
  return (
    <ToastContainer
      autoClose={1500}
      position="bottom-center"
      theme="dark"
      pauseOnHover
    />
  );
};
