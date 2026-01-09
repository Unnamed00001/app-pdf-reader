import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2F2F',
  },
  button: {
    marginBottom: 20, 
    marginTop: '8%', 
    height: 40, 
    width: '95%', 
    alignSelf: 'center', 
    justifyContent: 'center',
    backgroundColor: '#D9D9D9', 
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textButton: {
    color: 'black', 
    textAlign: 'left', 
    lineHeight: 40, 
    paddingLeft: 10 
  },
});