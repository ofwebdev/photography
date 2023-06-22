import { Card } from "@mui/material";
import React from "react";
import Typography from "../../Theme/overrides/Typography";

export default function StatusCard({ text, percents, number }) {
  return (
    <Card>
      <Box>
        <Typography>{text}</Typography>
        <Typography>{percents}</Typography>
        <Typography variant="h1">{number}</Typography>
      </Box>
    </Card>
  );
}
