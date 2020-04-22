import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Stepbar from "./Stepbar";
import Upload from "./Upload";
import Setup from "./Setup";
import Preview from "./Preview.js";
import Welcome from "./Welcome.js";
import { useDispatch, useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor

function preventDefault(event) {
  event.preventDefault();
}

function getSteps() {
  return ["准备", "上传文件", "设置并下载"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "阅读上述准备步骤后，点击下一步";
    case 1:
      return "选择一份文件并上传（当且仅当上传符合条件的txt文件后，才能进行下一步）";
    case 2:
      return "调整纸张设置并生成卡片，点击“下载”获得PDF文件";
    case 3:
      return "";
    default:
      return "Unknown stepIndex";
  }
}

function getMainContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Welcome />;
    case 1:
      return <Upload />;
    case 2:
      return <Setup />;
    case 3:
      return <Preview />;
    default:
      return "Unknown stepIndex";
  }
}

const useStyles = makeStyles(() => ({
  buttonArea: {
    margin: "0 10px 10px 10px",
  },
}));

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

  const uploadData = useSelector((state) => state.content);
  const successedData = useSelector((state) => state.successedData);
  //获取reducer上的数据

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Stepbar activeStep={activeStep} steps={steps} />
        <Grid className={classes.fixedHeight280}>
          {getMainContent(activeStep)}
        </Grid>
        <div className={classes.fixedHeight100}>
          {activeStep === steps.length ? (
            <div>
              <Button onClick={handleReset} variant="contained">
                重来
              </Button>
            </div>
          ) : (
            <div>
              <Typography variant="overline" className={classes.hintText}>
                {getStepContent(activeStep)}
              </Typography>
              <div className={classes.buttonArea}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="contained"
                  className={classes.buttonArea}
                >
                  返回
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.buttonArea}
                  disabled={successedData === false}
                >
                  {activeStep === steps.length - 1 ? "下载" : "下一步"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
