"use client";

import MainModal from "../MainModal";
import SuccessModal from "../SuccessModal";
import ClientSubmit from "../../Buttons";
import { useState } from "react";

export default function FeedbackModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [status, setStatus] = useState(false);

  return (
    <div>
      <ClientSubmit onClick={handleOpen} />
      {!status ? (
        <MainModal
          open={open}
          handleClose={handleClose}
          onSetStatus={setStatus}
        />
      ) : (
        <SuccessModal
          open={open}
          handleClose={handleClose}
          onSetStatus={setStatus}
        />
      )}
    </div>
  );
}
