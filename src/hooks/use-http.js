import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SET") {
    return {
      error: null,
      data: null,
      status: "pending",
    };
  }
  if (action.type === "SUCCESS") {
    return {
      error: null,
      data: action.responseData,
      status: "completed",
    };
  }
  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage,
    };
  }
  return state;
};

const useFetch = (requestFunction, startLoading = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startLoading ? "pending" : null,
    error: null,
    data: null,
  });
  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SET" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useFetch;
