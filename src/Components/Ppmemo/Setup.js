import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  control: {
    padding: theme.spacing(2),
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}));

export default function Setup() {
  const classes = useStyles();
  const [format, setFormat] = React.useState("Pdf16");
  //format是原始数据，为0；setFormat用于更新format

  // 用 useDispatch 產生 dispatch Value方法，dispatch用来给reducer送数据
  const dispatch = useDispatch();
  const storeFormat = (format) => {
    // 用法一樣
    dispatch({
      type: "ADD_FORMAT",
      format: format,
    });
  };

  const handleChange = (event) => {
    setFormat(event.target.value);
    storeFormat(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={6} className={classes.paper}>
            <FormLabel component="legend">
              请选择在每张A4纸上的排版数量
            </FormLabel>
            <RadioGroup
              aria-label="RadioCombination1"
              name="RadioCombination1"
              value={format}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Pdf32"
                control={<Radio />}
                label="每张排版32张"
              />
              <FormControlLabel
                value="Pdf16"
                control={<Radio />}
                label="每张排版16张"
              />
              <FormControlLabel
                value="Pdf8"
                control={<Radio />}
                label="每张排版8张"
              />
              <FormControlLabel
                value="Pdf4"
                control={<Radio />}
                label="每张排版4张"
              />
              <FormControlLabel
                value="Pdf2"
                control={<Radio />}
                label="每张排版2张"
              />
            </RadioGroup>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
