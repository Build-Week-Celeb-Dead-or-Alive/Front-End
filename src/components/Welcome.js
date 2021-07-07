import React from 'react';
import { Animated } from 'react-animated-css';
import { Button } from 'semantic-ui-react';

const Welcome = props => {
  console.log(props)
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to the Celeb Dead or Alive Quiz</h1>
        <h2>Test your celebrity knowledge</h2>
      </div>
      <Button
        id="welcome-btn"
        className="welcome-button"
        onClick={() => props.history.push('/game')}
      >
        Play Now
      </Button>
    </div>
  )
};

export default Welcome
