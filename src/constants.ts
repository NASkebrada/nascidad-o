import { 
  Lamp, TriangleAlert, Plus, Trash2, Waves, Droplets, Zap, Dog, Bus, Droplet, 
  Megaphone, ThumbsUp, MessageSquareText, MapPin, BarChart3, Users 
} from 'lucide-react';

export const CATEGORIES = [
  { id: 'iluminacao', label: 'ILUMINAÇÃO', sub: 'LÂMPADAS QUEIMADAS', icon: Lamp, color: 'bg-orange-400' },
  { id: 'buracos', label: 'BURACOS', sub: 'CRATERAS E RUAS', icon: TriangleAlert, color: 'bg-orange-600' },
  { id: 'saude', label: 'SAÚDE', sub: 'UNIDADES E ATENDIMENTOS', icon: Plus, color: 'bg-blue-600' },
  { id: 'lixo', label: 'LIXO', sub: 'DESCARTE IRREGULAR', icon: Trash2, color: 'bg-green-600' },
  { id: 'enchentes', label: 'ENCHENTES', sub: 'ALAGAMENTOS E DRENAGEM', icon: Waves, color: 'bg-teal-500' },
  { id: 'esgoto', label: 'ESGOTO', sub: 'VAZAMENTOS E BUEIROS', icon: Droplets, color: 'bg-yellow-700' },
  { id: 'fios', label: 'FIOS SOLTOS', sub: 'CABOS E PICOS ELÉTRICOS', icon: Zap, color: 'bg-purple-600' },
  { id: 'animais', label: 'ANIMAIS SOLTOS', sub: 'NA RUA', icon: Dog, color: 'bg-pink-600' },
  { id: 'transporte', label: 'TRANSPORTE', sub: 'ÔNIBUS E TRANSPORTE PÚBLICO', icon: Bus, color: 'bg-blue-700' },
  { id: 'agua', label: 'ÁGUA', sub: "FALTA D'ÁGUA E ABASTECIMENTO", icon: Droplet, color: 'bg-blue-500' },
  { id: 'denuncia', label: 'DENÚNCIA GERAL', sub: '', icon: Megaphone, color: 'bg-red-600' },
  { id: 'elogios', label: 'ELOGIOS', sub: 'RECONHEÇA BONS SERVIÇOS', icon: ThumbsUp, color: 'bg-green-700' },
  { id: 'sugestoes', label: 'SUGESTÕES', sub: 'IDEIAS PARA A CIDADE', icon: MessageSquareText, color: 'bg-purple-700' },
  { id: 'participacao', label: 'PARTICIPAÇÃO CIDADÃ', sub: 'AÇÕES E MUTIRÕES', icon: Users, color: 'bg-yellow-500' },
  { id: 'mapa', label: 'MAPA DA CIDADE', sub: 'VEJA PROBLEMAS PERTO DE VOCÊ', icon: MapPin, color: 'bg-blue-900' },
  { id: 'ranking', label: 'RANKING', sub: 'ACOMPANHE OS PROBLEMAS', icon: BarChart3, color: 'bg-blue-950' },
];
