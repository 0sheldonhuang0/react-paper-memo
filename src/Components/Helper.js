import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Title from "./Title";
import wechat from "../images/wechat.jpg";

function preventDefault(event) {
  event.preventDefault();
}

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

const useStyles = makeStyles(() => ({
  depositContext: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
  },
}));

export default function Helper() {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <React.Fragment>
      <Title>使用帮助</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        使用帮助
      </Typography>
      <Typography variant="body2">使用帮助</Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        关注我的微信公众号
      </Typography>
      <img src={wechat} alt="" className={classes.imageStyle} />
      <div></div>
    </React.Fragment>
  );
}
