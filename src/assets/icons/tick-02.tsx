import React from 'react'

interface Tick02Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Tick02 = ({ size = 24, ...props }: Tick02Props) => (
  <svg
    {...props}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5 14l3.5 3.5L19 6.5'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default Tick02
