export interface BaseProps {
  title: string;
  description: string;
  onClick?: VoidFunction;
}

export const dimensions =
  'flex-shrink-0 w-72 lg:w-80 mr-2 rounded cursor-pointer';
export const border = 'border border-light dark:border-dark';
export const color = 'dark:bg-dark dark:text-white';
export const background = 'bg-placeholder-light dark:bg-placeholder-dark';
