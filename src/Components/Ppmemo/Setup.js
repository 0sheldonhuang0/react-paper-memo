import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import { useDispatch, useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  formLabel: {
    padding: "0 0 10px 0",
    textAlign: "left",
  },
  selectEmpty: {
    margin: "15px",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}));

export default function Setup() {
  const classes = useStyles();
  const [format, setFormat] = React.useState({
    format: "Pdf16",
    font: "fontFz",
    fontSizeA: "fontMiddle",
    fontSizeB: "fontMiddle",
    cardNum: true,
  });
  //format是原始数据，为array；setFormat用于更新format

  // 用 useDispatch 產生 dispatch Value方法，dispatch用来给reducer送数据
  const dispatch = useDispatch();
  const storeFormat = (format) => {
    // 用法一樣
    dispatch({
      type: "ADD_FORMAT",
      format: format,
    });
  };

  const handleChangeFormat = (event) => {
    format.format = event.target.value;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  const handleChangeFont = (event) => {
    format.font = event.target.value;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  const handleChangeFontSizeA = (event) => {
    format.fontSizeA = event.target.value;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  const handleChangeFontSizeB = (event) => {
    format.fontSizeB = event.target.value;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  const handleChangeCardNum = (event) => {
    format.cardNum = event.target.checked;
    setFormat({ ...format }); //就是要写成这样，不然无法更新
    storeFormat(format);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={6} className={classes.paper}>
            <FormLabel component="legend" className={classes.formLabel}>
              请选择在每张A4纸上的排版数量
            </FormLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={format.format}
              onChange={handleChangeFormat}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={"Pdf32"}>排版32张</MenuItem>
              <MenuItem value={"Pdf16"}>排版16张</MenuItem>
              <MenuItem value={"Pdf8"}>排版8张</MenuItem>
              <MenuItem value={"Pdf4"}>排版4张</MenuItem>
              <MenuItem value={"Pdf2"}>排版2张</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className={classes.paper}>
            <FormLabel component="legend" className={classes.formLabel}>
              请选择字体
            </FormLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={format.font}
              onChange={handleChangeFont}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={"fontFz"}>方正书宋</MenuItem>
              <MenuItem value={"fontAl"}>阿里普惠</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className={classes.paper}>
            <FormLabel component="legend" className={classes.formLabel}>
              请选择在A面上的字体大小
            </FormLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={format.fontSizeA}
              onChange={handleChangeFontSizeA}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={"fontSmall"}>小</MenuItem>
              <MenuItem value={"fontMiddle"}>中</MenuItem>
              <MenuItem value={"fontLarge"}>大</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className={classes.paper}>
            <FormLabel component="legend" className={classes.formLabel}>
              请选择在B面上的字体大小
            </FormLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={format.fontSizeB}
              onChange={handleChangeFontSizeB}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={"fontSmall"}>小</MenuItem>
              <MenuItem value={"fontMiddle"}>中</MenuItem>
              <MenuItem value={"fontLarge"}>大</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5} lg={5} className={classes.paper}>
            <FormControlLabel
              control={
                <Switch
                  checked={format.cardNum}
                  onChange={handleChangeCardNum}
                  name="cardNum"
                />
              }
              label="是否显示卡片编号？"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
