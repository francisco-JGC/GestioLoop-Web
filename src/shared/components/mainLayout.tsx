import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import 'boxicons/css/boxicons.min.css';

interface IProps {
  children: ReactNode
}

const MainLayout = ({ children }: IProps) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default MainLayout;
