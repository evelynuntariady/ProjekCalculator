import './App.css';
import React, { useEffect, useState } from 'react';
import './App';
import { randomInt } from 'crypto';


function SupportPage(){
const [firstname, setFirstname] = useState<string>(' ');
const [lastname, setLastname] = useState<string>(' ');
const [email, setEmail] = useState<string>(' ');
const [topic, setTopic] = useState<string>(' ');
const [valid, setValid] = useState<boolean> (false);
const [tampilan, setTampilan] = useState<boolean> (true);
const [number, setNumber] = useState<number> (0);

const randomNum=()=>{
    var min = 1;
    var max =10000;
    var random = min + Math.floor(Math.random() * (max - min))
    setNumber(random)
}


useEffect(()=>{
    if (firstname.trim() !== '' && lastname.trim() !== '' && email.trim() !== '' && topic.trim() !== '') {
        setValid(true)
    }
})

const inputFirstName=(e :React.ChangeEvent<HTMLInputElement>)=>{
    setFirstname(e.target.value)
    if (e.target.value === '') {
        setValid(false)
    }
    // else{
    //     setValid(true)
    // }
    
}

const inputLastName=(e :React.ChangeEvent<HTMLInputElement>)=>{
    setLastname(e.target.value)
    if (e.target.value === '') {
        setValid(false)
    }
    // else{
    //     setValid(true)
    // }
}

const inputEmail=(e :React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
    if (e.target.value === '') {
        setValid(false)
    }
    // else{
    //     setValid(true)
    // }
}

const inputTopic =(event : React.ChangeEvent<HTMLInputElement>)=>{
    setTopic(event.target.value)
    if (event.target.value === '') {
        setValid(false)
    }
    // else{
    //     setValid(true)
    // }
}

// const validasi=()=>{
//     setValid(true)
// }

const pindahPage=()=>{
    if (valid === true) {
        setTampilan(false)
        randomNum()
    }
}
    

    // if (firstname.trim() !== '') {
    //     alert("First Name need to be filled")
        
        
    // }
    // if (lastname.trim() !== '') {
    //     alert("Last Name need to be filled")
    //     validasi()
    // }
    // if (email.trim() !== '') {
    //     alert("Email need to be filled")
    //     validasi()
    // }


    return(
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[20cm] h-[17cm] bg-black'>
                <div className='w-full h-1/6'>
                    <h1 className='text-white h-10 text-3xl'>Support Ticket Form</h1>
                    <hr />
                </div>
                {tampilan?(

                <div className='grid grid-rows-2'>
                    <div className='grid grid-cols-2 w-full h-4/6 '>
                        <div className='grid grid-rows-3  pl-4 pr-4 pb-4'>
                            <div className='text-white grid grid-rows-3 h-4/6'>
                                <div className='flex flex-row'>
                                    <p className='text-white'>Name</p>
                                    <p className='text-red-700'>*</p>
                                </div>
                                <div className='grid grid-cols-2 w-full'>
                                    <input type='text' className='h-8 w-3/4 bg-black border-solid focus:border-amber-600/100 border-2 rounded-md' onInput={inputFirstName}></input>
                                    <input type='text' className='h-8 w-3/4 bg-black border-solid focus:border-amber-600/100 border-2 rounded-md' onInput={inputLastName}></input>
                                </div>
                                <div className='grid grid-cols-2 w-full'>
                                    <p className='text-xs'>FirstName</p>
                                    <p className='text-xs'>LastName</p>
                                </div>
                                
                            </div>
                            <div className='text-white h-1/6'>
                                <div className='flex flex-row'>
                                    <p className='text-white'>Email</p>
                                    <p className='text-red-700'>*</p>
                                </div>
                                <br />
                                <input type="email" className='h-8 w-5/6 bg-black border-solid focus-visible:border-amber-600/100 border-2 rounded-md' onInput={inputEmail} />
                            </div>
                            <div className=''>
                                <div className='flex flex-row'>
                                    <p className='text-white'>Topic</p>
                                    <p className='text-red-700'>*</p>
                                </div>                           
                                <div className='grid grid-rows-2 w-full bg-gray-900 border-dotted border-2 border-gray-100 p-3'>
                                    <div>
                                        <p className='text-white'>What can we help you today?</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row'>
                                            <input type="radio" value="general" checked={topic === "general"} onChange={inputTopic}/>
                                            <p className='text-white pl-2'>General</p>
                                        </div>
                                        <div className='flex flex-row'>
                                            <input type="radio" value="bug" checked ={topic === "bug"} onChange={inputTopic} />
                                            <p className='text-white pl-2'>Bug</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className='   flex flex-col pl-3 pr-5'>
                            <div className='flex flex-row'>
                                    <p className='text-white'>Description</p>
                                    <p className='text-gray-500 text-xs'>optional</p>
                            </div>
                            <br />
                            <textarea className='h-5/6 bg-slate-800'></textarea>
                        </div> 
                    </div>
                    <div className='flex flex-row justify-end h-1/6 mr-10'>
                        <div className='flex justify-center  '>
                            <button disabled={valid === false} className='bg-amber-500 w-[4cm] h-[1.5cm] rounded-3xl text-white text-2xl disabled:bg-gray-600' onClick={pindahPage}>SEND</button>
                        </div>
                    </div>
                </div>
                ) :(
                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-col justify-center'>
                            <p className='text-amber-600 text-3xl pl-[2cm] pr-[2cm] pt-[2cm]'>Thank you for sending us your report, we will</p><br />
                            <p className='text-amber-600 text-3xl pl-[2cm] pr-[2cm] text-center'> track the problem now</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='flex flex-row justify-center'>
                            <p className='text-gray-600 text-xl pl-[3cm] pr-[3cm] text-center'>Ticket number : <p className='text-white'>{number}</p></p>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}
export default SupportPage;