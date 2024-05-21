import React, { useState } from "react";
// import "./riddle.css";

const Riddle2 = () => {
  const [myPoint, setMyPoint] = useState(0);
  const [enemyPoint, setEnemyPoint] = useState(0);


  //!============================== Create AllArray =====================================
let allArray = [[]]
for(let num = 1 ; num < 24 ; num++){
    let y = []
    for(let j = 1 ; j <= num ; j++){
        if(num % j == 0){
            y.push(j)
        }
    }
    allArray.push(y)
}
// ===============================================================================



 // ===============================================================================
 
 
 const removeFunc =(remove)=>{
     for(let a = 1 ;  a< 24 ; a++){
     for(let i = 0 ;i<allArray[a].length ; i++){
    if(allArray[a][i] == remove){
        allArray[a].splice(i,1)
    }
}
 }
 
 for(let k = 1 ; k < 24 ;k++){
   if(allArray[k].length > 1){
       console.log(k+" +++++++++++")
   }else{
       console.log(k+" ------")
   }
 }
 console.log("===============================================================================")
 console.log(allArray)
 }
 
 
 // ===============================================================================
 

 
 
 const pickCard=(e)=>{
     
     for(let i = 1 ; i < e ; i++){
         if(e % i == 0){
             removeFunc(i)
         }
     }
 }
 
 pickCard(16)
 
 
 // ===============================================================================




 

    
  
        
   

  
 //! =============================== Render Buttons =============================

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
 // ===============================================================================


  
 






        







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
