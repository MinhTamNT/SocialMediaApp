import React, { useState } from 'react'
import Input from '~/components/InputFields/Input'
import { useFormik } from 'formik'
import { IoCloseSharp } from 'react-icons/io5'
import { AuthView } from '~/types/enum'
import { GrLinkPrevious } from 'react-icons/gr'
interface Iprop {
  isMobile?: boolean
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}
interface MyFormValues {
  email: string
  username: string
  password: string
  confirmpassword: string
}
export const SiginInOrSignUp: React.FC<Iprop> = (props) => {
  const { isMobile, setLogin } = props
  const [currentView, setCurrentView] = useState(AuthView.LOGIN)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const modalWidthClass = isMobile ? 'w-full' : 'md:w-[500px]'
  const modalHeightClass = isMobile ? 'h-[130vh]' : 'md:h-[570px]'
  const handleToggleView = (view: AuthView) => {
    setCurrentView(view)
  }
  const handlerCLoseLogin = () => {
    setLogin(!true)
  }
  const formilk = useFormik<MyFormValues>({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmpassword: ''
    },
    onSubmit: (value) => {}
  })
  console.log(formilk.values)

  return (
    <div className='fixed flex justify-center  items-start inset-0 z-10 bg-black animate-[modal_1s_ease-in] bg-opacity-50 overflow-x-hidden '>
      <div
        className={` flex flex-col ${modalWidthClass} ${modalHeightClass}  md:absolute md:top-[8%] modal animate-[modal_1s_ease-in-out] bg-white shadow-sm md:p-4 p-2 md:rounded-xl max-w-full`}
      >
        <div className={`${currentView === AuthView.SIGNUP ? 'hidden' : 'ml-auto'}`}>
          <button className='default-button-icons rounded-full  my-2'>
            <IoCloseSharp size={'20px'} onClick={handlerCLoseLogin} />
          </button>
        </div>
        <div className='px-2 flex flex-col md:justify-center'>
          {currentView === AuthView.LOGIN && (
            <>
              <div className=''>
                <button className='h-[50px] border bg-[#00C851] text-white boder-2 w-full rounded-md'>
                  Continue with HCMCOU-SSO
                </button>
                <div className='flex items-center w-full gap-1 mt-2'>
                  <hr className='flex-1 h-0.5 bg-gray-300' />
                  <p className='text-[11px] '>OR</p>
                  <hr className='flex-1 h-0.5 bg-gray-300' />
                </div>
              </div>
              <p className='font-bold text-[27px] md:mt-3'>Login in</p>
              <p className='text-[13px]'>
                By continuing, you agree to our User <span className='text-blue-color'>Agreement</span> and acknowledge
                that you understand the
                <span className='text-blue-color'> Privacy Policy</span>.
              </p>
              <form className='Login'>
                <Input
                  label='Username'
                  data='Enter your name'
                  className='input-fields-default'
                  value={formilk.values.username || ''}
                  setData={(value) => formilk.setFieldValue('username', value)}
                  type='text'
                  inputType='text'
                />
                <Input
                  label='Password'
                  type='password'
                  data='Enter your password'
                  className='input-fields-default'
                  setData={(value) => formilk.setFieldValue('password', value)}
                  inputType='text'
                />
              </form>
              <span className='text-blue-color cursor-pointer md:my-1 ml-[9px] my-2'>Forget Password</span>
              <span className='md:mt-1 ml-[9px] '>
                New Account,
                <span className='text-blue-color cursor-pointer' onClick={() => handleToggleView(AuthView.EMAIL)}>
                  Sign Up
                </span>
              </span>
              <button className=' md:h-[50px] h-[40px] mt-4 md:mt-10 rounded-lg bg-color-primary text-white font-bold text-20 shadow-md'>
                Login
              </button>
            </>
          )}
          {currentView === AuthView.EMAIL && (
            <>
              <div className=''>
                <button className='h-[50px] border bg-[#00C851] text-white boder-2 w-full rounded-md'>
                  Continue with HCMCOU-SSO
                </button>
                <div className='flex items-center w-full gap-1 mt-2'>
                  <hr className='flex-1 h-0.5 bg-gray-300' />
                  <p className='text-[11px] '>OR</p>
                  <hr className='flex-1 h-0.5 bg-gray-300' />
                </div>
              </div>
              <p className='font-bold text-[27px] mt-10'>Sign Up</p>
              <p className='text-[13px]'>
                By continuing, you agree to our User <span className='text-blue-color'>Agreement</span> and acknowledge
                that you understand the
                <span className='text-blue-color'> Privacy Policy</span>.
              </p>
              <form className='check_email'>
                <Input
                  label='Username'
                  data='Enter your email'
                  className='input-fields-default'
                  value={formilk.values.email}
                  type='email'
                  setData={(value) => formilk.setFieldValue('username', value)}
                  inputType='text'
                />
              </form>
              <span className='mt-5 ml-[9px]  '>
                Already,
                <span className='text-blue-color cursor-pointer' onClick={() => handleToggleView(AuthView.LOGIN)}>
                  Login in
                </span>
              </span>
              <button
                className=' md:h-[50px] h-[40px] mt-4 md:mt-10 rounded-lg bg-color-primary text-white font-bold text-20 shadow-md'
                onClick={() => handleToggleView(AuthView.SIGNUP)}
              >
                Continue
              </button>
            </>
          )}
          {currentView === AuthView.SIGNUP && (
            <>
              <button className='default-button-icon' onClick={() => handleToggleView(AuthView.EMAIL)}>
                <GrLinkPrevious size='25' />
              </button>
              <div className='my-10  '>
                <p className='font-bold text-[20px] md:mt-3'>Create Your Username and Password</p>
                <form className='form_signup'>
                  <Input
                    label='Username'
                    data='Enter your name'
                    className='h-[50px]  w-full bg-input-fields-color p-4 rounded-md'
                    value={formilk.values.username}
                    setData={(value) => formilk.setFieldValue('username', value)}
                    type='text'
                    inputType='text'
                  />
                  <Input
                    label='Password'
                    data='Enter your password'
                    type='password'
                    className='h-[50px] w-full p-4 bg-input-fields-color rounded-md'
                    value={formilk.values.password}
                    setData={(value) => formilk.setFieldValue('password', value)}
                    inputType='text'
                  />
                  <Input
                    label='Confirm Password'
                    data='Confirm Password'
                    type='password'
                    value={formilk.values.confirmpassword}
                    setData={(value) => formilk.setFieldValue('confrimpassword', value)}
                    className='h-[50px] w-full p-4 bg-input-fields-color rounded-md'
                    inputType='text'
                  />
                  <button className=' md:h-[50px] w-full h-[40px] mt-4 md:mt-10 rounded-lg bg-color-primary text-white font-bold text-20 shadow-md'>
                    Sign Up
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
