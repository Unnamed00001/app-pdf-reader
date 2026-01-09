import { View, ActivityIndicator } from "react-native";
import Pdf from "react-native-pdf";

type Props = {
  pdfUri: string;
};

export function BookCover({ pdfUri }: Props) {
  return (
    <View style={{ 
      width: 85, 
      height: 120, 
      borderRadius: 6, 
      borderColor: "#000", 
      borderWidth: 0.5, 
      overflow: "hidden" }}>
      <Pdf
        source={{ uri: pdfUri }}
        page={1}           // mostra só a primeira página
        singlePage         // evita scroll horizontal/vertical
        scale={1.0}        // escala da página
        enablePaging={false}
        style={{ flex: 1 }}
        renderActivityIndicator={() => <ActivityIndicator />}
      />
    </View>
  );
}
