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
          <Text style={styles.title}>Tipo de exibição</Text>

          {/* Botões */}
          <TouchableOpacity
            style={[styles.button, tab === "all" && styles.activeAll]}
            onPress={() => {
              setTab("all");
              onClose();
            }}
          >
            <Text style={tab === "all" ? styles.activeText : styles.text}>Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, tab === "fav" && styles.activeFav]}
            onPress={() => {
              setTab("fav");
              onClose();
            }}
          >
            <Text style={tab === "fav" ? styles.activeText : styles.text}>⭐ Favoritos</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 220,
    backgroundColor: "#2F2F2F",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    color: "#FFF",
    marginBottom: 12,
  },
  button: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 6,
    backgroundColor: "#DDD",
    alignItems: "center",
  },
  activeAll: {
    backgroundColor: "#D9D9D9",
  },
  activeFav: {
    backgroundColor: "#FFD700",
  },
  text: {
    color: "#000",
    fontWeight: "600",
  },
  activeText: {
    color: "#000",
    fontWeight: "700",
  },
});
