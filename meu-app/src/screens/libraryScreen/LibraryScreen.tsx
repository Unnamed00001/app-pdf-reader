import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { useLibrary } from "../../context/LibraryContext";
import { BookCover } from "../../components/BookCover";
import { ProgressBar } from "../../components/ProgressBar";
import { BookMenu } from "../../components/BookMenu";
import { MenuTypeBook } from "../../components/MenuTypeBook";
import { styles } from "./styles";
import * as DocumentPicker from "expo-document-picker";
import { AppIcon } from "../../components/AppIcon";
import { KebabMenu } from "../../components/KebabMenu";

export function LibraryScreen({ navigation }: any) {
  const { width } = Dimensions.get("window");

  const CONTAINER_WIDTH = width * 0.95;
  const PADDING = 12;
  const GAP = 10;
  const COLUMNS = 4;
  const ITEM_WIDTH = (CONTAINER_WIDTH - PADDING * 2 - GAP * (COLUMNS - 1)) / COLUMNS;
  const COVER_HEIGHT = ITEM_WIDTH * 1.45;

  const { books, addBook } = useLibrary();

  const [tab, setTab] = useState<"all" | "fav">("all");
  const [open, setOpen] = useState(false);

  const filteredBooks = tab === "fav" ? books.filter(b => b.isFavorite) : books;
  const [menuOpen, setMenuOpen] = useState(false);

  async  function pickPDF() {
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
        isFavorite: false,
      });
    }
  }

  // Quebra os livros em fileiras de 4
  const rows: any[][] = [];
  for (let i = 0; i < filteredBooks.length; i += 4) {
    rows.push(filteredBooks.slice(i, i + 4));
  }

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.topBar}>
        
        <TouchableOpacity style={styles.shelfButton}>
          <Text style={styles.textButton}>Estante de livros</Text>
          <MenuTypeBook
            visible={open}
            onClose={() => setOpen(false)}
            tab={tab}
            setTab={setTab}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOpen(true)} style={styles.button}>
          <AppIcon family="Fontisto" name="favorite" size={22} color="#2F2F2F" />
        </TouchableOpacity>

        <KebabMenu
          onAddPdf={() => pickPDF()}
          onOpenSettings={() => navigation.navigate("Configurações")}
        />
      </View>

      {/* Estante */}
      <ScrollView style={styles.scroll}>
        <View style={[styles.booksContainer, { padding: PADDING }]}>
          {tab === "fav" && filteredBooks.length === 0 && (
            <Text style={styles.emptyText}>Nenhum favorito ainda ⭐</Text>
          )}

          {rows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {/* FILEIRA */}
              <View style={styles.row}>
                {row.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[styles.bookWrapper, { width: ITEM_WIDTH }]}
                    onPress={() =>
                      navigation.navigate("Leitor", {
                        pdfUri: item.uri,
                        bookId: item.id,
                      })
                    }
                  >
                    <BookMenu bookId={item.id} />
                    <BookCover pdfUri={item.uri} width={ITEM_WIDTH} height={COVER_HEIGHT} />
                    <ProgressBar current={item.currentPage} total={item.totalPages} />
                  </TouchableOpacity>
                ))}
              </View>

              {/* PRATELEIRA */}
              {rowIndex !== rows.length - 1 && <View style={styles.shelfDivider} />}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
