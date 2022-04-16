import Image from 'next/image';
import Link from './Link';

function Card({ title, description, banner, href }): React.ReactElement {
  const image = (
    <Image
      alt={title}
      src={banner}
      className='object-cover object-center md:h-36 lg:h-48'
      width={544}
      height={306}
    />
  );

  return (
    <div className='md p-4 md:w-1/2' style={{ maxWidth: '544px' }}>
      <div
        className={`${
          banner && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-100 border-opacity-60 dark:border-gray-800`}
      >
        {banner &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {image}
            </Link>
          ) : (
            image
          ))}
        <div className='p-6'>
          <h2 className='mb-3 text-2xl font-bold leading-8 tracking-tight'>
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className='prose mb-3 max-w-none text-gray-500 line-clamp-2 dark:text-gray-400'>
            {description}
          </p>
          {href && (
            <Link
              href={href}
              className='text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
