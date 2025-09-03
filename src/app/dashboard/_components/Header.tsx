"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Input } from '@/components/ui/input'
import { Alert } from '@/app/dashboard/_components/alert'
import { DialogDemo } from '@/app/dashboard/_components/DialogDemo'
import { useState } from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export function Header() {
    const [searchTerm, setSearchTerm] = useState("");
  
    return (
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
              <Input 
                placeholder="Pesquisar..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-white"/>

            </div>
            {/* <Button className="bg-green-700 text-white font-semibold hover:bg-green-600">
              <BellDot />
            </Button> */}
            <Alert />
            <DialogDemo tagButton="+ Criar nova Campanha" />
          </div>
          
        </header>
    )
}