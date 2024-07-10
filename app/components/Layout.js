import Sidebar from './SideBar';
import TopBar from './TopBar';
import Row from './Row';

const Layout = ({ children, handleDepositClick, handleWithdrawClick, setContent, balance }) => {

  return (
    <div className="h-screen flex justify-center bg-black">
      <Sidebar setContent={setContent} />
      <main className="content flex-grow text-white">
        <div className="">
          <Row />
          <TopBar
            handleDepositClick={handleDepositClick}
            handleWithdrawClick={handleWithdrawClick}
            balance={balance} // Pass balance to TopBar
          />
          <hr className="m-6 mx-auto md:max-w-3xl" />
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
