import { Spinner } from "@material-tailwind/react";

const GlobalLoading = () => {
  return (
    <div className="fixed  inset-x-0	top-0		z-[9999] w-full h-full bg-[rgba(255, 255, 255, 0.5 )]">
      <Spinner className="absolute inset-x-0	top-0	w-full" color="purple" />
    </div>
  );
};

export default GlobalLoading;
