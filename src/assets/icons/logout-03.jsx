/**
 * SVG Icon component.
 *
 * @param {React.SVGProps<SVGSVGElement>} props React SVG Props.
 */
const Logout03 = (props) => {
  return (
    <svg
      {...props}
      width={props.size || 24}
      height={props.size || 24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15 17.625c-.074 1.852-1.617 3.424-3.684 3.374-.481-.012-1.076-.18-2.265-.515-2.861-.807-5.345-2.164-5.941-5.203C3 14.723 3 14.095 3 12.837v-1.674c0-1.257 0-1.886.11-2.445.596-3.038 3.08-4.395 5.941-5.202 1.19-.335 1.784-.503 2.265-.515 2.067-.05 3.61 1.522 3.684 3.374'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
      />
      <path
        d='M21 12H10m11 0c0-.7-1.994-2.008-2.5-2.5M21 12c0 .7-1.994 2.008-2.5 2.5'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default Logout03;
