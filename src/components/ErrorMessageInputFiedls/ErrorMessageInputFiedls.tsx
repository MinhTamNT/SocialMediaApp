import React from 'react'

export const ErrorMessageInputFiedls: React.FC<{ message?: string }> = ({ message }) => {
  return message ? <p className='error_message w-full text-10 text-color-default md:ml-2 md:mt-2'>{message}</p> : null
}
