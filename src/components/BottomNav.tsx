import { Home, List, PlusCircle, Users, User } from 'lucide-react';

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 p-2 flex justify-around text-white">
      <button className="flex flex-col items-center gap-1 text-green-500">
        <Home className="w-5 h-5" />
        <span className="text-[10px]">INÍCIO</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400">
        <List className="w-5 h-5" />
        <span className="text-[10px]">MINHAS OCORRÊNCIAS</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-green-500 -mt-6 bg-green-600 p-2 rounded-full border-4 border-slate-900">
        <PlusCircle className="w-6 h-6 text-white" />
        <span className="text-[10px] hidden">NOVA</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400">
        <Users className="w-5 h-5" />
        <span className="text-[10px]">COMUNIDADE</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400">
        <User className="w-5 h-5" />
        <span className="text-[10px]">MEU PERFIL</span>
      </button>
    </div>
  );
}
