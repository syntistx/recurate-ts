import { DELETE_AUTH, SET_AUTH } from '../../CONSTANTS';

export interface AuthState {
  data: Object
}

const initialState = {
  data: {},
};

type Action = {
  type: string,
  payload: {
    data: Object
  }
};

export const authReducers = (state:AuthState = initialState, { type, payload }:Action) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        data: payload.data,
      };

    case DELETE_AUTH:
      return {
        ...state,
        data: {},
      };

    default:
      return state;
  }
};
