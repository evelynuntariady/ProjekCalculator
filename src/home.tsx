import React from 'react';
import './App.css';
import { useState } from 'react';
import {  BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import  supportPage  from './supportPage';




function Home() {
  const [expression, setExpression] = useState<string>(' ');
  const [angka, setAngka] = useState<number>(0);
  const [operator, setOperator] = useState<string>(' ');
  const [history, setHistory] = useState<string[]>([]);
 

  const handleButtonClick=(value:string)=>{
    if (expression!== '+' && expression !== '-' && expression!== '/' && expression!== 'x') {
      setExpression(expression.toString() + value.toString()); 
    }
    else{
      setExpression('')
      setExpression(value.toString()); 
    }
    if (value === 'del') {
      setExpression((expression.toString()).slice(0,(expression.toString.length)-1))
    }
    if(value ==='+'){
      setAngka(Number(expression));
      setExpression('+');
      setOperator('+');
    }
    if (value === '-') {
      setAngka(Number(expression));
      setExpression('-');
      setOperator('-');
    }
    if (value === '/') {
      setAngka(Number(expression));
      setExpression('/');
      setOperator('/');
    }
    if (value === 'x') {
      setAngka(Number(expression));
      setExpression('x');
      setOperator('x');
    }
    if (value ==='=') {
      setExpression(' ');
      if (operator === '+') {
        setAngka(angka + Number(expression));
        setExpression((angka + Number(expression)).toString());
      }
      if (operator === '-') {
        setAngka(angka - Number(expression));
        setExpression((angka - Number(expression)).toString());
      }
      if (operator === '/') {
        setAngka(angka / Number(expression));
        setExpression((angka / Number(expression)).toString());
      }
      if (operator === 'x') {
        setAngka(angka * Number(expression));
        setExpression((angka * Number(expression)).toString());
      }
    }
    
   
  }


  const handleClear=()=>{
    setExpression('');
    setAngka(0);
    setHistory([...history, expression])
  }



  return (
    // 1layar
    
    
    <div className='w-screen h-screen flex flex-col justify-center items-center'> 
    {/* calcu */}
        <div className=' h-[600px] w-[450px]'>
          {/* gray box */}
            <div className='w-full h-1/3 bg-gray-500 '>
              {/* history */}
              <div className='h-4/6 overflow-y-scroll'>
              {history.map((entry, index) => (
                 <p key={index} className='pr-[70px] text-5xl text-white' style={{ whiteSpace: 'pre-line' }}>
                   {entry}
                  </p>
              ))}
              </div>
              {/* input */}
              <div className='h-2/6 flex flex-row justify-end '>
                <p className='pr-[70px] text-5xl text-white'>{expression}</p>
              </div>
            </div>
          {/* black-box */}
            <div className='w-full h-2/3 bg-black '>
              {/* atas */}
              <div className='flex flex-row w-full h-5/6 p-3' >
                  {/* angka */}
                  <div className='grid grid-rows-4 w-4/5 h-full'>
                    <div className='grid grid-cols-3'>            
                    <div className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={handleClear}>C</div>
                    <div className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center'onClick={()=>handleButtonClick('del')}>Del</div>
                    <Link to = "/support">
                      <div  className=' bg-yellow-900 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' >?</div>
                    </Link>
                    </div>
                    <div className='grid grid-cols-3'>            
                    <div className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('1')}>1</div>
                    <div className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={() => handleButtonClick('2')}>2</div>
                    <div  className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={() =>handleButtonClick('3')}>3</div>
                    </div>
                    <div className='grid grid-cols-3'>            
                    <div className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('4')}>4</div>
                    <div className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('5')}>5</div>
                    <div  className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('6')}>6</div>
                    </div>
                    <div className='grid grid-cols-3'>            
                    <div className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('7')}>7</div>
                    <div className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('8')}>8</div>
                    <div  className=' bg-gray-400 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('9')}>9</div>
                    </div>
                  </div>
                  <div className='grid grid-rows-4 w-1/5 h-full'>
                      <div className=' bg-yellow-500 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('/')}>/</div>
                      <div className=' bg-yellow-500 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('x')}>x</div>
                      <div className=' bg-yellow-500 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('-')}>-</div>
                      <div className=' bg-yellow-500 w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center' onClick={()=>handleButtonClick('+')}>+</div>
                  </div>
              </div>
              {/* bawah */}
              <div className='flex flex-row justify-around w-full h-1/6 '>
                  <div className=' bg-gray-500 w-[150px] h-[50px] rounded-3xl flex flex-col justify-center items-center' onClick={()=>handleButtonClick('0')}>0</div>
                  <div className='bg-yellow-500 w-[150px] h-[50px] rounded-3xl flex flex-col justify-center items-center' onClick={()=>handleButtonClick('=')}>=</div>
              </div>
            </div>
            
        </div> 
    </div>



  );
}

export default Home;
