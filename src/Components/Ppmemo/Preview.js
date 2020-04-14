import React, { useCallback } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import jsPDF from "jspdf";
import Pdf2 from "../CreatePdf/Pdf2";
import Pdf4 from "../CreatePdf/Pdf4";
import Pdf8 from "../CreatePdf/Pdf8";
import Pdf16 from "../CreatePdf/Pdf16";
import Pdf32 from "../CreatePdf/Pdf32";
import { useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor

const useStyles = makeStyles(() => ({}));

function CreatPdf(uploadData) {
  Pdf2(uploadData);
}

export default function Preview() {
  const classes = useStyles();

  const uploadData = useSelector((state) => state.content);
  const format = useSelector((state) => state.format);
  //获取reducer上的数据

  return (
    <React.Fragment>
      <div>
        <ul>
          测试{uploadData}
          {format}
        </ul>
        <Button
          variant="contained"
          color="primary"
          onClick={CreatPdf(uploadData)}
        >
          点击下载
        </Button>
      </div>
    </React.Fragment>
  );
}
