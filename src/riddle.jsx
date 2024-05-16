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

        if (document.getElementById(`${fragment}`).classList.value != "green") {
          fragmentsControled.push(
            document.getElementById(`${fragment}`).innerHTML
          );
        }
                
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

  
    //  let ControlNumber = 11
    for (let ControlNumber = 2; ControlNumber < 24; ControlNumber++) {
      const fragments = [];
    for (let i = 1; i < ControlNumber; i++) {
      if (ControlNumber % i === 0) {


        if (!document.getElementById(`${i}`).classList.value) {
        
        fragments.push(i);
          
        }

      }
    }
    
    if (fragments.length == 0) {
      console.log(ControlNumber + " fragments yok : " + fragments)

      if (document.getElementById(`${ControlNumber}`).classList.value != "red") {

        if (document.getElementById(`${ControlNumber}`).classList.value != "green") {

          const turnRed =()=>{
            document.getElementById(`${ControlNumber}`).classList.add("red")
          }

          setTimeout(turnRed, 3000)
          
          // console.log(document.getElementById(`${ControlNumber}`).classList)
        }
                
      }
    } else {
      console.log(ControlNumber +" fragments var : " + fragments)
      
      
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






  // const myPow =(x,y)=> {
  //   let sum = 1
  
  // if(y % 2 === 0){
  // for (let i = 1; i <= y/2; i++) {
  //     sum *= x*x
  //   }
  // }else{
  //   y = y- 1
  //   for (let i = 1; i <= y/2; i++) {
  //     sum *= x*x
      
  //   }
  //   sum = sum * x
  // }  
  // return sum
  // }
  
  







  
  
  
//  const newMyPow =(x,y)=>{
//   let sum = 1
//   for (let i = 1; i <= y; i++) {
//       sum = sum * x
//   }
//   return sum
//  }

//  console.log(newMyPow(7,0))


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    
//     const findFragmnets =(num)=>{
        
//         let fragmnets = []
        
//         for (let i = 2 ; i < num ; i++){
//             if(num % i == 0){
//                     fragmnets.push(i)
                    
//             }
//         }
        
//         if (fragmnets.length == 0) {
//         console.log(num + " ın bölenleri yok")
          
//         }else{
//           console.log(num + " ın bölenleri bunlar "+fragmnets)

//         }



        
//         for(let i = 0 ; i < fragmnets.length ; i++){
//             findFragmnets(fragmnets[i]);
//         }
        
        
       
//     }
    
//     findFragmnets(22);






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
