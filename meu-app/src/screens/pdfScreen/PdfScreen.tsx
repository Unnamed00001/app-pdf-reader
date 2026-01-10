import React, { useRef, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Pdf from "react-native-pdf";
import { useLibrary } from "../../context/LibraryContext";
import { styles } from "./styles";

const { width, height } = Dimensions.get("window");

export function PdfScreen({ route }: any) {
  const { pdfUri, bookId, lastPage = 1 } = route.params || {};
  const { updateBook } = useLibrary();

  const pdfRef = useRef<any>(null);
  const [pages, setPages] = useState(0);

  if (!pdfUri) {
    return (
      <View style={styles.center}>
        <Text>Nenhum PDF aberto</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pdf
        ref={pdfRef}
        source={{ uri: pdfUri, cache: true }}
        style={{ width, height, backgroundColor: "#2F2F2F" }}
        spacing={8}
        enablePaging
        fitPolicy={2}
        onLoadComplete={(total) => {
          setPages(total);
          pdfRef.current?.setPage(lastPage);
          if (bookId) updateBook(bookId, { totalPages: total });
        }}
        onPageChanged={(page) => {
          if (bookId) updateBook(bookId, { currentPage: page });
        }}
      />
    </View>
  );
}
