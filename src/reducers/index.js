import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';
import {validate} from '../components/posts_new';
const rootReducer = combineReducers({
    posts: PostReducer,
    form: formReducer
});

export default rootReducer;
