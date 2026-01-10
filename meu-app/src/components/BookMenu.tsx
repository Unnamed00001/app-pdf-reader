import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable, Dimensions } from "react-native";
import { useLibrary } from "../context/LibraryContext";
import { BookCover } from "./BookCover";

type Props = {
  bookId: string;
};

export function BookMenu({ bookId }: Props) {
  const [visible, setVisible] = useState(false);
  const { removeBook, updateBook, books, toggleFavorite } = useLibrary();

  const book = books.find(b => b.id === bookId);

  const { width } = Dimensions.get("window");
  const COVER_WIDTH = width * 0.35;
  const COVER_HEIGHT = COVER_WIDTH * 1.45;

  function handleDelete() {
    removeBook(bookId);
    setVisible(false);
  }

  function handleReset() {
    updateBook(bookId, { currentPage: 1 });
    setVisible(false);
  }

  function handleFavorite() {
    toggleFavorite(bookId);
    setVisible(false); // opcional
  }

  return (
    <View style={{ position: "absolute", top: 6, right: 0, zIndex: 10 }}>
      
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={{ height: 30, width: 20, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#000000", fontSize: 25 }}>⁝</Text>
        </View>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        
        {/* FUNDO */}
        <Pressable
          onPress={() => setVisible(false)}
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          {/* CARD */}
          <Pressable
            onPress={() => {}}
            style={{
              width: "80%",
              backgroundColor: "#2F2F2F",
              borderRadius: 14,
              padding: 14,
              alignItems: "center",
              elevation: 12,
            }}
          >
            {/* CAPA */}
            {book?.uri && (
              <BookCover
                pdfUri={book.uri}
                width={COVER_WIDTH}
                height={COVER_HEIGHT}
              />
            )}

            {/* PROGRESSO */}
            {book && (
              <Text style={{ marginTop: 10, fontSize: 14, color: "#FFFFFF" }}>
                Página {book.currentPage} de {book.totalPages || "?"}
              </Text>
            )}

            {/* BOTÕES */}
            <View style={{ width: "100%", marginTop: 14 }}>
              
              <TouchableOpacity
                onPress={handleReset}
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: 8,
                  padding: 12,
                  marginBottom: 10
                }}
              >
                <Text style={{ fontSize: 16, color: "#000", textAlign: "center" }}>
                  Redefinir leitura
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleFavorite}
                style={{
                  backgroundColor: book?.isFavorite ? "#FFD700" : "#D9D9D9",
                  borderRadius: 8,
                  padding: 12,
                  marginBottom: 10
                }}
              >
                <Text style={{ 
                  fontSize: 16, 
                  color: "#000", 
                  textAlign: "center",
                  fontWeight: "600"
                }}>
                  {book?.isFavorite ? "Remover dos favoritos ⭐" : "Marcar como favorito ⭐"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleDelete}
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: 8,
                  padding: 12,
                }}
              >
                <Text style={{ fontSize: 16, color: "red", textAlign: "center" }}>
                  Apagar PDF
                </Text>
              </TouchableOpacity>

            </View>
          </Pressable>

        </Pressable>
      </Modal>
    </View>
  );
}
