import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Stepbar from "../Stepbar";
import Upload from "./Upload";

function preventDefault(event) {
  event.preventDefault();
}

function getSteps() {
  return ["上传文件", "设置", "下载"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "选择一份文件并上传";
    case 1:
      return "调整纸张设置并生成卡片";
    case 2:
      return "请点击下载(PDF格式：A4、每张纸16枚卡片、可打印)";
    default:
      return "Unknown stepIndex";
  }
}

const useStyles = makeStyles();

export default function Ppmemo() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Stepbar activeStep={activeStep} steps={steps} />
        <Upload />
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>完成！</Typography>
              <Button onClick={handleReset}>重来</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  返回
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "完成" : "下一步"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
