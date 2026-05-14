import { useState } from 'react';
import { Menu, Bell } from 'lucide-react';
import { CATEGORIES } from './constants';
import { CategoryTile } from './components/CategoryTile';
import { BottomNav } from './components/BottomNav';
import { ReportForm } from './components/ReportForm';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (selectedCategory) {
    return <ReportForm categoryId={selectedCategory} onBack={() => setSelectedCategory(null)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-20">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-slate-800">
        <Menu className="w-6 h-6" />
        <div className="text-xl font-bold">NAS CIDADÃO</div>
        <div className="relative">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
        </div>
      </header>

      {/* Hero */}
      <div className="p-4">
        <h1 className="text-2xl font-bold">Olá, cidadão!</h1>
        <p className="text-slate-400">Juntos fazemos uma cidade melhor.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 px-4 pb-4">
        {CATEGORIES.map((cat) => (
          <CategoryTile key={cat.id} {...cat} onClick={() => setSelectedCategory(cat.id)} />
        ))}
      </div>

      {/* Banner */}
      <div className="mx-4 mb-4 p-4 bg-slate-800 rounded-lg">
        <h2 className="font-bold">PARTICIPE DA TRANSFORMAÇÃO!</h2>
        <p className="text-xs text-slate-400 mt-1">Sua participação ajuda a construir uma Nova Alvorada do Sul melhor.</p>
      </div>

      {/* Nav */}
      <BottomNav />
    </div>
  );
}
