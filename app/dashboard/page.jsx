import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import ModelsTable from "./components/model-table"
import Sidebar from "../home/components/sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { UserNav } from "./components/user-nav"

export default function DashboardPage() {
  return (
    <SidebarProvider>
     <div className="flex min-h-screen w-full bg-black text-white overflow-hidden">

      <Sidebar />

      <main className="flex-1 p-6 md:p-8 overflow-hidden">

        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Neuranetix</h1>
    
            <UserNav />
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList className="bg-gray-500 text-gray-400">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="verified">Verified</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="rejected">Rejected</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-800 bg-transparent text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  >
                    Sort
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-800 bg-transparent text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  >
                    Filter
                  </Button>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <ModelsTable filter="all" />
              </TabsContent>

              <TabsContent value="verified" className="mt-0">
                <ModelsTable filter="verified" />
              </TabsContent>

              <TabsContent value="in-progress" className="mt-0">
                <ModelsTable filter="in-progress" />
              </TabsContent>

              <TabsContent value="rejected" className="mt-0">
                <ModelsTable filter="rejected" />
              </TabsContent>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="text-lg font-medium mb-2">Total Models</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="text-lg font-medium mb-2">Total Sales</h3>
              <p className="text-3xl font-bold">3,240 USDT</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="text-lg font-medium mb-2">Total Views</h3>
              <p className="text-3xl font-bold">8,721</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    </SidebarProvider>
  )
}
