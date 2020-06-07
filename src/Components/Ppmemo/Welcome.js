import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux"; //新版里导入useDispatch和useSeletor
import makeTxtFile2 from "../../images/makeTxtFile2.jpg";
import bannerLarge from "../../images/react-ppmemo-banner-small.jpg";
import PaperMEMO from "../../images/PaperMEMO_example.txt";

const useStyles = makeStyles(() => ({
  printHelperArea: {
    padding: "20px",
  },
  textStyle: {
    margin: "10px",
    textIndent: "25px",
    lineHeight: "30px",
  },
  titleStyle: {
    margin: "10px",
  },
  imageStyle: {
    margin: "20px",
    width: "80%",
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
          <img src={bannerLarge} alt="" className={classes.imageStyle} />
          <Typography
            variant="body1"
            align="left"
            className={classes.textStyle}
          >
            「纸记卡片 Paper
            MEMO」是一个自动生成可打印、可裁剪的记忆卡片集在线工具。它能生成A4大小的pdf文件，排布一定数量的卡片：打印出来后进行裁剪，让你以
            “看得见，摸得着” 的方式使用闪记卡片。
          </Typography>
          <Typography variant="h6" align="left" className={classes.titleStyle}>
            你需要准备什么？
          </Typography>
          <Typography
            variant="body1"
            align="left"
            className={classes.textStyle}
          >
            1. 打印机（或者去打印店）
          </Typography>
          <Typography
            variant="body1"
            align="left"
            className={classes.textStyle}
          >
            2. 一份符合条件的txt文件
          </Typography>
          <Typography variant="h6" align="left" className={classes.titleStyle}>
            以下是txt文件示例：
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.textStyle}
          >
            使用“-”符号分割正反面，每张卡片一行
          </Typography>
          <img src={makeTxtFile2} alt="" className={classes.imageStyle} />
        </Container>
        <a href={PaperMEMO} download>
          点击下载示例文件
        </a>
        {storeSuccessedData(true)}
      </div>
    </React.Fragment>
  );
}
