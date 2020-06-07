const initialState = {
  content: "欢迎使用ppmemo-https://xd.sh.cn",
  format: {
    format: "Pdf16",
    font: "fontFz",
    fontSizeA: "fontMiddle",
    fontSizeB: "fontMiddle",
    cardNum: true,
  },
  successedData: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FORMAT": {
      const newTemp = action.format;
      return {
        ...state,
        format: newTemp,
      };
    }
    case "ADD_CONTENT": {
      const newTemp = action.content;
      return {
        ...state,
        content: newTemp,
      };
    }
    case "ADD_UPLOADSUCCESS": {
      const newTemp = action.successedData;
      return {
        ...state,
        successedData: newTemp,
      };
    }
    default:
      return state; //在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
  }
};

export default reducer;
