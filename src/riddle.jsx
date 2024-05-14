import React, { useState } from "react";
import "./riddle.css";

const Riddle = () => {
  const [myPoint, setMyPoint] = useState(0);
  const [enemyPoint, setEnemyPoint] = useState(0);

  const findFragments = (num) => {
    const fragments = [];
    const fragmentsControled = [];
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        fragments.push(i);
      }
    }
    // console.log(fragments);

    fragments.forEach((fragment) => {
      if (document.getElementById(`${fragment}`).classList.value != "red") {
        fragmentsControled.push(
          document.getElementById(`${fragment}`).innerHTML
        );
        // console.log(fragmentsControled)
      }
    });

    let sum = 0;
    fragmentsControled.forEach((fragment) => {
      sum = sum + Number(fragment);
      const button = document.getElementById(`${fragment}`);
      button.classList.add("red");
    });

    setEnemyPoint(enemyPoint + sum);
  };

  const pickCard = (e) => {
    // console.log(e.target);
    findFragments(e.target.innerHTML);
    e.target.classList.add("green");
    setMyPoint(myPoint + Number(e.target.innerHTML));

    // console.log(document.getElementById(`${e.target.innerHTML}`));

    controlAll()
  };

  const controlAll = () =>{

    for (let i = 2; i <= 23; i++) {
      // console.log(document.getElementById(`${i}`).classList.value);
      const fragments = [];
      for (let i = 1; i < num; i++) {
        if (num % i === 0) {
          fragments.push(i);
        }
      }
    }


  }

  const buttonsArray = [];
  const renderButtons = (numOfButtons) => {
    for (let i = 1; i <= numOfButtons; i++) {
      buttonsArray.push(
        <button key={i} id={i} onClick={pickCard}>
          {i}
        </button>
      );
    }
    return buttonsArray;
  };

  // let sum = 0;
  // const myFunc = (num) => {
  //   for (let i = 1; i <= num; i++) {
  //         sum = sum + i;
  //   console.log(`${sum}`);

  //   }
  // };

  // myFunc(23);

  //   let num = 3
  //   let string = "3"

  //   num = `${num}`

  // console.log("type of num is :" + typeof(num))
  // console.log("type of string is :" + typeof(string))

  return (
    <div>
      <div className="scoreBoard">
        <p className="myPoint">My Points : {myPoint}</p>
        <p className="notMyPoint">Its Points : {enemyPoint}</p>
      </div>
      <div className="buttonsDiv">{renderButtons(23)}</div>
    </div>
  );
};

export default Riddle;
