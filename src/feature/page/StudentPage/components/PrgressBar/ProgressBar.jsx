import { Progress } from "@material-tailwind/react";

export function ProgressBar({ size, value }) {
  return (
    <Progress size={size} value={value} label="Completed" color="purple" />
  );
}
