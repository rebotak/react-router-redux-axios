import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import profile from './profile';
import askus from './askus';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  profile,
  askus,
});
