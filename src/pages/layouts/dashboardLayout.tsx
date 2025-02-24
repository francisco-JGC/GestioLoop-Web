import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import { useBreadcrumbs } from "@/shared/hooks/useBreadcrumbs"
import { NavBranch } from "@/components/nav-branch"

interface IProps {
  children: React.ReactNode
}

export const DashboardLayout = ({ children }: IProps) => {
  const breadcrumbList = useBreadcrumbs()

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full flex flex-col gap-4 ">
        <div className="flex justify-between">
          <div className="flex items-center">
            <SidebarTrigger />
            <Breadcrumb>
              <BreadcrumbList>
                {
                  breadcrumbList?.map((item, index) => (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem key={index} className="hover:text-black capitalize">
                        <Link to={item.path} >{item.label}</Link>
                      </BreadcrumbItem>
                    </>
                  ))
                }
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <NavBranch />
          </div>
        </div>
        <div>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}