import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"

interface IProps {
  children: React.ReactNode
  breadcrumbList: {
    path: string,
    label: string
  }[]
}

export const DashboardLayout = ({ children, breadcrumbList }: IProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full flex flex-col gap-4 ">
        <div className="flex items-center">
          <SidebarTrigger />
          <Breadcrumb>
            <BreadcrumbList>
              {
                breadcrumbList?.map((item, index) => (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem key={index} className="hover:text-black">
                      <Link to={item.path} >{item.label}</Link>
                    </BreadcrumbItem>
                  </>
                ))
              }
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}