import config from '../config';

function Banner(): React.ReactElement {
  return (
    <div className='h-screen flex flex-col flex-1 justify-center px-6 lg:px-10  py-10'>
      <h1 className='text-2xl lg:text-6xl font-bold'>
        Hi, I am {config.personal.name}
      </h1>
      <p className='mt-2 lg:text-2xl font-light'>{config.personal.intro}</p>
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
