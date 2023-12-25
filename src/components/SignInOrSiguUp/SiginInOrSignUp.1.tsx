import React, { useState } from 'react'
import Input from '~/components/InputFields/Input'
import { useFormik } from 'formik'
import { IoCloseSharp } from 'react-icons/io5'
import { AuthView } from '~/types/enum'
import { GrLinkPrevious } from 'react-icons/gr'
import * as Yup from 'yup'
import { ErrorMessageInputFiedls as ErrorMessage } from '~/components/ErrorMessageInputFiedls/ErrorMessageInputFiedls'
interface Iprop {
  isMobile?: boolean
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}
interface Authen {
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
  const [confrimpassword, setConfrimpassword] = useState('')
  const [email, setEmail] = useState('')
  const modalWidthClass = isMobile ? 'w-full' : 'md:w-[500px]'
  const modalHeightClass = isMobile ? 'h-screen' : ' md:max-h-[650px]'
  const handleToggleView = (view: AuthView) => {
    setCurrentView(view)
  }
  const handlerCLoseLogin = () => {
    setLogin(!true)
  }
  const validationSchema = Yup.object({
    username: Yup.string().required('Required').min(5, 'Must be 5 characters or more'),
    email: Yup.string()
      .required('Required')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please valid your email'),
    password: Yup.string()
      .required('Required')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
        'Password must be 7-19 characters and contain at least one letter, one number, and a special character'
      ),
    confirmpassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password')], 'Password does not match')
      .nullable()
  })

  const formik = useFormik<Authen>({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmpassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Your form submission logic
      console.log(values)
    }
  })

  console.log(formik.errors.email)

  return (
    <div className='fixed flex justify-center  items-start inset-0 z-10 bg-black animate-[modal_1s_ease-in] bg-opacity-50 overflow-auto '>
      <div
        className={` flex flex-col ${modalWidthClass} ${modalHeightClass}  md:absolute modal animate-[modal_1s_ease-in-out] bg-white shadow-sm md:p-4  md:rounded-xl max-w-full`}
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
              <form className='Login flex flex-col' onSubmit={formik.handleSubmit}>
                <Input
                  label='Username'
                  data='Enter your name'
                  className='input-fields-default'
                  value={formik.values.username || ''}
                  setData={(value) => formik.setFieldValue('username', value)}
                  type='text'
                  inputType='text'
                />
                <ErrorMessage message={formik.errors.username} />
                <Input
                  label='Password'
                  type='password'
                  data='Enter your password'
                  className='input-fields-default'
                  setData={(value) => formik.setFieldValue('password', value)}
                  inputType='text'
                />
                <ErrorMessage message={formik.errors.password} />
                <span className='text-blue-color cursor-pointer md:my-1 ml-[9px] my-2'>Forget Password</span>
                <span className='md:mt-1 ml-[9px] '>
                  New Account,
                  <span className='text-blue-color cursor-pointer' onClick={() => handleToggleView(AuthView.EMAIL)}>
                    Sign Up
                  </span>
                </span>
                <button
                  type='submit'
                  className=' md:h-[50px] h-[40px] mt-4 md:mt-10 rounded-lg bg-color-primary text-white font-bold text-20 shadow-md'
                >
                  Login
                </button>
              </form>
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
              <form className='check_email flex flex-col'>
                <Input
                  label='EMAIL'
                  data='Enter your email'
                  className='input-fields-default'
                  value={formik.values.email}
                  type='email'
                  setData={(value) => formik.setFieldValue('email', value)}
                  inputType='text'
                />
                <ErrorMessage message={formik.errors.email} />
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
              </form>
            </>
          )}
          {currentView === AuthView.SIGNUP && (
            <>
              <button className='default-button-icon' onClick={() => handleToggleView(AuthView.EMAIL)}>
                <GrLinkPrevious size='25' />
              </button>
              <div className='my-6  '>
                <p className='font-bold text-[20px] md:mt-3'>Create Your Username and Password</p>
                <form className='form_signup flex flex-col'>
                  <Input
                    label='Username'
                    data='Enter your name'
                    className='h-[50px]  w-full bg-input-fields-color p-4 rounded-md'
                    value={formik.values.username}
                    setData={(value) => formik.setFieldValue('username', value)}
                    type='text'
                    inputType='text'
                  />
                  <ErrorMessage message={formik.errors.username} />
                  <Input
                    label='Password'
                    data='Enter your password'
                    type='password'
                    className='h-[50px] w-full p-4 bg-input-fields-color rounded-md'
                    value={formik.values.password}
                    setData={(value) => formik.setFieldValue('password', value)}
                    inputType='text'
                  />
                  <ErrorMessage message={formik.errors.password} />
                  <Input
                    label='Confirm Password'
                    data='Confirm Password'
                    type='password'
                    value={formik.values.confirmpassword}
                    setData={(value) => formik.setFieldValue('confirmpassword', value)}
                    className='h-[50px] w-full p-4 bg-input-fields-color rounded-md'
                    inputType='text'
                  />
                  <ErrorMessage message={formik.errors.confirmpassword} />
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
