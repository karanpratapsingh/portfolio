export interface SubHeaderProps {
  title: string;
  description: string;
}

export function SubHeader(props: SubHeaderProps): React.ReactElement {
  const { title, description } = props;

  return (
    <div className='pb-4'>
      <p className='text-2xl lg:text-2xl font-bold'>{title}</p>
      <p className='mt-1 text-base font-light'>{description}</p>
    </div>
  );
}
