import React from "react";
import { Typography, Link } from "@mui/material";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      data-cy="copyright_section"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://sliide.com">
        Sliide
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
