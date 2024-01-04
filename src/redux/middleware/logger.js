const logger = store => next => action => {
  const previousState = store.getState();
  console.log("previousState => ", previousState);
  console.log("ditpatch => ", action);
  next(action);
  console.log("currentState => ", store.getState());
};

export default logger;
