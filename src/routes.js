import React from 'react';
import {Route, IndexRoute} from 'react-router';
import PostIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';
import App from './components/app';
export default(
    <Route path="/" component={App}>
        <IndexRoute component={PostIndex}/>
        <Route path="/posts/new" component={PostsNew}/>
        <Route path="/posts/:id" component={PostShow}/>
    </Route>

);