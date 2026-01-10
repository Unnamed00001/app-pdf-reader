import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

type Book = {
  id: string;
  name: string;
  uri: string;
  totalPages: number;
  currentPage: number;
  addedAt: number;
  isFavorite: boolean;
};

type LibraryContextType = {
  books: Book[];
  addBook: (book: Book) => void;
  updateBook: (id: string, data: Partial<Book>) => void;
  removeBook: (id: string) => void;
  reorderBooks: (books: Book[]) => void;
  toggleFavorite: (id: string) => void; // ⭐ NOVO
};

const LibraryContext = createContext({} as LibraryContextType);

export function LibraryProvider({ children }: any) {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("BOOKS", JSON.stringify(books));
  }, [books]);

  async function loadBooks() {
    try {
      const data = await AsyncStorage.getItem("BOOKS");
      if (data) {
        const parsed = JSON.parse(data);

        // 🔥 garante compatibilidade com livros antigos
        const fixed = parsed.map((b: Book) => ({
          ...b,
          isFavorite: b.isFavorite ?? false,
        }));

        setBooks(fixed);
      }
    } catch (e) {
      console.log("Erro ao carregar livros", e);
    }
  }

  function addBook(book: Book) {
    setBooks((old) => [...old, book]);
  }

  function updateBook(id: string, data: Partial<Book>) {
    setBooks((old) =>
      old.map((b) => (b.id === id ? { ...b, ...data } : b))
    );
  }

  function removeBook(id: string) {
    setBooks((old) => old.filter((b) => b.id !== id));
  }

  function reorderBooks(newOrder: Book[]) {
    setBooks(newOrder);
  }

  // ⭐ FUNÇÃO DE FAVORITO
  function toggleFavorite(id: string) {
    setBooks((old) =>
      old.map((b) =>
        b.id === id ? { ...b, isFavorite: !b.isFavorite } : b
      )
    );
  }

  return (
    <LibraryContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        removeBook,
        reorderBooks,
        toggleFavorite, // ⭐ EXPORTANDO
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  return useContext(LibraryContext);
}
