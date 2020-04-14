const initialState = {
  title: "请上传文件，目前暂时仅支持txt格式的文件",
  content: "文件内容测试样本",
  format: "Pdf16",
  segment: "-",
};

const reducer = (state = initialState, action) => {
  console.log(state.content);
  switch (action.type) {
    case "ADD_CONTENT": {
      const newContent = action.content;
      return {
        content: newContent,
      };
    }
    case "ADD_FORMAT": {
      const newFormat = action.format;
      return {
        format: newFormat,
      };
    }
    case "ADD_SEGMENT": {
      const newSegment = action.segment;
      return {
        segment: newSegment,
      };
    }
    default:
      return state; //在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
  }
};

export default reducer;
