import { Typography } from "@mui/material";
import React from "react";

interface SectionTitlePrps {
  text: string;
}

export const SectionTitle = ({ text }: SectionTitlePrps) => {
  return <Typography sx={{ backgroundColor: "#b7e6eb" }}>{text}</Typography>;
};
