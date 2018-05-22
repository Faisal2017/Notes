import React from 'react';
import ReactDOM from 'react-dom';

import CommentContainer from './containers/CommentContainer.jsx';

window.onload = function(){
  ReactDOM.render(
    <CommentContainer/>,
    document.getElementById('app')
  );
}
