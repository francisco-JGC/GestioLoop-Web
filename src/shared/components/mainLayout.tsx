import type { ReactNode } from 'react';
import 'boxicons/css/boxicons.min.css';

interface IProps {
  children: ReactNode
}

const MainLayout = ({ children }: IProps) => {
  return (
    <>
      {children}
    </>
  );
};

export default MainLayout;
