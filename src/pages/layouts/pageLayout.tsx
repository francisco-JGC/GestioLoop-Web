import { HeaderPage } from "@/shared/components/headerPage"
import { ReactNode } from "react"

interface IProps {
  children: ReactNode
}

export const PageLayout = ({ children }: IProps) => {
  return (
    <main>
      <HeaderPage />
      <div>
        {children}
      </div>
    </main>
  )
}