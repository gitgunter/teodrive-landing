interface WrapProps extends React.HTMLAttributes<HTMLDivElement> {
  display?: 'flex' | 'block' | 'inline-block' | 'grid';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  width?: string | number;
  height?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
}

const Wrap: React.FC<WrapProps> = ({
  display = 'flex',
  flexDirection,
  justifyContent,
  alignItems,
  width,
  height,
  rowGap,
  columnGap,
  style,
  children,
  ...props
}) => {
  const computedStyle: React.CSSProperties = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    width,
    height,
    rowGap,
    columnGap,
    ...style, // Merge any additional styles passed through props
  };

  return (
    <div style={computedStyle} {...props}>
      {children}
    </div>
  );
};

export default Wrap;
