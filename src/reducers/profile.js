export const SUBMIT = 'profile/SUBMIT';
export const SUBMIT_SUCCESS = 'profile/SUBMIT_SUCCESS';
export const SUBMIT_FAIL = 'profile/SUBMIT_FAIL';

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
        url: '/formprofile.json',
        method: 'post',
        data: formData
      }
    }
  };
}

