import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import AvaliationPopup from '../components/AvaliationPopup';
import images from '../components/CardContent';
import imagesP5 from '../components/CardContentPhantom';
import themes from '../theme-handler/Themes';

const GameScreen = ({ route, navigation }) => {
  const [showAvaliationPopup, setShowAvaliationPopup] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const newCards = [];
    let cardQuantity = 0;
    cardQuantity =
      route.params.currentTheme == 'phantom' ? imagesP5.length : images.length;
    switch (route.params.difficulty) {
      case 'easy':
        cardQuantity = cardQuantity / 3;
        break;
      case 'medium':
        cardQuantity = cardQuantity / 2;
        break;
    }
    for (let i = 0; i < cardQuantity; i++) {
      newCards.push({
        id: i * 2,
        image: route.params.currentTheme == 'phantom' ? imagesP5[i] : images[i],
        visible: false,
      });
      newCards.push({
        id: i * 2 + 1,
        image: route.params.currentTheme == 'phantom' ? imagesP5[i] : images[i],
        visible: false,
      });
    }

    shuffleCards(newCards);
    setCards(newCards);
  }, [route.params]);

  useEffect(() => {
    let timer;
    if (!gameOver) {
      timer = setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
    else {
      setShowAvaliationPopup(true);
    }
    return () => clearTimeout(timer);
  }, [time, gameOver]);

  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  const handleCardPress = (card) => {
    if (selectedCards.length < 2) {
      const newCards = [...cards];
      const index = newCards.findIndex((c) => c.id === card.id);
      newCards[index] = { ...card, visible: true };
      setCards(newCards);
      setSelectedCards([...selectedCards, card]);
      if (selectedCards.length === 1) {
        setMoves(moves + 1);
        if (selectedCards[0].image === card.image) {
          setSelectedCards([]);
          if (newCards.every((c) => c.visible)) {
            setGameOver(true);
          }
        } else {
          setTimeout(() => {
            const newCards = [...cards];
            const index1 = newCards.findIndex(
              (c) => c.id === selectedCards[0].id
            );
            const index2 = newCards.findIndex((c) => c.id === card.id);
            newCards[index1] = { ...selectedCards[0], visible: false };
            newCards[index2] = { ...card, visible: false };
            setCards(newCards);
            setSelectedCards([]);
          }, 1000);
        }
      }
    }
  };

  return (
    <View style={themes[route.params.currentTheme].container}>
      {showAvaliationPopup && (
        <AvaliationPopup
          difficulty={route.params.difficulty}
          moves={moves}
          time={time}
        />
      )}
      <View style={themes[route.params.currentTheme].cards}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            onPress={() => !card.visible && !gameOver && handleCardPress(card)}
            activeOpacity={0.8}>
            <Card
              image={
                card.visible
                  ? card.image
                  : route.params.currentTheme == 'phantom'
                  ? require('../assets/cards/p5/card_back.png')
                  : require('../assets/cards/card_back.png')
              }
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={themes[route.params.currentTheme].footer}>
        Moves: {moves} | Time: {time} s
      </Text>
    </View>
  );
};

export default GameScreen;
