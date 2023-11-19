import classNames from 'classnames/bind'
import styles from './Input.module.scss'

// Định nghĩa kiểu props cho component
interface InputProps {
  data: string
  setData: (value: string) => void
  label?: string
  inputType: string
  className?: string
  inputAbout?: boolean
  inputTitle?: boolean
  inputDesc?: boolean
  inputDefault?: boolean
  value?: string // Update here
  type: string
}

const cx = classNames.bind(styles)

function Input(props: InputProps) {
  const {
    data,
    setData,
    label,
    inputType,
    value,
    type,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(e.target.value)
  }

  return (
    <>
      <label className='my-2'>{label}</label>
      {inputType === 'textarea' ? (
        <textarea className={classes} placeholder={data} value={value} onChange={handleChange}></textarea>
      ) : (
        <input type={type} value={value} className={classes} placeholder={data} onChange={handleChange} />
      )}
    </>
  )
}
export default Input
