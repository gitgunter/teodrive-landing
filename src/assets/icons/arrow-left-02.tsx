interface ArrowLeft02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ArrowLeft02 = ({ size = 24, ...props }: ArrowLeft02IconProps) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 12h16M9 17s-5-3.682-5-5 5-5 5-5'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ArrowLeft02
