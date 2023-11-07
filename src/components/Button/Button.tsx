import classNames from "classnames/bind";
import { Link, LinkProps } from "react-router-dom";
import styles from "./button.module.scss";
const cx = classNames.bind(styles);
interface IProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: LinkProps["to"];
  href?: string;
  className?: string;
  text?: false;
  rounded?: false;
  disabled?: false;
  outline?: false;
  LeftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  small?: true;
  large?: true;
  primary?: true;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const Button: React.FC<IProp> = (props) => {
  const {
    to,
    href,
    text,
    rounded,
    children,
    outline,
    className,
    LeftIcon,
    disabled,
    rightIcon,
    small,
    onClick,
    large,
    primary,
    ...passProps
  } = props;
  let Comp: any = "button";
  const prop: any = {
    onClick,
    ...passProps,
  };

  // Remove disbale
  if (disabled) {
    Object.keys(prop).forEach((key) => {
      if (key.startsWith("on") && typeof prop[key] === "function") {
        delete prop[key];
      }
    });
  }
  if (to) {
    prop.to = to;
    Comp = Link;
  } else if (href) {
    prop.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    [className || ""]: className,
    primary,
    outline,
    small,
    large,
    text,
    rounded,
    disabled,
  });
  return (
    <Comp className={classes} {...prop}>
      {LeftIcon && <span className={cx("Icon")}>{LeftIcon}</span>}
      <span className={cx("tittle")}>{children}</span>
      {rightIcon && <span className={cx("Icon")}>{rightIcon}</span>}
    </Comp>
  );
};
