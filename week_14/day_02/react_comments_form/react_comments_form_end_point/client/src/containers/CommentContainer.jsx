import React from 'react';

import CommentList from '../components/CommentList.jsx'
import CommentForm from './CommentForm.jsx'

const sampleData = [
  { id: 1, author: "Darren Breen", text: "Blah blah"},
  { id: 2, author: "Zsolt Podoba-Szalai", text: "Nanoo Nanoo"},
  { id: 3, author: "Jarrod Bennie", text: "Don't forget your exports"}
];

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.state = {
      data: sampleData
    }
  }

  handleCommentSubmit(comment) {
    comment.id = Date.now();
    const newComments = this.state.data.concat([comment]);
    this.setState({data: newComments});
  }

  render() {
    return(
      <div>
        Add a Comment
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        Comments:
        <CommentList data={this.state.data}/>
      </div>
      );
  }
}

export default CommentContainer;