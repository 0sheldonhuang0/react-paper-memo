import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
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
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Radio32"
                control={<Radio />}
                label="每张排版32张"
              />
              <FormControlLabel
                value="Radio16"
                control={<Radio />}
                label="每张排版16张"
              />
              <FormControlLabel
                value="Radio8"
                control={<Radio />}
                label="每张排版8张"
              />
              <FormControlLabel
                value="Radio4"
                control={<Radio />}
                label="每张排版4张"
              />
              <FormControlLabel
                value="Radio2"
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
