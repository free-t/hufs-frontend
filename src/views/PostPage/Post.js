import React from "react";
import { Route } from "react-router-dom";
import PostList from "../../components/Post/PostList";
import PostView from "../../components/Post/PostView";
import Test from '../../components/Post/Test'
function Post({ match }) {
  return (
    <div> 
      <Route exact path={match.path} component={PostList} />
      <Route path={`${match.path}/:id`} component={Test} />
    </div>
  );
}

export default Post;
