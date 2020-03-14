export default function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log("payload",action.payload);
      return state + 1;
    case "DECREMENT":
      console.log("payload dec",action.payload);
      return state - 1;
    default:
      return state;
  }
}
