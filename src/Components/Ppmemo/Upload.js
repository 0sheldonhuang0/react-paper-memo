import React, { useCallback } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useDropzone } from "react-dropzone";
import Title from "../Title";

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

export default function Deposits() {
  const classes = useStyles();
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };

      reader.readAsText(file);
      console.log(file.name);
    });
  }, []);

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
      </div>
    </React.Fragment>
  );
}
