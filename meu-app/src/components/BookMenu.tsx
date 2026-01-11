import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable, Dimensions } from "react-native";
import { useLibrary } from "../context/LibraryContext";
import { BookCover } from "./BookCover";

type Props = {
  bookId: string;
};

export function BookMenu({ bookId }: Props) {
  const [visible, setVisible] = useState(false);
  const [confirmedDelete, setConfirmedDelete] = useState(false);
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
              width: "90%",
              backgroundColor: "#2F2F2F",
              borderRadius: 14,
              padding: 14,
              alignItems: "center",
              elevation: 12,
              flexDirection: "row",
            }}
          > 
            <View style={{ alignItems: "center", marginRight: 20 }}>
              {/* CAPA */}
              <BookCover
                pdfUri={book?.uri || ""}
                width={COVER_WIDTH}
                height={COVER_HEIGHT}
              />

              {/* PROGRESSO */}
              <View style={{ 
                alignItems: "center", 
                backgroundColor: "#ffffff", 
                padding: 8, 
                borderRadius: 8, 
                marginTop: 5, 
                width: COVER_WIDTH,
                height: 30,
                justifyContent: "center",

              }}>

                {book && (
                <Text style={{ 
                  marginTop: -2, 
                  fontSize: 12, 
                  color: "#000000",  
                  fontWeight: "bold",

                }}>
                  Página {book.currentPage} de {book.totalPages || "?"}
                </Text>
              )}
              </View>
            </View>
            
            {/* BOTÕES */}
            <View style={{ flex: 1, justifyContent: "space-around", height: COVER_HEIGHT }}>
              <TouchableOpacity
                onPress={handleFavorite}
                style={{ padding: 10, backgroundColor: "#4CAF50", borderRadius: 8 }}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center" }}>
                  {book?.isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleReset}
                style={{ padding: 10, backgroundColor: "#2196F3", borderRadius: 8 }}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center" }}>
                  Resetar Progresso
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => setConfirmedDelete(true)}
                style={{ padding: 10, backgroundColor: "#F44336", borderRadius: 8 }}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center" }}>
                  Deletar Livro
                </Text>
              </TouchableOpacity>
              
            </View>
            <Modal transparent visible={confirmedDelete} animationType="fade">
              
              {/* FUNDO */}
              <Pressable
                onPress={() => setConfirmedDelete(false)}
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
                    flexDirection: "column",
                  }}
                >
                  <Text style={{ color: "#FFFFFF", fontSize: 18, marginBottom: 20, textAlign: "center" }}>
                    Tem certeza que deseja deletar este livro?
                  </Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                    <TouchableOpacity
                      onPress={() => setConfirmedDelete(false)}
                      style={{ padding: 10, backgroundColor: "#2196F3", borderRadius: 8, flex: 1, marginRight: 5 }}
                    >
                      <Text style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center" }}>
                        Cancelar
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleDelete}
                      style={{ padding: 10, backgroundColor: "#F44336", borderRadius: 8, flex: 1, marginLeft: 5 }}
                    >
                      <Text style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center" }}>
                        Deletar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Pressable>

              </Pressable>
            </Modal>

            
          </Pressable>

        </Pressable>
      </Modal>
    </View>
  );
}
