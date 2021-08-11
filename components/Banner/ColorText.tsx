interface ColorTextProps {
  text: string;
  backgroundColor: string;
  url?: string;
  onClick?: VoidFunction;
}

export function ColorText(props: ColorTextProps): React.ReactElement {
  const { text, backgroundColor, url, onClick } = props;

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='cursor-pointer mx-2 font-medium p-1 dark:text-black'
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {text}
    </a>
  );
}
