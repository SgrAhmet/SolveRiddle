import React, { useState } from "react";
// import "./riddle.css";

const Riddle2 = () => {
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
        
        
  };

    
  
        
   

  

  const buttonsArray = [];
  const renderButtons = (numOfButtons) => {
    for (let i = 1; i <= numOfButtons; i++) {
      buttonsArray.push(
        <button key={i} id={i}>
          {i}
        
        </button>
      );
    }
    return buttonsArray;
  };


  
  const myData = {
    num1 : [],
    num2 : [1]
  }

  myData.num3 = [3,9]

  for (let i = 1; i < 24; i++) {
    
  }


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

export default Riddle2;
