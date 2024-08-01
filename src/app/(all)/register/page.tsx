'use client'

import Link from 'next/link'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const RegisterSchema = Yup.object({
  username: Yup.string().required("name must be filled"),
  email: Yup.string().required("Please enter a valid email.").email("Please enter a valid email."),
  password: Yup.string()
    .required('input your password')
    .matches(
      /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"/,
      'Invalid password'
    )

})



export default function Register() {
  return (
    <section className='min-h-screen flex justify-center items-center bg-black/50'>
      <div className='bg-black rounded-xl mx-auto lg:w-[400px] w-[300px] h-[500px] overflow-auto flex flex-col'>

        <Link href={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width={30} viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
        </Link>

        <div className='text-white flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width={55} viewBox="0 0 24 24" fill="currentColor"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path></svg>
        </div>

        <div className='items-center'>
          <h1 className='text-white font-semibold text-2xl flex lg:ml-5 ml-5 pt-7 px-12 '>Create your account</h1>

          <div className='pt-7 items-center'>

            <Formik
              initialValues={{ inputValue: '' }}
              validationSchema={RegisterSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {() => (
                <Form className='mx-auto'>
                  <div className='flex gap-5 flex-col justify-center  '>
                    <Field
                      type='text'
                      name='username'
                      placeholder='username'
                      className=' bg-black text-center border-2 rounded-lg py-2 px-5 text-white lg:w-[300px]  '
                    />
                    <ErrorMessage
                      name='username'
                      component='div'
                      className='text-red-500'
                    />
                    <Field
                      type='email'
                      name='email'
                      placeholder='email'
                      className=' bg-black text-center border-2  rounded-lg py-2 px-5 text-white lg:w-[300px] '
                    />
                    <ErrorMessage
                      name='email'
                      component='div'
                      className='text-red-500'
                    />
                    <Field
                      type='password'
                      name='password'
                      placeholder='password'
                      className=' bg-black text-center border-2  rounded-lg py-2 px-5 text-white lg:w-[300px] '
                    />
                    <ErrorMessage
                      name='password'
                      component='div'
                      className='text-red-500'
                    />
                    <Field
                      type='password'
                      name='password'
                      placeholder='confirm password'
                      className=' bg-black text-center border-2  rounded-lg py-2 px-5 text-white lg:w-[300px] '
                    />
                    <ErrorMessage
                      name='password'
                      component='div'
                      className='text-red-500'
                    />
                  </div>

                  {/* <div className='flex justify-center pt-5 '>
                    <button className='text-black bg-white hover:bg-slate-200 border border-solid border-white font-2xl  font-bold px-40 rounded-full flex p-2 lg:w-[320px] w-[200px]'>
                      <span >Next</span>
                    </button>
                  </div> */}
                </Form>

              )}
            </Formik>
          </div>

        </div>

      </div>

    </section>
  )
}
