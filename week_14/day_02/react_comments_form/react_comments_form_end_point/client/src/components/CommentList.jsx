import React from 'react';

import Comment from './Comment.jsx';

class CommentList extends React.Component {
  constructor (props) {
      super(props);
  }
    
  render() {
    var commentComponents = this.props.data.map(function(comment) {
      return (
        <Comment key={ comment.id } author={ comment.author } >
          { comment.text }
        </Comment>
      );
    });

    return (
      <div className="commentList">
        { commentComponents }
      </div>
    );
  }
}

export default CommentList;