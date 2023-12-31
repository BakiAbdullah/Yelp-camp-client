import { Outlet } from "react-router-dom";
import SidebarDashboard from "../components/DashboardCompos/SidebarDashboard";



const DashboardLayout = () => {

  return (
    <>
      <div className="relative min-h-screen md:flex">
      <SidebarDashboard />
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>

   
    </>
  );
};

export default DashboardLayout;
