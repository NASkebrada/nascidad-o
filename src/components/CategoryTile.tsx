import { LucideIcon } from 'lucide-react';

interface CategoryTileProps {
  label: string;
  sub: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

export function CategoryTile({ label, sub, icon: Icon, color, onClick }: CategoryTileProps) {
  return (
    <button onClick={onClick} className={`flex flex-col justify-between p-3 rounded-lg text-white ${color} h-28 w-full`}>
      <Icon className="w-8 h-8" />
      <div>
        <div className="font-bold text-sm tracking-tight">{label}</div>
        {sub && <div className="text-[10px] uppercase font-medium mt-0.5">{sub}</div>}
      </div>
    </button>
  );
}
