import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

type Book = {
  id: string;
  name: string;
  uri: string;
  totalPages: number;
  currentPage: number;
  addedAt: number;
};

type LibraryContextType = {
  books: Book[];
  addBook: (book: Book) => void;
  updateBook: (id: string, data: Partial<Book>) => void;
  removeBook: (id: string) => void;
  reorderBooks: (books: Book[]) => void;
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
    if (data) setBooks(JSON.parse(data));
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

  return (
    <LibraryContext.Provider value={{
      books,
      addBook,
      updateBook,
      removeBook,
      reorderBooks
    }}>
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  return useContext(LibraryContext);
}