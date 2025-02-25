interface IProps {
  title: string
  description: string
  children?: React.ReactNode
}

export const HeaderDashboardPage = ({ title, description, children }: IProps) => {
  return (
    <div className="bg-white mb-6 pb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500">{description}</p>
      {children}
    </div>
  )
}