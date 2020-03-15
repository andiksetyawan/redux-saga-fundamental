export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const incrementAsync = () => {
  return {
    type: "INCREMENT_ASYNC",
    payload: { data: "inc.payload" }
  };
};

export const decrementAsync = () => {
  return {
    type: "DECREMENT_ASYNC",
    payload: { data: "inc.payload" }
  };
};
