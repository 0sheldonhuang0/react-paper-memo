import React, { useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Pdf4 from "../CreatePdf/Pdf4";
import Pdf8 from "../CreatePdf/Pdf8";
import Pdf16 from "../CreatePdf/Pdf16";
import Pdf32 from "../CreatePdf/Pdf32";
import { useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor

const Pdf2 = React.lazy(() => import("../CreatePdf/Pdf2")); //preview.js整体懒加载

const CreatPdf = (pdfType) => {
  switch (pdfType) {
    case "Pdf2":
      return (
        <React.Suspense
          fallback={
            <div>
              <CircularProgress />
              <Typography variant="h6" className={{ margin: "20px" }}>
                等待下载中...这可能需要一些时间
              </Typography>
            </div>
          }
        >
          <Pdf2 />
        </React.Suspense>
      );
    default:
      return "Unknown stepIndex";
  }
};

const useStyles = makeStyles(() => ({
  printHelperArea: {
    padding: "20px",
  },
}));

export default function Preview() {
  const classes = useStyles();

  const uploadData = useSelector((state) => state.content);
  const format = useSelector((state) => state.format);
  //获取reducer上的数据
  console.log(format.format);

  return (
    <React.Fragment>
      <div>
        {CreatPdf(format.format)}
        <Container maxWidth="lg" classeName={classes.printHelperArea}>
          <Typography variant="h5" gutterBottom>
            如何进行打印？
          </Typography>
          <Typography variant="h6" gutterBottom align="left">
            A.自动双面打印
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
}
