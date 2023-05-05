import React, { useState, useContext, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ThemeContext } from '../theme-handler/context'
import themes from '../theme-handler/Themes'
import icons from '../theme-handler/ThemeIcon'
import PersonalizedText from '../components/PersonalizedText'

const StartScreen = ({ navigation }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [currentTheme, setCurrentTheme] = useState('light');
  const { setTheme } = useContext(ThemeContext);

  const handleStartGame = () => {
    navigation.navigate("Memory Game", { difficulty, currentTheme });
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);
  const handleThemeChange = (theme) => {
    setTheme(theme);
    setCurrentTheme(theme);
  }

  return (
    <View style={themes[currentTheme].container}>
      <Text style={themes[currentTheme].title}>Select the difficult:</Text>
      <View style={themes[currentTheme].buttonsContainer}>
        <TouchableOpacity
          style={[themes[currentTheme].button, difficulty === 'easy' && themes[currentTheme].activeButton]}
          onPress={() => setDifficulty('easy')}
        >
          <Text style={themes[currentTheme].buttonText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[themes[currentTheme].button, difficulty === 'medium' && themes[currentTheme].activeButton]}
          onPress={() => setDifficulty('medium')}
        >
          <Text style={themes[currentTheme].buttonText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[themes[currentTheme].button, difficulty === 'hard' && themes[currentTheme].activeButton]}
          onPress={() => setDifficulty('hard')}
        >
          <Text style={themes[currentTheme].buttonText}>Hard</Text>
        </TouchableOpacity>
      </View>

      <Text style={themes[currentTheme].title}>Select the theme:</Text>
      <View style={themes[currentTheme].buttonsContainer}>
        {Object.keys(themes).map((themeKey, index) => (
          <TouchableOpacity
            key={themeKey}
            style={[themes[currentTheme].button, currentTheme === themeKey && themes[currentTheme].activeButton]}
            onPress={() => handleThemeChange(themeKey)}
          >
            <Image style={{ width: 30, height: 30, resizeMode: "cover" }}
              source={icons[index]}

            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={themes[currentTheme].title}>{PersonalizedText[0][currentTheme]}</Text>
      <TouchableOpacity style={themes[currentTheme].startButton} onPress={handleStartGame}>
        <Text style={themes[currentTheme].startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartScreen;
