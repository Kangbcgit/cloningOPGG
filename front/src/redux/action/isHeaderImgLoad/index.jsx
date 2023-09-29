import { headerStatus } from "../../slices/headerStatus";

export const isHeaderImgLoad = (boolean) => {
  return async (dispatch, getState) => {
    dispatch(headerStatus.actions.isHeaderImgLoad({boolean: boolean}));
  }
}