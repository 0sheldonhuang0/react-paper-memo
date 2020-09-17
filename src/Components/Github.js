import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles(() => ({
  button: {
    width: "50%",
    textAlign: "center",
  },
  depositContext: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
  },
  textStyle: {
    margin: "10px",
    lineHeight: "30px",
  },
  titleStyle: {
    margin: "10px",
  },
}));

export default function Github() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>项目地址</Title>
      <Typography variant="body2" align="center" className={classes.textStyle}>
        访问本项目在Github上的仓库
      </Typography>
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href="https://github.com/0sheldonhuang0/react-paper-memo"
        >
          Github
        </Button>
      </Box>
    </React.Fragment>
  );
}
