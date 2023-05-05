import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ab1111',
    color: '#F2E852',
  },title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
     color: '#F2E852',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#615d5d',
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#e81515',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2E852',
  },
  startButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#D92323',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2E852',
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
    color: '#F2E852',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});