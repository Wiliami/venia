import ProfileCard from "@/components/ProfileCard";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Gerencie seu perfil e acompanhe suas atividades</p>
        </div>
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>
          
          {/* Placeholder for other dashboard components */}
          <div className="lg:col-span-2 space-y-6">
            <div className="h-48 bg-card border rounded-lg p-6 flex items-center justify-center">
              <p className="text-muted-foreground">Espaço para outros componentes do dashboard</p>
            </div>
            <div className="h-48 bg-card border rounded-lg p-6 flex items-center justify-center">
              <p className="text-muted-foreground">Gráficos, métricas, etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};