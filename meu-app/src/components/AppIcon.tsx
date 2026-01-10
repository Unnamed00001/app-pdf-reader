import { Ionicons, MaterialIcons, Feather, AntDesign, Fontisto} from "@expo/vector-icons";

type IconFamily = "Ionicons" | "MaterialIcons" | "Feather" | "AntDesign" | "Fontisto";

type AppIconProps = {
  family?: IconFamily;
  name: any;
  size?: number;
  color?: string;
};

export function AppIcon({
  family = "Ionicons",
  name,
  size = 24,
  color = "#000",
  
}: AppIconProps) {
  const Icon = {
    Ionicons,
    MaterialIcons,
    Feather,
    AntDesign,
    Fontisto,
  }[family];

  return <Icon name={name} size={size} color={color} />;
}
