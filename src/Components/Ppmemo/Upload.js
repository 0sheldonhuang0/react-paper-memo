import React, { useCallback, Component } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(() => ({
  depositContext: {
    flex: 1,
  },
  root: {
    height: 200,
    borderStyle: "dashed",
    borderColor: "#CCCCCC",
  },
  text: {
    textAlign: "center",
    position: "relative",
    top: "40%",
  },
}));

export default function Upload(props) {
  const classes = useStyles();

  const [uploadData, setUploadData] = React.useState(0);
  //uploadData是原始数据，为0；setUploadData用于更新uploadData

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr); //读取文件内容
        console.log(file.name); //读取文件名
        newUploadData(binaryStr); //使用下方的函数newUploadData
        storeUploadData(binaryStr);
      };
      reader.readAsText(file);
    });
  }, []);

  const newUploadData = (e) => setUploadData(e);
  //把它当作一个函数，函数名为newUploadData，e为输入的变量，setUploadData(e)用来更改uploadData的值

  // 用 useDispatch 產生 dispatch 方法，dispatch用来给reducer送数据
  const dispatch = useDispatch();
  const storeUploadData = (uploadData) => {
    // 用法一樣
    dispatch({
      type: "ADD_CONTENT",
      content: uploadData,
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <React.Fragment>
      <div {...getRootProps()}>
        <Paper className={classes.root}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className={classes.text}>拖到这里来 ...</p>
          ) : (
            <p className={classes.text}>拖拽到此处 或 点击此处 上传文件</p>
          )}
        </Paper>
        <ul>测试{uploadData}</ul>
      </div>
    </React.Fragment>
  );
}
