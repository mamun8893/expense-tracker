import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { useContext } from "react";
import { expenseTrackerContext } from "../../context/Context.js";
import useStyle from "./style.js";

const Details = ({ title }) => {
  const classes = useStyle();
  const globalState = useContext(expenseTrackerContext);
  console.log(globalState);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
