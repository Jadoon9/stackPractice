import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SubscriptionCard = ({ head, description, status }) => {
  return (
    <Paper>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Item>Icon</Item>
        <Stack direction="column" flex={1}>
          <Item>
            <Typography variant="body1">{head}</Typography>
          </Item>
          <Item variant="caption text">{description}</Item>
        </Stack>
        <Item>{status}</Item>
      </Stack>
    </Paper>
  );
};

export default SubscriptionCard;
