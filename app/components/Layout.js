import { useEffect, useState } from 'react';
import Sidebar from './SideBar';
import TopBar from './TopBar';
import Row from './Row';

const Layout = ({ children, handleDepositClick, handleWithdrawClick, setContent, balance }) => {
    const [user, setUser] = useState({ email: '', name: '' });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/user");
                if (res.ok) {
                    const data = await res.json();
                    setUser({ email: data.email, name: data.name });
                } else {
                    console.log("Error fetching user data");
                }
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        };
        fetchUser();
    }, []);

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
                    <div className='text-[#5f5e5e] font-normal '>
                        Email: <span>{user.email}</span>
                    </div>
                    
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
