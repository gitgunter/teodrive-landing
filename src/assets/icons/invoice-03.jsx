/**
 * SVG Icon component.
 *
 * @param {React.SVGProps<SVGSVGElement>} props React SVG Props.
 */
const Invoice03 = (props) => {
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
        d='M20.016 2C18.903 2 18 4.686 18 8h2.016c.972 0 1.457 0 1.758-.335.3-.336.248-.778.144-1.661C21.64 3.67 20.894 2 20.016 2z'
        stroke='currentColor'
        strokeWidth={1.5}
      />
      <path
        d='M18 8.054v10.592c0 1.511 0 2.267-.462 2.565-.755.486-1.922-.534-2.509-.904-.485-.306-.727-.458-.996-.467-.291-.01-.538.137-1.062.467l-1.911 1.205c-.516.325-.773.488-1.06.488-.287 0-.545-.163-1.06-.488l-1.91-1.205c-.486-.306-.728-.458-.997-.467-.291-.01-.538.137-1.062.467-.587.37-1.754 1.39-2.51.904-.461-.298-.461-1.053-.461-2.565V8.054c0-2.854 0-4.28.879-5.167C3.757 2 5.172 2 8 2h12M6 6h8M8 10H6'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 10.875c-.828 0-1.5.588-1.5 1.313 0 .724.672 1.312 1.5 1.312s1.5.588 1.5 1.313c0 .724-.672 1.312-1.5 1.312m0-5.25c.653 0 1.209.365 1.415.875m-1.415-.875V10m0 6.125c-.653 0-1.209-.365-1.415-.875m1.415.875V17'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
      />
    </svg>
  );
};
export default Invoice03;
