import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, deleteComment, editComment}) =>
  <li>
    {text} <span>votes: {votes}</span> 
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => deleteComment(id)}>Delete</button>
    <button onClick={() => editComment(id, text)}>Edit</button>
  </li>;

export default Comment;