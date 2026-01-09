import { View, Dimensions, Text, ActivityIndicator } from "react-native";
import Pdf from "react-native-pdf";
import { useLibrary } from "../../context/LibraryContext";

export function PdfScreen({ route }: any) {
  const { pdfUri, bookId } = route.params || {};
  const { updateBook } = useLibrary();

  if (!pdfUri) {
    return (
      <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
        <Text>Nenhum PDF aberto</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Pdf
        source={{ uri: pdfUri, cache: true }}
        style={{ flex: 1, width: Dimensions.get("window").width }}
        
        onLoadComplete={(pages) => {
          if (bookId) updateBook(bookId, { totalPages: pages });
        }}
        
        onPageChanged={(page) => {
          if (bookId) updateBook(bookId, { currentPage: page });
        }}

        renderActivityIndicator={() => (
          <ActivityIndicator size="large" color="#007BFF" style={{ flex: 1 }} />
        )}

        onError={(error) => console.log("Erro ao abrir PDF:", error)}
      />
    </View>
  );
}
