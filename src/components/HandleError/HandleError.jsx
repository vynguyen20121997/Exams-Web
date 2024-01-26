import { toast } from "react-toastify";

function handleError(error) {
  console.error("Error in React:", error); // Log for debugging

  const errorMessage = error && error.response.data?.message;

  return toast(errorMessage);
}

export default handleError;
