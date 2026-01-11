import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable, StyleSheet } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  tab: "all" | "fav";
  setTab: (tab: "all" | "fav") => void;
};

export function MenuTypeBook({ visible, onClose, tab, setTab }: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      {/* Fundo escuro */}
      <Pressable style={styles.overlay} onPress={onClose}>
        {/* Card */}
        <Pressable style={styles.card} onPress={() => {}}>
          {/*<Text style={styles.title}>Tipo de exibição</Text>

          {/* Botões */}
          <TouchableOpacity
            style={[styles.button, tab === "all" && styles.activeAll]}
            onPress={() => {
              setTab("all");
              onClose();
            }}
          >
            <Text style={tab === "all" ? styles.activeText : styles.text}>⊞</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, tab === "fav" && styles.activeFav]}
            onPress={() => {
              setTab("fav");
              onClose();
            }}
          >
            <Text style={tab === "fav" ? styles.activeText : styles.text}>❤</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    paddingTop: 70,
    paddingRight: 51,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  card: {
    width: 50,
    backgroundColor: "#2F2F2F",
    borderRadius: 12,
    padding: 5,
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 8,
    color: "#FFF",
    marginBottom: 12,
  },
  button: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 2,
    backgroundColor: "#DDD",
    alignItems: "center",
  },
  activeAll: {
    backgroundColor: "#9f9f9f",
  },
  activeFav: {
    backgroundColor: "#9f9f9f",
  },
  text: {
    color: "#000000",
    fontWeight: "600",
  },
  activeText: {
    color: "#000000",
    fontWeight: "700",
  },
});
