import classNames from 'classnames/bind'
import styles from './ToggleSwitch.module.scss'
const cx = classNames.bind(styles)
export const ToggleSwitch = () => {
  return (
    <div className={cx('toggle-switch')}>
      <input className={cx('toggle-input')} id='toggle' type='checkbox' />
      <label className={cx('toggle-label')} htmlFor='toggle'></label>
    </div>
  )
}
