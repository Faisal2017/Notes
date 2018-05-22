import React from 'react';

class Comment extends React.Component {

  render() {
    return (
      <div>
        <h4>{ this.props.author }</h4>
        { this.props.children }
      </div>
    );
  }
}

export default Comment;