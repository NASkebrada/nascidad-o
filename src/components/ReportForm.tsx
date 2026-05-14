import { useState, useRef } from 'react';
import { ArrowLeft, Camera, Mic, MapPin, Send, X } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface ReportFormProps {
  categoryId: string;
  onBack: () => void;
}

export function ReportForm({ categoryId, onBack }: ReportFormProps) {
  const category = CATEGORIES.find(c => c.id === categoryId);
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const audioInputRef = useRef<HTMLInputElement>(null);

  if (!category) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('category', category.label);
    formData.append('description', description);
    formData.append('location', 'Localização não informada');
    if (photo) formData.append('photo', photo);
    if (audio) formData.append('audio', audio);

    try {
      const response = await fetch('/api/submit-report', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Denúncia enviada com sucesso!');
        onBack();
      } else {
        const errorData = await response.json();
        alert('Erro ao enviar denúncia: ' + (errorData.error || 'Erro desconhecido'));
      }
    } catch (err) {
      alert('Erro de conexão ao tentar enviar: ' + err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-20">
      <header className="p-4 flex items-center gap-4 border-b border-slate-800">
        <button onClick={onBack}><ArrowLeft className="w-6 h-6" /></button>
        <h2 className="text-xl font-bold">{category.label}</h2>
      </header>

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descreva o problema aqui..."
          className="w-full h-32 p-3 bg-slate-800 rounded-lg text-white"
        />

        <input type="file" accept="image/*" ref={photoInputRef} onChange={(e) => setPhoto(e.target.files?.[0] || null)} className="hidden" />
        <input type="file" accept="audio/*" ref={audioInputRef} onChange={(e) => setAudio(e.target.files?.[0] || null)} className="hidden" />

        <div className="grid grid-cols-2 gap-4">
          <button type="button" onClick={() => photoInputRef.current?.click()} className="flex items-center justify-center gap-2 p-3 bg-slate-800 rounded-lg">
            <Camera className="w-5 h-5" /> {photo ? photo.name : 'Foto'}
            {photo && <X className="w-4 h-4 text-red-400" onClick={(e) => { e.stopPropagation(); setPhoto(null); }} />}
          </button>
          <button type="button" onClick={() => audioInputRef.current?.click()} className="flex items-center justify-center gap-2 p-3 bg-slate-800 rounded-lg">
            <Mic className="w-5 h-5" /> {audio ? audio.name : 'Áudio'}
            {audio && <X className="w-4 h-4 text-red-400" onClick={(e) => { e.stopPropagation(); setAudio(null); }} />}
          </button>
        </div>

        <button type="button" className="w-full flex items-center justify-center gap-2 p-3 bg-slate-800 rounded-lg text-slate-400">
          <MapPin className="w-5 h-5" /> Adicionar localização
        </button>

        <button type="submit" className="w-full p-4 bg-green-600 rounded-lg font-bold flex items-center justify-center gap-2">
          <Send className="w-5 h-5" /> ENVIAR DENÚNCIA
        </button>
      </form>
    </div>
  );
}
