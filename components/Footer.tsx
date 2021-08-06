import { Layout } from 'antd';

export function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();
  return (
    <Layout.Footer className='text-center py-10 font-light bg-secondary'>
      Copyright © {year} Karan Pratap Singh | All rights reserved
    </Layout.Footer>
  );
}
