import React, { useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor

const useStyles = makeStyles(() => ({
  printHelperArea: {
    padding: "20px",
  },
}));

export default function Welcome() {
  const classes = useStyles();

  // 用 useDispatch 產生 dispatch 方法，dispatch用来给reducer送数据
  const dispatch = useDispatch();
  const storeSuccessedData = (uploadData) => {
    dispatch({
      type: "ADD_UPLOADSUCCESS",
      successedData: uploadData,
    });
  };

  return (
    <React.Fragment>
      <div>
        <Container maxWidth="lg" className={classes.printHelperArea}>
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
        {storeSuccessedData(true)}
      </div>
    </React.Fragment>
  );
}
