
type BlockProps = {
  children?: React.ReactNode;
  width?: string | number;
  height?: number;
  color?: string;
  backgroundColor?: string;
};

export const Block: React.FC<BlockProps> = ({ children, width, height, color, backgroundColor }) => {
  const className = `${typeof width === "number" ? "w-[" + width + "px]" : "w-" + width} h-[${height}px] bg-[${backgroundColor}] text-${color}`;

  const style = {
    width: `${typeof width === "number" ? width+'px' : width}`,
    height: `${typeof height === "number" ? height+'px' : height}`,
    color: `${color}`,
    backgroundColor: `${backgroundColor}`,
  }

  return <div className={className} style={style}>{children}</div>;
};
