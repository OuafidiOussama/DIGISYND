import React from 'react'
import TextField from '@mui/material/TextField';
import { loginSchema } from '../../validators/AuthValidation';
import {useFormik} from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import {userLoginAction} from '../../redux/actions/userAction'
import { useNavigate } from 'react-router-dom';



export default function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
        email: '',
        password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions)=>{
        await dispatch(userLoginAction(values))
        actions.resetForm()
        navigate("/syndic")
    }
  })
  return (
    <div className='w-screen h-screen overflow-hidden flex justify-center items-center'>
        <div className='w-full h-full absolute -z-10'>
            <img src={process.env.PUBLIC_URL+'/images/living-room-2155376_1920.jpg'} alt="bg-image" className='w-full h-full object-cover blur-sm' />
            <div className='w-full h-full bg-black absolute top-0 left-0 opacity-50'></div>
        </div>
        <div className='w-9/12 h-4/5 bg-white rounded-3xl flex items-center overflow-hidden'>
            <div className='h-full w-1/2 relative flex justify-center items-center'>
                <img src={process.env.PUBLIC_URL+'/images/real-estate-6688945_1280.jpg'} alt="side-img" className='w-full h-full object-cover absolute top-0 left-0 shadow-[15px_0_15px_2px_rgba(0,0,0,0.3)]' />
                <p className='z-10 font-black text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#FDCA40] to-[#253237]'>DIGISYND</p>
            </div>
            <form onSubmit={formik.handleSubmit} className='h-full w-1/2 '>
                <div className='h-full w-full flex items-center justify-center'>
                    <div className='flex flex-col justify-center items-center gap-y-10 w-80'>
                        <p className='text-5xl font-black text-[#8DBDD1]'>LOGIN</p>
                        <TextField
                        id="email"
                        name='email'
                        label="Email"
                        variant="standard"
                        className='w-full'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                        id="password"
                        name='password'
                        label="Password"
                        type='password'
                        variant="standard"
                        className='w-full'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        />
                        <button className='bg-[#8DBDD1] text-white hover:bg-[#6E99AA] px-5 py-2 font-bold rounded-md transition-all duration-300 drop-shadow-lg self-end' type='submit'>SIGN IN</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
