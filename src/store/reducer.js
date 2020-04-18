const initialState = {
  content: "欢迎使用ppmemo-https://hxd.red",
  format: ["Pdf16", "fontFz", "fontMiddle", "fontMiddle", true],
};

const reducer = (state = initialState, action) => {
  console.log(state.content);
  console.log(state.format);
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "ADD_FORMAT": {
      const newFormat = action.format;
      return {
        content: state.content,
        format: newFormat,
      };
    }
    case "ADD_CONTENT": {
      const newContent = action.content;
      return {
        content: newContent,
        format: state.format,
      };
    }
    default:
      return state; //在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
  }
};

export default reducer;
