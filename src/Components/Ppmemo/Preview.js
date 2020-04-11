import React, { useCallback } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import jsPDF from "jspdf";

const useStyles = makeStyles(() => ({}));

function CreatPdf() {
  var doc = new jsPDF();
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
}

export default function Preview() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <Button variant="contained" color="primary" onClick={CreatPdf}>
          点击下载
        </Button>
      </div>
    </React.Fragment>
  );
}
