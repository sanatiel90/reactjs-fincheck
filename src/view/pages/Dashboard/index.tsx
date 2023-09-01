import { Accounts } from "./components/Accounts"
import { Logo } from "../../components/Logo"
import { Transactions } from "./components/Transactions"
import { UserMenu } from "../../components/UserMenu"
import { DashboardProvider } from "./components/DashboardContext"

export function Dashboard(){
  //const { signOut } = useAuth()
  return (
    <DashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
        <header className="h-12 flex items-center justify-between">
          <Logo classname="h-6 text-teal-900" />
          <UserMenu />
        </header>

        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
          <div className="w-full md:w-1/2 ">
            <Accounts />
          </div>
          <div className="w-full md:w-1/2 ">
            <Transactions />
          </div>
        </main>
      </div>
    </DashboardProvider>

  )
}