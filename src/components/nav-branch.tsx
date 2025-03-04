import {
  ChevronsUpDown,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import useBranchesStore from "@/shared/store/branchesStore"
import { useEffect } from "react"
import { getBranches } from "@/infrastructure/api/hooks/branchesHook"
import { toast } from "sonner"

export function NavBranch() {
  const { isMobile } = useSidebar()
  const { branches, selectedBranch, setBranches, setSelectedBranch } = useBranchesStore()

  useEffect(() => {
    if (!branches || branches.length === 0) {
      getBranches()
        .then((response) => {
          if (response && response.length > 0) {
            setBranches(response);
            setSelectedBranch(response[0].id);
          }
        })
        .catch(() => toast.error('error'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getBranches, setBranches, setSelectedBranch]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-gray-100"
            >
              <div className="grid flex-1 text-left text-sm leading-tight max-w-60" title={selectedBranch?.name}>
                <span className="truncate font-semibold">{selectedBranch?.name}</span>
                <span className="truncate text-xs">{selectedBranch?.address}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            {
              branches?.length ? branches.map((branch) => (
                <div key={branch.id} className={`${branch.id === selectedBranch?.id && 'font-semibold'}`}
                  onClick={() => setSelectedBranch(branch.id)}
                >
                  <DropdownMenuItem className="">
                    <i className={`bx ${branch.id === selectedBranch?.id ? 'bxs' : 'bx'}-briefcase-alt-2`}></i>
                    {branch.name}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </div>
              )) : (
                <div className="p-2">
                  No se cargaron las branches
                </div>
              )
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
