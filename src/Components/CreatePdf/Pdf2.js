import jsPDF from "jspdf";
import { addfont } from "../../font/font";

export default function Pdf2(uploadData) {
  var doc = new jsPDF();

  addfont(doc);
  doc.addFont("bolds", "b", "normal");
  doc.setFont("b");

  //设置每个格子的间距
  var paperA4 = [297, 210];
  var verticalSegment = paperA4[0] / 2;
  var verticalSegmentText = paperA4[0] / 4;
  var horizonSegmentText = paperA4[1] / 2;

  //设置分割线（虚线）
  doc.setLineDash([1]);
  doc.line(5, verticalSegment, 205, verticalSegment);

  //设置内容位置
  console.log(uploadData);
  doc.text(uploadData, horizonSegmentText, verticalSegmentText, "center");
  doc.text(uploadData, horizonSegmentText, 3 * verticalSegmentText, "center");

  doc.save("a4.pdf");
}
