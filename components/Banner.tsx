import config from '../config';

function Banner(): React.ReactElement {
  return (
    <div
      className='flex flex-col flex-1 justify-center py-10 px-10'
      style={{ height: '100vh' }}
    >
      <h1 className='text-2xl lg:text-6xl font-bold'>Hi, I am {config.name}</h1>
      <p className='mt-2 lg:text-2xl font-light'>{config.intro}</p>
      <p className='mt-2 lg:text-2xl font-light'>
        Read more
        <span className='cursor-pointer mx-2 font-bold underline italic'>
          about me
        </span>
        or
        <span className='cursor-pointer mx-2 font-bold underline italic'>
          contact me
        </span>
      </p>
    </div>
  );
}

export { Banner };
