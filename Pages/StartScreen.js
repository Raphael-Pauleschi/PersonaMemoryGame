import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './Style'

const StartScreen = ({navigation}) =>{
  const [difficulty, setDifficulty] = useState('easy');

  const handleStartGame = () =>{
    navigation.navigate("Memory Game", difficulty)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Select the difficult:</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, difficulty === 'easy' && styles.activeButton]}
          onPress={() => setDifficulty('easy')}
        >
          <Text style={styles.buttonText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, difficulty === 'medium' && styles.activeButton]}
          onPress={() => setDifficulty('medium')}
        >
          <Text style={styles.buttonText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, difficulty === 'hard' && styles.activeButton]}
          onPress={() => setDifficulty('hard')}
        >
          <Text style={styles.buttonText}>Hard</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartScreen;