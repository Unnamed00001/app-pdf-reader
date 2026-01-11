import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";

type Props = {
  onAddPdf: () => void;
  onOpenSettings: () => void;
};

export function KebabMenu({ onAddPdf, onOpenSettings }: Props) {
  const [visible, setVisible] = useState(false);

  function closeMenu() {
    setVisible(false);
  }

  function handleAddPdf() {
    closeMenu();
    onAddPdf();
  }

  function handleSettings() {
    closeMenu();
    onOpenSettings();
  }

  function handleExtra1() {
    closeMenu();
    console.log("Extra 1");
  }

  function handleExtra2() {
    closeMenu();
    console.log("Extra 2");
  }

  return (
    <View 
    style={{ height: 40, 
      width: '10%', 
      alignItems: 'center',
      alignSelf: 'center', 
      justifyContent: 'center',
      backgroundColor: '#D9D9D9', 
      borderRadius: 8,
      marginLeft: '2%',
    }}>

      {/* BOTÃO KEBAB */}
      <TouchableOpacity
        style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}} 
        onPress={() => setVisible(true)}
        
      >
        <Text style={{ fontSize: 28 }}>⁝</Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal transparent visible={visible} animationType="fade">

        {/* FUNDO */}
        <Pressable
          onPress={closeMenu}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.6)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          {/* CARD */}
          <Pressable
            onPress={() => {}}
            style={{
              width: "75%",
              backgroundColor: "#2F2F2F",
              borderRadius: 14,
              padding: 16,
            }}
          >

            <MenuButton text="➕ Adicionar PDF" onPress={handleAddPdf} />
            <MenuButton text="⚙️ Configurações" onPress={handleSettings} />
            <MenuButton text="⭐ Extra 1" onPress={handleExtra1} />
            <MenuButton text="ℹ️ Extra 2" onPress={handleExtra2} />

          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

function MenuButton({ text, onPress }: { text: string; onPress: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#D9D9D9",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: "#000",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
