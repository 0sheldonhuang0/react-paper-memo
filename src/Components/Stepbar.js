import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  depositContext: {
    flex: 1,
  },
}));

export default function Stepbar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>纸记卡片进度条</Title>
      <div className={classes.root}>
        <Stepper activeStep={props.activeStep} alternativeLabel>
          {props.steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </React.Fragment>
  );
}
