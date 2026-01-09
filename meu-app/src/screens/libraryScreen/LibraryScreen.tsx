import { View, Text, TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useLibrary } from "../../context/LibraryContext";
import { BookCover } from "../../components/BookCover";
import { ProgressBar } from "../../components/ProgressBar";
import { BookMenu } from "../../components/BookMenu";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";

export function LibraryScreen({ navigation }: any) {
  const { books, addBook } = useLibrary();

  // Função para escolher PDF
  async function pickPDF() {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: true,
    });

    if (!result.canceled && result.assets.length > 0) {
      const file = result.assets[0];

      addBook({
        id: Date.now().toString(),
        name: file.name ?? "PDF sem nome",
        uri: file.uri,
        currentPage: 1,
        totalPages: 0,
        addedAt: Date.now(),
      });
    }
  }

  return (
    <View style={styles.container}>
      {/* Botão adicionar PDF */}
      <TouchableOpacity onPress={pickPDF} style={styles.button}>
        <Text style={styles.textButton}>🔍</Text>
      </TouchableOpacity>


      {/* Grid de livros */}
      <ScrollView style={{ width: '100%', marginBottom: 80, borderRadius: 8 }}>
        <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
              width: '95%',
              alignSelf: 'center',
        }}
      >
        {books.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              width: 85,
              height: 135,
              backgroundColor: "#00000000",
              overflow: "hidden",
              marginBottom: 15,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 0.1,
              borderColor: "#00000000",
              paddingTop: 5,
              
            }}
            onPress={() =>
              navigation.navigate("Leitor", {
                pdfUri: item.uri,
                bookId: item.id,
              })
            }
          >
            {/* Menu de 3 pontos */}
            <BookMenu bookId={item.id} />

            {/* Capa do PDF */}
            <BookCover pdfUri={item.uri} />

            {/* Barra de progresso */}
            <ProgressBar current={item.currentPage} total={item.totalPages} />
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
      
    </View>
  );
}
