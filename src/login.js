import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { IoMdEye } from "react-icons/io";
  import { IoEyeOff } from "react-icons/io5"


function Exercise() {
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[error, setError]=useState({email :'', password :''});
    const[showpassword , setshowpassword]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newerror ={email :'', password :''};
        let valid=true;

        if(email===''){
            newerror.email='email is required';
            valid=false;
            toast.error('email is required');
        }
        if(password===''){
            newerror.password='password is required';
            valid=false;
            toast.error('password is required');
        }
        else if(password.length<6){
            newerror.password='password at least 6 characters long';
            valid=false;
            toast.error('password at least 6 characters long');
        }
        setError(newerror)

        if(valid){
        if (email === "subar@gamil.com" && password === "subar123"){
            toast.success('form submitted successfully');
            setTimeout(() => {
                window.location.href='/'   
            }, 3000);
          
        }else{
            toast.error('invalid email or passsword');
        }
        }

        const visibliity=()=>
            setshowpassword(!showpassword)
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>email :</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
            <span>{error.email}</span>
        </div>
        <div>
            <label>password :</label>
            <input type={showpassword ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
            <span onclick={visibliity}>
                {showpassword ? <IoMdEye/> : <IoEyeOff/>}
            </span>
            <span>{error.password}</span>
        </div>
        <button type='submit'>submit</button>
        <ToastContainer/>
    </form>
    
  )
}

export default Exercise
