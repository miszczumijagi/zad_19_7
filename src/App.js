import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer.js';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!
      <CommentsList />
      <DevTools />
    </div>
  );
};

export default App;