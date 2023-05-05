import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCF00',
    color: '#F5FCFF',
  },title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
     color: '#000',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#FCFF00',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  startButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#031428',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
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
    color: '#000',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});