import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

// Path to show component app (first route mapping)
// export so index.js knows about it

// removed self closing tag within app added greet path
// add index route to render when at the route directory
export default (
    <Route path = "/" component={App}>
        <IndexRoute component   ={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} /> 
    </Route>
);