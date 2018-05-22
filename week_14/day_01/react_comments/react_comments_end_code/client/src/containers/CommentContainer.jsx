import React from 'react';

import CommentList from '../components/CommentList.jsx'

const sampleData = [
  { id: 1, author: "Darren Breen", text: "Blah blah"},
  { id: 2, author: "Zsolt Podoba-Szalai", text: "Nanoo Nanoo"},
  { id: 3, author: "Jarrod Bennie", text: "Don't forget your exports"}
];

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData
    }
  }

  render() {
    return(
      <div>
        Comments:
        <CommentList data={this.state.data}/>
      </div>
      );
  }
}

export default CommentContainer;