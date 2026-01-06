
# Maratona DETRAN-SP

Simulado completo com 120 questões e inteligência artificial.

## Como rodar localmente:

1. **Clone o repositório:**
   ```bash
   git clone <url-do-seu-repositorio>
   cd <nome-da-pasta>
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure sua API Key (Opcional para explicações):**
   Crie um arquivo chamado `.env` na raiz e adicione:
   ```env
   VITE_GEMINI_API_KEY=sua_chave_aqui
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse: `http://localhost:3000`

## Como publicar no GitHub Pages ou Vercel:

- **Vercel/Netlify:** Basta conectar seu repositório do GitHub. Ele detectará automaticamente que é um projeto Vite.
- **GitHub Pages:** Você precisará configurar um GitHub Action para fazer o build e publicar a pasta `dist`.
