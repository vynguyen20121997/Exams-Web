import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination({ page, onChangePagtination, totalSize }) {
  const next = () => {
    if (page === totalSize) return;

    onChangePagtination(page + 1);
  };

  const prev = () => {
    if (page === 1) return;

    onChangePagtination(page - 1);
  };

  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={page === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{page}</strong> of{" "}
        <strong className="text-gray-900">{totalSize}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={page === totalSize}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
