"use client"

import { AppSidebar } from "@/app/dashboard/_components/Sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Header } from '@/app/dashboard/_components/Header'
import { NavDocuments } from '@/components/nav-documents'
import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'

export default function Dashboard() {
  return (
    <SidebarProvider className="dark">
      <AppSidebar />
      <SidebarInset>
      <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
