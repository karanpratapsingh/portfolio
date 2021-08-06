import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps): React.ReactElement {
  const { children } = props;

  return (
    <div className='flex flex-col'>
      {children}
      <Footer />
    </div>
  );
}
