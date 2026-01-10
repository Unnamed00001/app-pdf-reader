import { View, ActivityIndicator } from "react-native";
import Pdf from "react-native-pdf";

type Props = {
  pdfUri: string;
  width?: number;
  height?: number;
};

export function BookCover({ pdfUri, width, height }: Props) {
  
  return (
    <View
      style={{
        width,
        height,
        borderRadius: 8,
        borderColor: "#000",
        borderWidth: 0.5,
        overflow: "hidden",
      }}
    >
      <Pdf
        source={{ uri: pdfUri }}
        page={1}
        singlePage
        scale={1.0}
        enablePaging={false}
        style={{ flex: 1 }}
        renderActivityIndicator={() => <ActivityIndicator />}
      />
    </View>
  );
}
