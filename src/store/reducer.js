const initialState = {
  title: "null123",
  content: "null123",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTENT": {
      const newContent = action.content;
      return {
        content: newContent,
      };
    }
  }
};

export default reducer;
