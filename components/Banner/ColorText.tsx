import clsx from 'clsx';

interface ColorTextProps {
  text: string;
  backgroundColor?: string;
  className?: string;
  url?: string;
  onClick?: VoidFunction;
}

export function ColorText(props: ColorTextProps): React.ReactElement {
  const { className, text, backgroundColor, url, onClick } = props;

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={clsx(
        'cursor-pointer font-medium p-1 dark:text-black',
        className,
      )}
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {text}
    </a>
  );
}
