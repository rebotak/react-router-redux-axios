export const SUBMIT = 'askus/SUBMIT';
export const SUBMIT_SUCCESS = 'askus/SUBMIT_SUCCESS';
export const SUBMIT_FAIL = 'askus/SUBMIT_FAIL';

const initialState = {
  submited: false,
  data: null,
  error: null,
  submiting: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        ...state,
        submiting: true
      };
    case SUBMIT_SUCCESS:
      return {
        ...state,
        submiting: false,
        submited: true,
        data: action.payload.data.data,
        error: null
      };
    case SUBMIT_FAIL:
      return {
        ...state,
        submiting: false,
        submited: false,
        data: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export function submit(formData) {
  return {
    types: [SUBMIT, SUBMIT_SUCCESS, SUBMIT_FAIL],
    payload: {
      request: {
        url: '/askUs.json',
        method: 'post',
        data: formData
      }
    }
  };
}