import React, { useRef, useState } from "react";
import "./Tictactoe.css";
import circle from "../../assets/circle.png";
import cross from "../../assets/cross.png"; 
import winingcup from "../../assets/wincup.png"; 

let data = ["", "", "", "", "", "", "", "", ""];

const Tictactoe = () => {
  let [count, setcount] = useState(0);
  let [lock, setlock] = useState(false); 
  let titleref=useRef(null); 
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);
  let box9=useRef(null); 
  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9]

  const toggle = (e, num) => {
    if (lock) {
      return 0; 
    } 
    if(count%2==0)
    {
        e.target.innerHTML=`<img src="${cross}">`;
        data[num]="x"; 
        setcount(++count)
    } 
    else{
        e.target.innerHTML=`<img src="${circle}">` 
        data[num]="o"; 
        setcount(++count);
    } 
  checkwin()

  }; 

  const checkwin=()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
    {
      win(data[2]);
    } 
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
    {
      win(data[5]);
    } 
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
    {
      win(data[8]);
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
    {
      win(data[6])
    } 
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
    {
      win(data[7]);
    } 
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
    {
      win(data[8])
    } 
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
    {
      win(data[8]);
    } 
    else if(data[8]===data[4] && data[4]===data[0] && data[0]!=="")
    {
      win(data[0]);
    } 
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
    {
      win(data[6]);
    }
    else if(data[6]===data[4] && data[4]===data[2] && data[2]!=="")
    {
      win(data[2]);
    }
  } 

  const win=(winner)=>{
    setlock(true); 
    if(winner=="x")
    {
      titleref.current.innerHTML=`Congratulations! <img src=${winingcup}> : <img src=${cross}> is Win The Game`;
    } 
    else{
      titleref.current.innerHTML=`Congratulations! <img src=${winingcup}> : <img src=${circle}> is Win The Game`;
    }
  } 

  const reset=()=>{
    setlock(false); 
    data = ["", "", "", "", "", "", "", "", ""]; 
    titleref.current.innerHTML=` Tic Tac Toe Game By <span> Shakil </span>`; 
    box_array.map((e)=>{
      e.current.innerHTML=`""`;
    })
  }
  return (
    <div className="container">
      <h1 className="title" ref={titleref}>
        {" "}
        Tic Tac Toe Game By <span> Shakil</span>{" "}
      </h1>

      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}> Reset</button> 

      <p>©copyright <a href="https://shahadathossain.netlify.app/">shahadat hossain shakil</a></p>
    </div>
  );
};

export default Tictactoe;
