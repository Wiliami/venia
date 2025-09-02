"use client"

import { AppSidebar } from "@/app/dashboard/_components/Sidebar"
import { Header } from '@/app/dashboard/_components/Header'
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Play, Clock } from "lucide-react";
import { mockVideos } from './mockVideos'

export default function Videos() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredVideos = mockVideos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <Header />
                <SidebarInset>
                
                <div className="bg-background">
                    {/* Header */}
                    <div className="border-b border-border bg-card">
                        <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                            <h1 className="text-3xl font-bold text-foreground">VideoTech</h1>
                            <p className="text-muted-foreground">Aprenda tecnologia com os melhores vídeos</p>
                            </div>
                            
                            {/* * Search */}
                            <div className="relative w-full max-w-md">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Buscar vídeos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Video Grid */}
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredVideos.map((video) => (
                            <Card key={video.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                            <CardHeader className="p-0">
                                {/* Thumbnail */}
                                <div className={`aspect-video w-full ${video.thumbnail} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/10" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                    <Button size="icon" className="h-12 w-12 rounded-full bg-white/90 text-black hover:bg-white hover:scale-110 transition-all">
                                    <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                                    </Button>
                                </div>
                                
                                {/* Duration badge */}
                                <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-xs text-white font-medium">
                                    <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {video.duration}
                                    </div>
                                </div>
                                </div>
                            </CardHeader>
                            
                            <CardContent className="p-4">
                                <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                                {video.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                {video.description}
                                </p>
                                
                                <Button className="w-full" variant="outline">
                                Assistir Vídeo
                                </Button>
                            </CardContent>
                            </Card>
                        ))}
                        </div>

                        {/* No results */}
                        {filteredVideos.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Nenhum vídeo encontrado</h3>
                            <p className="text-muted-foreground">Tente buscar por outros termos</p>
                        </div>
                        )}
                    </div>
                </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}