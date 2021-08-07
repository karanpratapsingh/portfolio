interface ColorTextProps {
  text: string;
  backgroundColor: string;
  onClick?: () => void;
}

export function ColorText(props: ColorTextProps): React.ReactElement {
  const { text, backgroundColor, onClick } = props;

  return (
    <span
      className='cursor-pointer mx-2 font-medium p-1 dark:text-black'
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {text}
    </span>
  );
}
