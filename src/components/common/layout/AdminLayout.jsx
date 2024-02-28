import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../../header/Dashboard/DashboardHeader";
import { ContentSidebar } from "../../sidebar/ContentSidebar";
import { AdminFooter } from "../../footer/AdminFooter";

export const AdminLayout = () => {
  return (
    <>
      <div className="flex relative">
        <div className="z-50 sticky top-0 left-0 h-[100vh]">
          <ContentSidebar className="z-50" />
        </div>
        <main className="bg-[#F8F7FA] flex-1">
          <div className="py-5 px-8 flex flex-col justify-between h-full">
            <div>
              <DashboardHeader />
              <Outlet />
            </div>
            <AdminFooter className="mt-auto" />
          </div>
        </main>
      </div>
    </>
  )
}


