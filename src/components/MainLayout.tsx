import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import './MainLayout.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-layout__wrapper">
        <main className="main-layout__content">
          {children}
        </main>
        <footer className="main-layout__footer">
          <p>© 2024 FinDesktop. MIT License.</p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
