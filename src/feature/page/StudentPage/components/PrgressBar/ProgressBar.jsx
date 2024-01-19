import { Progress } from "@material-tailwind/react";

export function ProgressBar({ size }) {
  return <Progress size={size} value={50} label="Completed" color="purple" />;
}
