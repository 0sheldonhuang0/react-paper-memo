import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Title from "../Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(() => ({
  depositContext: {
    flex: 1,
  },
  root: {
    height: "200px",
    borderStyle: "dashed",
    borderColor: "#CCCCCC",
    margin: "20px",
  },
  text: {
    textAlign: "center",
    position: "relative",
    top: "45%",
  },
}));

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Paper className={classes.root}>
          <Typography className={classes.text}>拖拽文件上传</Typography>
        </Paper>
      </div>
    </React.Fragment>
  );
}
