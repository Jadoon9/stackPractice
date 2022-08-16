import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import SubscriptionCard from "./SubscriptionCard";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DUMMY_DATA = [
  {
    header: "Wifi Marketing",
    description: "INstantly update the data",
    status: "pending",
  },
  {
    header: " Marketing",
    description: "INstantly update the data",
    status: "pending",
  },
  {
    header: "Data JOb",
    description: "INstantly update the data",
    status: "pending",
  },
  {
    header: "SHAHZEB JDOON",
    description: "INstantly update the data",
    status: "pending",
  },
  {
    header: "SHAHZEB JDOON",
    description: "INstantly update the data",
    status: "pending",
  },
  {
    header: "SHAHZEB JDOON",
    description: "INstantly update the data",
    status: "pending",
  },
  {
    header: "SHAHZEB JDOON",
    description: "INstantly update the data",
    status: "pending",
  },
];

const Subscriptins = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen("body")}>scroll=body</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Stack></Stack>
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Stack direction="column" spacing={2}>
              {DUMMY_DATA.map((item, index) => {
                return (
                  <div key={index}>
                    <SubscriptionCard
                      head={item?.header}
                      description={item?.description}
                      status={item?.status}
                    />
                  </div>
                );
              })}
            </Stack>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Subscriptins;
