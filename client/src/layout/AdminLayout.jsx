import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar";
export const AdminLayout = () => {
    return <>
        <Sidebar />
        <Outlet />
    </>
}