"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import { useToast } from "@/components/ui/use-toast";
import { MapPin, Calendar, Link as LinkIcon, Mail, Save, X, Edit3 } from "lucide-react";
// import profileAvatar from "@/assets/profile-avatar.jpg";
import { useState } from "react";

const profileSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  title: z.string().min(2, "Título deve ter pelo menos 2 caracteres"),
  bio: z.string().min(10, "Bio deve ter pelo menos 10 caracteres").max(200, "Bio deve ter no máximo 200 caracteres"),
  location: z.string().min(2, "Localização é obrigatória"),
  joinDate: z.string().min(2, "Data de ingresso é obrigatória"),
  website: z.string().url("Website deve ser uma URL válida").or(z.string().min(0)),
  email: z.string().email("Email deve ser válido"),
  followers: z.number().min(0),
  following: z.number().min(0),
  posts: z.number().min(0),
  skills: z.string().min(2, "Adicione pelo menos uma habilidade")
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface ProfileCardProps {
  name?: string;
  title?: string;
  bio?: string;
  location?: string;
  joinDate?: string;
  website?: string;
  email?: string;
  followers?: number;
  following?: number;
  posts?: number;
  skills?: string[];
  onSave?: (data: Omit<ProfileFormData, 'skills'> & { skills: string[] }) => void;
}

export default function ProfileCard({
  name = "Ana Silva",
  title = "Senior Frontend Developer",
  bio = "Apaixonada por criar experiências digitais incríveis. Especialista em React, TypeScript e design systems. Sempre aprendendo e compartilhando conhecimento.",
  location = "São Paulo, Brasil",
  joinDate = "Março 2021",
  website = "https://anasilva.dev",
  email = "ana@exemplo.com",
  followers = 1234,
  following = 567,
  posts = 89,
  skills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL"],
  onSave
}: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);
//   const { toast } = useToast();

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name,
      title,
      bio,
      location,
      joinDate,
      website,
      email,
      followers,
      following,
      posts,
      skills: skills.join(", ")
    }
  });

  const handleSave = (data: ProfileFormData) => {
    const skillsArray = data.skills.split(",").map(skill => skill.trim()).filter(Boolean);
    const profileData = { ...data, skills: skillsArray };
    
    if (onSave) {
      onSave(profileData);
    }
    
    setIsEditing(false);
    // toast({
    //   title: "Perfil atualizado",
    //   description: "Suas informações foram salvas com sucesso!"
    // });
  };

  const handleCancel = () => {
    form.reset();
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="w-full max-w-md mx-auto">
        <Card className="relative overflow-hidden bg-profile-card border-0 shadow-profile backdrop-blur-glass">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-profile-gradient opacity-10" />
          
          {/* Glass Border Effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-[1px]">
            <div className="h-full w-full rounded-lg bg-card/80 backdrop-blur-sm" />
          </div>
          
          <div className="relative p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-foreground">Editar Perfil</h2>
                </div>

                {/* Avatar (não editável por enquanto) */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full bg-profile-gradient p-1 shadow-profile-glow">
                      <img
                        // src={profileAvatar}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover border-2 border-background/20"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background" />
                  </div>
                </div>

                {/* Form Fields */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Nome</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-background/50 border-border/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Título</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-background/50 border-border/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Bio</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="bg-background/50 border-border/50 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Localização</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-background/50 border-border/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" className="bg-background/50 border-border/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Website</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-background/50 border-border/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Habilidades (separadas por vírgula)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="React, TypeScript, Node.js..." className="bg-background/50 border-border/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-profile-gradient hover:shadow-profile-glow transition-all duration-300"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Salvar
                  </Button>
                  <Button 
                    type="button"
                    variant="secondary" 
                    onClick={handleCancel}
                    className="bg-secondary/60 backdrop-blur-sm hover:bg-secondary/80"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </Card>
      </div>
    );
  }

  // Modo de visualização
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="relative overflow-hidden bg-profile-card border-0 shadow-profile backdrop-blur-glass">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-profile-gradient opacity-10" />
        
        {/* Glass Border Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-[1px]">
          <div className="h-full w-full rounded-lg bg-card/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative p-6 space-y-6">
          {/* Header with Edit Button */}
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </div>

          {/* Avatar and Basic Info */}
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full bg-profile-gradient p-1 shadow-profile-glow">
                <img
                //   src={profileAvatar}
                  alt={name}
                  className="w-full h-full rounded-full object-cover border-2 border-background/20"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold bg-profile-gradient bg-clip-text text-transparent">
                {form.watch("name") || name}
              </h1>
              <p className="text-primary font-semibold">{form.watch("title") || title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {form.watch("bio") || bio}
              </p>
            </div>
          </div>

          {/* Location and Details */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{form.watch("location") || location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Ingressou em {form.watch("joinDate") || joinDate}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <LinkIcon className="w-4 h-4" />
              <a href={form.watch("website") || website} className="text-primary hover:underline transition-colors">
                {(form.watch("website") || website)?.replace("https://", "")}
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>{form.watch("email") || email}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">{form.watch("posts") || posts}</div>
              <div className="text-xs text-muted-foreground">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">{(form.watch("followers") || followers).toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Seguidores</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">{form.watch("following") || following}</div>
              <div className="text-xs text-muted-foreground">Seguindo</div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {(form.watch("skills")?.split(",").map(s => s.trim()).filter(Boolean) || skills).map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-secondary/60 text-secondary-foreground hover:bg-secondary/80 transition-colors backdrop-blur-sm border border-border/30"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}