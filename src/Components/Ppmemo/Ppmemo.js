import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Stepbar from "./Stepbar";
import Upload from "./Upload";
import Setup from "./Setup";
import { useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor
const Preview = React.lazy(() => import("./Preview")); //这个可以懒加载

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

function getMainContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Upload />;
    case 1:
      return <Setup />;
    case 2:
      return (
        <React.Suspense fallback={<div>loading...</div>}>
          <Preview />
        </React.Suspense>
      );
    default:
      return "Unknown stepIndex";
  }
}

const useStyles = makeStyles(() => ({
  fixedHeight280: {},
  fixedHeight100: {},
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
              <Typography>完成！</Typography>
              <Button onClick={handleReset} disabled>
                重来
              </Button>
            </div>
          ) : (
            <div>
              <Typography>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack}>
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
