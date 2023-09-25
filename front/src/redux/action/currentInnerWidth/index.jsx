import currentInnerWidth from "../../slices/currentInnerWidth";

const calcCurrentInnerWidth = () => {
  return async (dispatch, getState) => {
    const innerWidth = window.innerWidth;
    dispatch(currentInnerWidth.actions.setInnerWidth({currentInnerWidth: innerWidth}));
  }
}

const componentDidMount = {
  calcCurrentInnerWidth,
}

export default componentDidMount