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
        <Container maxWidth="lg" classeName={classes.printHelperArea}>
          <Typography variant="h5">如何进行打印？</Typography>
          <Typography variant="h6" align="left">
            A.自动双面打印
          </Typography>
          <Typography variant="body1" align="left">
            1. 如果您的打印机“双面打印”可用，则将打印机设置为“双面打印”。
          </Typography>
          <Typography variant="body1" align="left">
            2. 直接打印您刚才下载的PDF文件。
          </Typography>
          <Typography variant="h6" align="left">
            B.手动双面打印
          </Typography>
          <Typography variant="body1" align="left">
            1. 如果您的打印机“双面打印”不可用，则将打印机设置为“手动双面打印”。
          </Typography>
          <Typography variant="body1" align="left">
            2.
            打印时，会先打印单面。单面打印完毕后，您的打印机将提示您将纸翻转后再次送入打印机。
          </Typography>
          <Typography variant="h6" align="left">
            C. 其他打印方法
          </Typography>
          <Typography variant="body1" align="left">
            1.
            如果您的打印机均不支持上述打印方式，则可以手动设置“奇数偶数”页进行打印。
          </Typography>
          <Typography variant="body1" align="left">
            2. 打印时，先打印“奇数”页面。然后手动翻转纸张打印“偶数”页面。
          </Typography>
          <Typography variant="overline" align="left">
            注意事项：使用手动进行双面打印时，您可以先小批量测试以确定打印的结果是否正确。
          </Typography>
        </Container>
        {CreatPdf(format.format)}
      </div>
    </React.Fragment>
  );
}
