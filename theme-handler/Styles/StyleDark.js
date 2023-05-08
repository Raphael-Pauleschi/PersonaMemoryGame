import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C2C2C',
    color: '#F5FCFF',
  },
    popup: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C2C2C',
    color: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#F5FCFF',
  },
  text: {
    color: '#F5FCFF',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#494949',
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#031428',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D7D7D7',
  },
  startButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#031428',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D7D7D7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  footer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
