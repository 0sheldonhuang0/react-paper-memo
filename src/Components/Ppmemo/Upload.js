import React, { useCallback, useEffect } from "react";
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
    margin: "0 0 30px 0",
  },
  text: {
    textAlign: "center",
    position: "relative",
    top: "40%",
  },
}));

export default function Upload(props) {
  const classes = useStyles();

  const [Successed, setSuccessed] = React.useState("");
  //uploadData是原始数据，为0；setUploadData用于更新uploadData

  const verifyFile = (uploadData) => {
    //设置内容位置
    console.log(uploadData);
    let displayUploadData = uploadData.split("\n"); //将文件内容根据换行符隔开，["A-B","A-B","A-B","A-B"...]

    for (var i = displayUploadData.length - 1; i >= 0; i--) {
      if (displayUploadData[i] === "") {
        displayUploadData.splice(i, 1);
      }
    }

    console.log(displayUploadData);

    if (displayUploadData == undefined) {
      setSuccessed("❌文件不符合要求");
    }

    for (let i = 0; i < displayUploadData.length; i++) {
      let displayUploadDataTemp = displayUploadData[i].split("-"); //暂时储存一张卡片正反面，["A","B"]
      console.log(displayUploadDataTemp);
      if (
        displayUploadDataTemp[0] == undefined ||
        displayUploadDataTemp[1] == undefined
      ) {
        setSuccessed("❌文件不符合要求");
        storeSuccessedData(false);
        break;
      } else {
        setSuccessed("✅ " + " 文件上传成功"); //使用下方的函数newUploadData
        storeUploadData(uploadData);
        storeSuccessedData(true);
      }
    }
  };

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
        let temp = binaryStr.replace(/\t/g, "");
        console.log(temp);
        verifyFile(temp);
      };
      reader.readAsText(file);
    });
  }, []);

  // 用 useDispatch 產生 dispatch 方法，dispatch用来给reducer送数据
  const dispatch = useDispatch();
  const storeUploadData = (uploadData) => {
    // 用法一樣
    dispatch({
      type: "ADD_CONTENT",
      content: uploadData,
    });
  };
  const storeSuccessedData = (uploadData) => {
    dispatch({
      type: "ADD_UPLOADSUCCESS",
      successedData: uploadData,
    });
  };

  const firstUpload = (temp) => {
    console.log(temp);
    if (temp === "") {
      storeSuccessedData(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: "500000",
  });

  useEffect(() => firstUpload(Successed));

  return (
    <React.Fragment>
      <div {...getRootProps()}>
        <Paper className={classes.root}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className={classes.text}>😆 拖到这里来 ...</p>
          ) : (
            <p className={classes.text}>拖拽到此处 或 点击此处 上传文件</p>
          )}
          <p>{Successed}</p>
        </Paper>
      </div>
    </React.Fragment>
  );
}
