import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps): React.ReactElement {
  const { children } = props;

  return (
    <div className='flex flex-col'>
      {children}
      <Footer />
    </div>
  );
}

export { Layout };
