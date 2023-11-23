interface Iprop {
  children: React.ReactNode
  className?: string
}

export const Wrapper: React.FC<Iprop> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}
