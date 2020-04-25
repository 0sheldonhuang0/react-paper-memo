import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import wechat from "../images/wechat.jpg";
import conjHelper from "../images/conjHelper.jpg";
import bannerSmall from "../images/react-ppmemo-banner-small.jpg";

const useStyles = makeStyles(() => ({
  depositContext: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
  },
  textStyle: {
    margin: "10px",
    textIndent: "25px",
    lineHeight: "30px",
  },
  titleStyle: {
    margin: "10px",
  },
}));

export default function Helper() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>这是什么？</Title>
      <Typography variant="body2" align="left" className={classes.textStyle}>
        闪记卡片（Flash
        Card），大部分情况下，它们被用作单词记忆卡片。主要目的是帮助记忆，正面写下问题，反面写答案。
      </Typography>
      <img src={bannerSmall} alt="" className={classes.imageStyle} />
      <Typography variant="body2" align="left" className={classes.textStyle}>
        Paper MEMO是一个在线工具，它可以自动生成可打印、可裁剪的记忆卡片集。
      </Typography>
      <Typography variant="body2" align="left" className={classes.textStyle}>
        它能生成A4大小的PDF文件，排布一定数量的卡片：打印出来后进行裁剪，让你以“看得见摸得着”的方式使用闪记卡片。
      </Typography>
      <Typography color="textSecondary" className={classes.titleStyle}>
        关注我的微信公众号
      </Typography>
      <Typography variant="body2" align="left" className={classes.textStyle}>
        若使用过程中，有疑问、bug、错误的情况或者改进意见，欢迎直接到公众号反馈。
      </Typography>
      <img src={wechat} alt="" className={classes.imageStyle} />
      <Typography color="textSecondary" className={classes.titleStyle}>
        其他小程序
      </Typography>
      <img src={conjHelper} alt="" className={classes.imageStyle} />
      <div></div>
    </React.Fragment>
  );
}
