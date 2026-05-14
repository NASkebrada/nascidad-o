# NAS Cidadão - Aplicativo de Fiscalização Popular

<div align="center">
  <h1>🏙️ NAS Cidadão</h1>
  <p>Fiscalização popular e engajamento cívico para Nova Alvorada do Sul</p>
</div>

## 📱 Sobre

O **NAS Cidadão** é um aplicativo mobile que permite que cidadãos reportem problemas urbanos, façam sugestões e participem ativamente da melhoria da cidade.

### Funcionalidades Principais

- 📸 **Denúncias com Mídia**: Envie fotos e áudios com seus relatos
- 🗺️ **Localização**: Marque a localização exata do problema
- 🎯 **16 Categorias**: Desde iluminação até transporte público
- 💬 **Feedback em Tempo Real**: Participe da transformação urbana
- 👥 **Comunidade**: Veja problemas reportados por outros cidadãos
- 📊 **Ranking**: Acompanhe quais problemas são prioritários

### Categorias de Denúncia

- 💡 Iluminação
- 🕳️ Buracos em Ruas
- 🏥 Saúde
- 🗑️ Lixo/Descarte Irregular
- 🌊 Enchentes
- 🚰 Esgoto
- ⚡ Fios Soltos
- 🐕 Animais Soltos
- 🚌 Transporte Público
- 💧 Água
- 📣 Denúncia Geral
- 👍 Elogios
- 💡 Sugestões
- 👨‍👩‍👧‍👦 Participação Cidadã
- 🗺️ Mapa da Cidade
- 📈 Ranking de Problemas

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/NASkebrada/nascidad-o.git
cd nascidad-o
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Copie `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```

Edite o arquivo e adicione suas credenciais:
```env
GEMINI_API_KEY=sua_chave_aqui
SMTP_HOST=smtp.gmail.com
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
```

### Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

### Iniciar em Produção

```bash
npm start
```

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Estilo**: Tailwind CSS 4
- **Build**: Vite 6
- **Backend**: Express.js
- **Email**: Nodemailer
- **Upload**: Multer
- **Ícones**: Lucide React
- **Animações**: Motion/Framer Motion

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── components/
│   │   ├── CategoryTile.tsx      # Componente de categoria
│   │   ├── ReportForm.tsx        # Formulário de denúncia
│   │   └── BottomNav.tsx         # Navegação inferior
│   ├── App.tsx                   # Componente principal
│   ├── constants.ts              # Categorias e configurações
│   ├── index.css                 # Estilos globais
│   └── main.tsx                  # Entrada da aplicação
├── server.ts                     # Servidor Express
├── vite.config.ts                # Configuração Vite
├── tsconfig.json                 # Configuração TypeScript
├── package.json                  # Dependências
└── README.md                     # Este arquivo
```

## 🔐 Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|--------|
| `GEMINI_API_KEY` | Chave da API Google Gemini | `AIza...` |
| `SMTP_HOST` | Host do servidor SMTP | `smtp.gmail.com` |
| `SMTP_USER` | Usuário SMTP | `seu-email@gmail.com` |
| `SMTP_PASS` | Senha SMTP (app password) | `senha-app` |
| `APP_URL` | URL da aplicação | `http://localhost:3000` |

## 📧 Configurar Email (Gmail)

1. Ative 2FA na sua conta Google
2. Gere uma "App Password": https://myaccount.google.com/apppasswords
3. Use a senha gerada no `.env`

## 🤝 Contribuindo

Este projeto é aberto a contribuições! Sinta-se livre para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Suporte

Para dúvidas ou sugestões:
- 📧 Email: kebradanas@gmail.com
- 🐙 GitHub: [@NASkebrada](https://github.com/NASkebrada)

---

<div align="center">
  <p><strong>Juntos fazemos uma cidade melhor! 🏙️</strong></p>
</div>
