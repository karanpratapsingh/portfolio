import { Layout } from 'antd';

function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();
  return (
    <Layout.Footer className='text-center py-10 text-lg font-light'>
      Copyright © {year} Karan Pratap Singh | All rights reserved
    </Layout.Footer>
  );
}

export { Footer };
