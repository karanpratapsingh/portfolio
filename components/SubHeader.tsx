export interface SubHeaderProps {
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function SubHeader(props: SubHeaderProps): React.ReactElement {
  const { title, description, className, children } = props;

  return (
    <div className={`px-6 lg:px-10 pb-4 ${className}`}>
      <h2 className='text-2xl lg:text-2xl font-bold mb-1'>{title}</h2>
      <p className='text-base font-light'>{description}</p>
      {children}
    </div>
  );
}
