import { Outlet } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
        <Outlet/>
    </header>
  );
};

export default MainHeader;
