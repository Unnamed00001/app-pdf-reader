import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2F2F",
  },
  topBar: {
    height: 50,
    marginBottom: 14,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  shelfButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: '2%',
    height: 40, 
    width: '70%', 
    alignSelf: 'center', 
    backgroundColor: '#D9D9D9', 
    borderRadius: 8,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  buttonPDF: {
    marginLeft: '2%',
    height: 40, 
    width: '10%', 
    alignSelf: 'center', 
    justifyContent: 'center',
    backgroundColor: '#D9D9D9', 
    borderRadius: 8,
  },
  button: {

    height: 40, 
    width: '10%', 
    alignItems: 'center',
    alignSelf: 'center', 
    justifyContent: 'center',
    backgroundColor: '#D9D9D9', 
    borderRadius: 8,
  },
  textButtonConfig: {
    fontSize: 24,
    color: 'black', 
    textAlign: 'center', 
    lineHeight: 40,
  },
  scroll: {
    width: "100%",
    marginBottom: 60,
  },
  booksContainer: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
  },
  rowContainer: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bookWrapper: {
    alignItems: "center",
  },
  shelfDivider: {
    width: "100%",
    height: 10,
    backgroundColor: "#2F2F2F",
    borderRadius: 6,
    marginBottom: 16,
    elevation: 8,
  },
});