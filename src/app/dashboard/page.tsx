"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { NavDocuments } from '@/components/nav-documents'
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DialogDemo } from "@/app/dashboard/createCampanhaModel"
import { Alert } from "@/app/dashboard/alert"


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BellDot, Search } from 'lucide-react'

export default function Dashboard() {
  return (
    <SidebarProvider className="dark">
      <AppSidebar />
   
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">  
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  {/* <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>  */}
                  <BreadcrumbPage className="text-white font-bold text-lg">Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex gap-4 items-center justify-around px-4">
            <div>
              <Input placeholder="Pesquisar..." className="text-white"/>

            </div>
            {/* <Button className="bg-green-700 text-white font-semibold hover:bg-green-600">
              <BellDot />
            </Button> */}
            <Alert />
            <DialogDemo />
          </div>
          
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl">
              <div className="flex ali">Video</div> 
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
