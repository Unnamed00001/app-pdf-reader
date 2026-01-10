# app-pdf-reader

Perfeito! Vou criar um **README completo e organizado** para o seu projeto de leitor de PDFs com estante de livros e favoritos. Vou considerar que ele está feito em **React Native + TypeScript + Expo**, e que tem as funcionalidades que você mencionou.

---

# 📚 PDF Reader App

Um aplicativo de leitura de PDFs desenvolvido em **React Native** com **TypeScript** e **Expo**, que permite organizar livros em uma estante, marcar favoritos e navegar facilmente entre os arquivos.

---

## 🛠 Funcionalidades

* **Adicionar PDFs** diretamente do dispositivo.
* **Estante de livros** organizada em fileiras com capas dos PDFs.
* **Favoritos**: marcar livros favoritos e filtrar por eles.
* **Progresso de leitura**: acompanhamento da página atual de cada PDF.
* **Visualização organizada**: separação por abas “Todos” e “Favoritos”.
* **Menu de opções do livro**: redefinir leitura, marcar/desmarcar favorito, apagar PDF.

---

## 📁 Estrutura do Projeto

```
/meu-app
├── /android
├── /assets
├── /node_modules
├── /src
│   ├── /components
│   │   ├── BookCover.tsx
│   │   ├── BookMenu.tsx
│   │   ├── MenuTypeBook.tsx
│   │   └── ProgressBar.tsx
│   ├── /context
│   │   └── LibraryContext.tsx
│   ├── /navigation
│   │   └── TabNavigator.tsx
│   ├── /screens
│   │   ├── /libraryScreen
│   │   │   ├── LibraryScreen.tsx
│   │   │   └── styles.tsx
│   │   ├── /pdfScreen
│   │   │   ├── PdfScreen.tsx
│   │   │   └── styles.tsx
│   │   └── /settingsScreen
│   │       ├── SettingsScreen.tsx
│   │       └── styles.tsx
├── .gitignore
├── app.json
├── App.tsx
├── index.ts
├── package.json
├── package-lock.json
└── tsconfig.json

```

---

## ⚙️ Tecnologias Utilizadas

* **React Native** – framework para apps móveis nativos.

* **TypeScript** – tipagem estática para maior segurança.

* **Expo** – ambiente de desenvolvimento rápido para React Native.

* **React Navigation** – navegação entre telas.

* **React Native PDF** – exibição e leitura de arquivos PDF.

* **Expo Document Picker** – seleção de arquivos PDF do dispositivo.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd meu-app
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o projeto no Expo:

```bash
npx expo start
# ou
yarn start
```

4. Abra no dispositivo ou emulador (Android/iOS).

---

## 🔧 Uso

* Na tela **Estante de Livros**, toque em **“Estante de livros”** para abrir as opções de exibição.
* Use o botão **⁝** para adicionar PDFs do dispositivo.
* Toque nas **capas dos livros** para abrir o PDF no leitor.
* Marque livros como **favoritos** para filtrá-los facilmente na aba correspondente.

---

📝 Próximas Melhorias

* Temas personalizados (modo claro/escuro e estilos customizáveis).

* Organização por arrastar e soltar os livros na estante.

* Estatísticas de leitura (tempo de leitura, progresso geral, livros finalizados).

* Mais opções de layout da estante (tamanho das capas, espaçamento, modo de visualização).

---



