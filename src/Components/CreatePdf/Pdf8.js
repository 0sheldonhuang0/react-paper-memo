import React, { useCallback } from "react";
import jsPDF from "jspdf";
import { useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor
import { addfont } from "../../font/font";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function preparePdf(uploadData, format) {
  var doc = new jsPDF();

  addfont(doc);
  doc.addFont("bolds", "b", "normal");
  doc.setFont("b");

  //设置每个格子的间距
  var paperA4 = [297, 210];
  var horizonSegment = paperA4[0] / 4; //横线
  var verticalSegment = paperA4[1] / 2; //竖线
  var horizonSegmentText = paperA4[1] / 4; //横排分割
  var verticalSegmentText = paperA4[0] / 8; //竖排分割

  //设置内容位置
  console.log(uploadData);
  let displayUploadData = uploadData.split("\n"); //将文件内容根据换行符隔开，["A-B","A-B","A-B","A-B"...]
  let displayUploadDataA = []; //正面内容
  let displayUploadDataB = []; //反面内容

  if (displayUploadData.length % 8 != 0) {
    let temp = displayUploadData.length % 8;
    for (let i = 0; i < 8 - temp; i++) {
      displayUploadData.push(" - ");
    }
  }

  console.log(displayUploadData);

  for (let i = 0; i < displayUploadData.length; i++) {
    let displayUploadDataTemp = displayUploadData[i].split("-"); //暂时储存一张卡片正反面，["A","B"]
    displayUploadDataA.push(displayUploadDataTemp[0]); //["A","A","A","A","A"...]
    displayUploadDataB.push(displayUploadDataTemp[1]); //["B","B","B","B","B"...]
  }

  console.log(displayUploadDataA);
  console.log(displayUploadDataB);

  for (let i = 0; i < displayUploadData.length - 1; i = i + 8) {
    console.log(format);

    //正面
    //划线
    doc.setLineDash([1]);
    doc.line(verticalSegment, 5, verticalSegment, 292);
    for (let k = 1; k < 4; k++) {
      doc.line(5, k * horizonSegment, 205, k * horizonSegment);
    }

    //设置字体大小
    switch (format.fontSizeA) {
      case "fontSmall":
        doc.setFontSize(16);
        break;
      case "fontMiddle":
        doc.setFontSize(26);
        break;
      case "fontLarge":
        doc.setFontSize(46);
        break;
    }

    for (let j = 0; j < 4; j++) {
      let temp = i + j;
      doc.text(
        displayUploadDataA[temp],
        horizonSegmentText,
        (2 * j + 1) * verticalSegmentText,
        { align: "center", maxWidth: "90" }
      );
    }

    for (let j = 0; j < 4; j++) {
      let temp = i + j + 4;
      doc.text(
        displayUploadDataA[temp],
        3 * horizonSegmentText,
        (2 * j + 1) * verticalSegmentText,
        { align: "center", maxWidth: "90" }
      );
    }

    //反面
    //划线
    doc.addPage("a4");
    doc.setLineDash([1]);
    doc.line(verticalSegment, 5, verticalSegment, 292);
    for (let k = 1; k < 4; k++) {
      doc.line(5, k * horizonSegment, 205, k * horizonSegment);
    }

    //设置字体大小
    switch (format.fontSizeB) {
      case "fontSmall":
        doc.setFontSize(16);
        break;
      case "fontMiddle":
        doc.setFontSize(26);
        break;
      case "fontLarge":
        doc.setFontSize(46);
        break;
    }

    for (let j = 0; j < 4; j++) {
      let temp = i + j;
      doc.text(
        displayUploadDataB[temp],
        3 * horizonSegmentText,
        (2 * j + 1) * verticalSegmentText - 10,
        { align: "center", maxWidth: "90" }
      );
    }

    for (let j = 0; j < 4; j++) {
      let temp = i + j + 4;
      doc.text(
        displayUploadDataB[temp],
        horizonSegmentText,
        (2 * j + 1) * verticalSegmentText - 10,
        { align: "center", maxWidth: "90" }
      );
    }

    doc.addPage("a4");
    doc.setLineDash([1]);
    doc.line(verticalSegment, 5, verticalSegment, 292);
    for (let k = 1; k < 4; k++) {
      doc.line(5, k * horizonSegment, 205, k * horizonSegment);
    }
  }

  doc.save("a4.pdf");
}

const useStyles = makeStyles(() => ({
  successText: {
    margin: "50px",
  },
}));

export default function Pdf4() {
  const classes = useStyles();
  const uploadData = useSelector((state) => state.content);
  const format = useSelector((state) => state.format);

  preparePdf(uploadData, format);

  return (
    <React.Fragment>
      <div>
        <Typography variant="h4" className={classes.successText}>
          😍下载成功
        </Typography>
      </div>
    </React.Fragment>
  );
}
