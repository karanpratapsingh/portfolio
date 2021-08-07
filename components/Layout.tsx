import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps): React.ReactElement {
  const { children } = props;

  return (
    <div className='flex flex-col'>
      <div className='layout flex flex-col self-center overflow-hidden'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
