import Sidebar from './SideBar';
import TopBar from './TopBar';

const Layout = ({ children, handleDepositClick, handleWithdrawClick, setContent, balance }) => {
  return (
    <div className="h-screen flex justify-center">
      <Sidebar setContent={setContent} />
      <main className="content flex-grow text-white">
        <div className="">
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
