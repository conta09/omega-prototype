import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Row from './Row';

const Layout = ({ children, handleDepositClick, handleWithdrawClick, setContent, balance }) => {
    const [activeMenu, setActiveMenu] = useState(false);

    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    };

    return (
        <div className="h-screen flex justify-center bg-black">
            <Sidebar setContent={setContent} toggleMenu={toggleMenu} activeMenu={activeMenu} />
            <main className="content flex-grow text-white">
                <div className="">
                    <Row toggleMenu={toggleMenu} />
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
