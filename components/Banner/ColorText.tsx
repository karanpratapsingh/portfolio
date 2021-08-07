interface ColorTextProps {
  text: string;
  backgroundColor: string;
  href?: string;
  onClick?: () => void;
}

export function ColorText(props: ColorTextProps): React.ReactElement {
  const { text, backgroundColor, href, onClick } = props;

  return (
    <a
      href={href}
      className='cursor-pointer mx-2 font-medium p-1 dark:text-black'
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {text}
    </a>
  );
}
