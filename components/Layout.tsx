import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps): React.ReactElement {
  const { children } = props;

  return (
    <div className='list flex flex-col dark:bg-dark'>
      <div className='layout flex flex-col self-center overflow-hidden'>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
