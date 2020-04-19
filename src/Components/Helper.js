import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import wechat from "../images/wechat.jpg";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(() => ({
  depositContext: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
  },
  textStyle: {},
}));

export default function Helper() {
  const classes = useStyles();

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
