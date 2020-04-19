import React, { useCallback } from "react";
import jsPDF from "jspdf";
import { useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor
import { addfont } from "../../font/font";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function preparePdf(uploadData) {
  var doc = new jsPDF();

  addfont(doc);
  doc.addFont("bolds", "b", "normal");
  doc.setFont("b");

  //设置每个格子的间距
  var paperA4 = [297, 210];
  var verticalSegment = paperA4[0] / 2;
  var verticalSegmentText = paperA4[0] / 4;
  var horizonSegmentText = paperA4[1] / 2;

  //设置内容位置
  console.log(uploadData);
  let displayUploadData = uploadData.split("\n"); //将文件内容根据换行符隔开，["A-B","A-B","A-B","A-B"...]
  let displayUploadDataA = []; //正面内容
  let displayUploadDataB = []; //反面内容

  if (displayUploadData.length % 2 != 0) {
    displayUploadData.push(" - ");
  }

  for (let i = 0; i < displayUploadData.length; i++) {
    let displayUploadDataTemp = displayUploadData[i].split("-"); //暂时储存一张卡片正反面，["A","B"]
    displayUploadDataA.push(displayUploadDataTemp[0]); //["A","A","A","A","A"...]
    displayUploadDataB.push(displayUploadDataTemp[1]); //["B","B","B","B","B"...]
  }

  for (let i = 0; i < displayUploadData.length - 1; i = i + 2) {
    //设置分割线（虚线）
    doc.setLineDash([1]);
    doc.line(5, verticalSegment, 205, verticalSegment);

    doc.text(
      displayUploadDataA[i],
      horizonSegmentText,
      verticalSegmentText,
      "center"
    );
    doc.text(
      displayUploadDataA[i + 1],
      horizonSegmentText,
      3 * verticalSegmentText,
      "center"
    );
    doc.addPage("a4");
    //设置分割线（虚线）
    doc.setLineDash([1]);
    doc.line(5, verticalSegment, 205, verticalSegment);

    doc.text(displayUploadDataB[i], horizonSegmentText, verticalSegmentText, {
      align: "center",
      maxWidth: "105",
    });
    doc.text(
      displayUploadDataB[i + 1],
      horizonSegmentText,
      3 * verticalSegmentText,
      { align: "center", maxWidth: "105" }
    );
    doc.addPage("a4");
    //设置分割线（虚线）
    doc.setLineDash([1]);
    doc.line(5, verticalSegment, 205, verticalSegment);
  }

  doc.save("a4.pdf");
}

const useStyles = makeStyles(() => ({
  successText: {
    margin: "50px",
  },
}));

export default function Pdf2() {
  const classes = useStyles();
  const uploadData = useSelector((state) => state.content);
  preparePdf(uploadData);

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
