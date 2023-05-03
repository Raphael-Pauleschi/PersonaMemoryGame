import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Card from '../components/Card';
import styles from './Style';
import images from '../components/CardContent';

const GameScreen = ({ route, navigation }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);

 useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);
  useEffect(() => {
    const newCards = [];
    let cardQuantity = 0;
    switch (route.params) {
      case 'easy':
        cardQuantity = images.length / 3;
        break;
      case 'medium':
        cardQuantity = images.length / 2;
        break;
      case 'hard':
        cardQuantity = images.length;
        break;
    }
    for (let i = 0; i < cardQuantity; i++) {
      newCards.push({ id: i * 2, image: images[i], visible: false });
      newCards.push({ id: i * 2 + 1, image: images[i], visible: false });
    }

    shuffleCards(newCards);
    setCards(newCards);
  }, [route.params]);

  useEffect(() => {
    if (gameOver) {
      alert(`Parabéns! Você ganhou em ${moves} jogadas e ${time} segundos.`);
    }
  }, [gameOver]);

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
    <View style={styles.container}>
      <View style={styles.cards}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            onPress={() => !card.visible && !gameOver && handleCardPress(card)}
            activeOpacity={0.8}>
            <Card
              image={
                card.visible
                  ? card.image
                  : require('../assets/cards/card_back.png')
              }
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.footer}>
        Jogadas: {moves} | Tempo: {time} s
      </Text>
    </View>
  );
};

export default GameScreen;
