import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F61A6',
    color: '#000',
  },
   popup: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F61A6',
    color: '#000',
  },title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
     color: '#F5FCFF',
  },
   text:{
 color: '#FFF',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#303E8C',
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#8AB5BF',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D7D7D7',
  },
  startButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F2E5BD',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
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