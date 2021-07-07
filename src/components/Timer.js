import React, {useState, useEffect, useContext} from 'react';
import { Animated } from "react-animated-css";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UserDataContext from "../contexts/UserDataContext";

import "../styling/components/celebdisplay.scss";

// import UnregisteredPlayerModal from "./UnregisteredPlayerModal";

const Timer = props => {
    const { userData, setUserData } = useContext(UserDataContext)
    console.log('celebDisplay userData: ', userData.score)
  
    const [celebs, setCelebs] = useState([]);

    const [icon, setIcon] = useState({ icon: true });
    const [timer, setTimer] = useState(0);
  
    const [currentScore, setCurrentScore] = useState(0)

    const [count, setCount] = useState(0)
  
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    if (seconds === 3) {
      reset();
      props.history.push('/game');
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds === 3) {
        toggle()
      }
      return () => clearInterval(interval)
    }, [isActive, seconds]);

    // useEffect(() => {
    //   axios
    //     .get("https://bw-celeb-dead-app.herokuapp.com/celebs")
    //     .then(res => setCelebs(res.data))
    //     .catch(err => err.response);
    // }, []);
  
    // const scorePut = () => {
    //   axiosWithAuth()
    //     .put(`https://bw-celeb-dead-app.herokuapp.com/users/${userData.id}`, {
    //       points: combined,
    //     })
    //     .then(res => console.log("RES", res))
    //     .catch(err => err.response);
    // }
    // console.log("userData", userData);
  
    // let userScore = userData.score;
    // let combined = userScore + currentScore;
  
    // console.log("combined", combined);
  
    //if 10 button clicks --> axios.put
    // /users/${user.id}
    // user.score
    //
    //take points into user.score [useState]
  
    const randomCeleb = celebs[Math.floor(Math.random() * celebs.length)]
    // console.log('randomCeleb', randomCeleb)
  
    const nextCeleb = () => {
      let i = randomCeleb;
      i = i + 1; // increase
      i = i % celebs.length; // if we've gone too high, start from `0` again
      return randomCeleb[i]; // give us back the celeb of where we are now
    }
  
    const handleIcon = e => {
      e.preventDefault();
      setIcon({ icon: true });
    }
  
    // if (randomCeleb) console.log(randomCeleb.name);
  
    const isDead = randomCeleb ? randomCeleb.isDead : null;
  
    // if (currentScore === 5) {
    //   props.history.push('/login')
    // }
    // if (currentScore === 5) {
    //   props.history.push("/modal");
    // }
  
    // if (count === 5 || currentScore === 5 || currentScore === -5) {
    //   scorePut();
    //   props.history.push('/registered')
    // }
  
    // console.log('COUNT', count)
  
    const DOB = () => {
      if (randomCeleb) {
        let str = randomCeleb.dob;
        let res = str.split(",");
        return res[0].substr(0, 4);
        // console.log("DOB",res[1].substr(1,4) + res[0]);
      }
    };
  
    return (
 <div>
        <div className="score-container">
          {/* <div className="score percent">Current Score: {currentScore}</div> */}
          {/* <button onClick={move()}>Test</button> */}
        </div>
        {/* <Card> */}
          {/* <div>{myTimer.displayTime}</div> */}
          {userData.message}
          {/* <Image
            className="card-image"
            src={randomCeleb ? randomCeleb.celebImage : null}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{randomCeleb ? randomCeleb.name : null}</Card.Header>
  
            <Card.Description>
              {randomCeleb ? <p>Born in {DOB()}</p> : null}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Button.Group>
              <Button
                size="large"
                color="green"
                id="btn"
                onClick={() => {
                  if (isDead) {
                    props.history.push("/game");
                    setCurrentScore(currentScore + 1);
                    setCount(count + 1);
                  } else {
                    props.history.push('/game')
                    setCount(count + 1)
                  }
                }}
              >
                <i className="thumbs down icon"></i>Dead
              </Button>
              <Button.Or />
              <Button
                size="large"
                color="pink"
                id="btn"
                onClick={() => {
                  if (!isDead) {
                    setCurrentScore(currentScore + 1);
                    props.history.push("/game");
                    setCount(count + 1);
                  } else {
                    props.history.push("/game");
                    setCount(count + 1);
                  }
                }}
              >
                <i className="thumbs up icon"></i>Alive
              </Button>
            </Button.Group>
          </Card.Content>
        </Card> */}
  </div>
    );
  }
  
  export default Timer;