import './SideBar.scss'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import {FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart} from 'react-icons/fa';
import sidebarBg from '../../assests/bg2.jpeg';
import 'react-pro-sidebar/dist/css/styles.css'
import {DiReact} from 'react-icons/di';
import {MdDashboard} from 'react-icons/md'
import { Link } from 'react-router-dom';
import DashBoard from "./Content/DashBoard";
import ManageUser from "./Content/ManageUser";

const Sidebar = (props) => {
    const {image, collapsed, toggled, handleToggleSidebar} = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems:'center',
                            gap:'5px'
                        }}
                    >
                        <DiReact size={'3em'} color={'pink'} ></DiReact>
                        <span >FU PET SHOP</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard/>}
                            // suffix={<span className="badge red">New</span>}
                        >
                            Dashboard
                            <Link to="/admins" element={<DashBoard></DashBoard>} />
                        </MenuItem>

                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            // suffix={<span className="badge yellow">3</span>}
                            // icon={<FaRegLaughWink/>}
                            icon={<FaGem/>}
                            title='Feartures'
                        >
                            <MenuItem> Quản lý Users
                                <Link to="/admins/manage-users" element={<ManageUser></ManageUser>} />
                            </MenuItem>
                            <MenuItem> Quản lý Pets </MenuItem>
                            <MenuItem> Quản lý Đơn hàng</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{textAlign: 'center'}}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/duy-doanphan/pet-shop-FU"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub/>
                            <span style={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>
              Phan Duy
            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
};

export default Sidebar;