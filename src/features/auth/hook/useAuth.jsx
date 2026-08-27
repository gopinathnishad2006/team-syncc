import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addEmployee } from '../state/authSlice'
import { loginEmployee } from '../state/authAction'

const useAuth = () => {
    let dispatch=useDispatch()
    let navigate =useNavigate()
    let {register,reset,handleSubmit,formState:{errors} }=useForm()

    let onRegisterSubmit=(data)=>{
        console.log(data);
        

    }
    let onLoginSubmit=(data)=>{
        console.log(data);
        dispatch(loginEmployee(data))
        
    }
  return {
    register,reset,handleSubmit,errors,navigate,onLoginSubmit,onRegisterSubmit
  }
}

export default useAuth
