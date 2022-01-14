import React, { createContext, useReducer, useContext } from "react";

var ElementStateContext = createContext();
var ElementDispatchContext = createContext();

function elementReducer(state, action) {
  switch (action.type) {
    case "SET_TWEET_TEXT":
      return { ...state, tweetText: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ElementProvider({ children }) {
  var [state, dispatch] = useReducer(elementReducer, {
    tweetText: "",
  });
  return (
    <ElementStateContext.Provider value={state}>
      <ElementDispatchContext.Provider value={dispatch}>
        {children}
      </ElementDispatchContext.Provider>
    </ElementStateContext.Provider>
  );
}

function useElementState() {
  var context = useContext(ElementStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useElementDispatch() {
  var context = useContext(ElementDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export { ElementProvider, useElementState, useElementDispatch, setTweetText };

// ###########################################################
function setTweetText(dispatch, tweetText) {
  dispatch({
    type: "SET_TWEET_TEXT",
    payload: tweetText,
  });
}
