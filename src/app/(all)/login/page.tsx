'use client'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const validationSchema = Yup.object({
  inputValue: Yup.string()
    .required('Requared')
    .matches(
      /^(?:\+?\d{1,4}[\s-])?(?:\(?\d{1,4}\)?[\s-]?)?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/,
      'Invalid phone number'
    )
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Invalid email address'
    )
    .matches(
      /^[a-zA-Z0-9._-]{3,}$/,
      'Invalid username'

    )
})

export default function Login() {

  return (
    <section className='min-h-screen w-screen flex justify-center items-center bg-black/60'>
      <div className=' bg-black rounded-xl mx-auto lg:w-[500px] w-[400px] h-[650px]  flex flex-col'>

        <div className=''>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width={30} viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
        </div>


        <div className='text-white flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width={55} viewBox="0 0 24 24" fill="currentColor"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path></svg>
        </div>

        <div className='justify-center'>
          <h1 className='text-white font-semibold text-2xl flex lg:ml-16 ml-5 pt-7 px-6 items-start'>Sign in to X</h1>
          <div className=' flex justify-center pt-8'>
            <button className="text-black bg-white border border-solid border-white font-2xl text-xs px-24 rounded-full flex p-4">
              <svg width="20px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>
              <span className='px-3 pt-1'>Sign in with Google</span>
            </button>
          </div>

          <div className=' flex justify-center pt-5'>
            <button className="text-black bg-white border border-solid border-white font-2xl text-xs font-bold px-24 rounded-full flex p-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 24 24" fill="currentColor"><path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path></svg>
              <span className='px-3 pt-1'>Sign in with Apple</span>
            </button>
          </div>
        </div>

        <div className='flex justify-center items-center pt-4 gap-2'>
          <span className='w-[140px] h-[1px]  bg-gray-500'></span>
          <p className='text-white'>or</p>
          <span className='w-[140px] h-[1px]  bg-gray-500'></span>
        </div>

        <Formik
          initialValues={{ inputValue: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className='mx-auto'>
              <div className='text-center'>
                <Field
                  type='text'
                  name='inputValue'
                  placeholder='phone, email, or username'
                  className=' bg-black text-center border-2 rounded-lg hover:border-blue-600 py-2 px-5 text-white w-[340px]'
                />
                <ErrorMessage
                  name='inputValue'
                  component='div'
                  className='text-red-500'
                />
              </div>
            </Form>
          )}
        </Formik>
        {/* <input type="text" placeholder='phone, email, or username' className='bg-black mx-auto text-center border-2 hover:border-blue-600 py-2 px-5 text-white w-[340px] ' /> */}

        <div className='flex justify-center pt-5'>
          <button className='text-black bg-white hover:bg-slate-200 border border-solid border-white font-2xl  font-bold px-40 rounded-full flex p-2 '>
            <span>Next</span>
          </button>
        </div>

        <div className='flex justify-center pt-5'>
          <button className='text-black bg-black hover:bg-zinc-500 border border-solid border-white font-2xl  font-bold px-28 rounded-full flex p-2 '>
            <span className='text-white'>Forgot password? </span>
          </button>
        </div>

        <div className='text-white lg:ml-20 ml-9 pt-9 '>Don't have an account? <span className='text-blue-700 hover:underline'>Sign up</span></div>
      </div>
    </section >
  )
}
