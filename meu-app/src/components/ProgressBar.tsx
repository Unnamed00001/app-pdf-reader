import { View } from "react-native";

type Props = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: Props) {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <View style={{ 
      height: 6,
      width: "100%", 
      backgroundColor: "#FFFFFF",
      borderColor: "#000", 
      borderWidth: 0.5, 
      borderRadius: 3,
      marginTop: 2,

    }}>
      <View style={{
        borderRadius: 3,
        height: 5.5,
        width: `${progress}%`,
        backgroundColor: "#000000"
      }} />
    </View>
  );
}
