import classNames from 'classnames/bind'
import styles from './Input.module.scss'

// Định nghĩa kiểu props cho component
interface InputProps {
  data: string
  setData: React.Dispatch<React.SetStateAction<string>>
  label?: string
  inputType: string
  className?: string
  inputAbout?: boolean
  inputTitle?: boolean
  inputDesc?: boolean
  inputDefault?: boolean
  value?: string
  type: string
}

const cx = classNames.bind(styles)

function Input(props: InputProps) {
  const {
    data,
    setData,
    label,
    inputType,
    type,
    value,
    className,
    inputAbout = false,
    inputTitle = false,
    inputDesc = false,
    inputDefault = false
  } = props

  const classes = cx('wrapper', {
    [className || '']: className,
    inputDefault,
    inputAbout,
    inputTitle,
    inputDesc
  })

  return (
    <>
      <label className='my-2'>{label}</label>
      {inputType === 'textarea' ? (
        <textarea className={classes} placeholder={data} onChange={(e) => setData(e.target.value)}></textarea>
      ) : (
        <input
          type={type}
          value={value}
          className={classes}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  )
}

export default Input
