import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { useLibrary } from "../context/LibraryContext";

type Props = {
  bookId: string;
};

export function BookMenu({ bookId }: Props) {
  const [visible, setVisible] = useState(false);
  const { removeBook, updateBook } = useLibrary();

  function handleDelete() {
    removeBook(bookId);
    setVisible(false);
  }

  function handleReset() {
    updateBook(bookId, { currentPage: 1 });
    setVisible(false);
  }

  return (
    <View style={{ position: "absolute", top: 3, right: 3, zIndex: 10 }}>
      
      {/* Botão 3 pontos */}
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={{ color: "#000000", fontSize: 25 }}>⁝</Text>
      </TouchableOpacity>

      {/* Modal do menu */}
      <Modal transparent visible={visible} animationType="fade">
        <Pressable
          onPress={() => setVisible(false)}
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{
            width: 200,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10
          }}>
            
            <TouchableOpacity onPress={handleReset} style={{ padding: 10 }}>
              <Text style={{ fontSize: 16 }}>Zerar leitura</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDelete} style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, color: "red" }}>Apagar PDF</Text>
            </TouchableOpacity>

          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
