import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import { Button, Dialog } from '@rneui/themed';
import avaliationMessage from './AvaliationText';

let value = 1;
const AvaliationPopup = ({ difficulty, moves, time }) => {
  const [visible, setVisible] = useState(true);
  console.log(moves)
  console.log(difficulty)
  const toggleDialog = () => {
    setVisible(!visible);
  };

  switch (difficulty) {
    case 'easy':
      if (moves <= 17 && time <= 45) value = 4;
      else if (moves <= 25 && time <= 100) value = 3;
      else if (moves <= 40 && time <= 150) value = 2;
      else if (moves <= 60) value = 1;
      else value = 0;
      break;
    case 'medium':
    if (moves <= 23 && time <= 60) value = 9;
      else if (moves <= 23 && time <= 120) value = 8;
      else if (moves <= 45 && time <= 240) value = 7;
      else if (moves <= 60) value = 6;
      else value = 5;
      break;
    case 'hard':
      if (moves <= 41 && time <= 200) value = 13;
      else if (moves <= 70 && time <= 300) value = 12;
      else if (moves <= 100 && time <= 400) value = 11;
      else value = 10;
      break;
  }

  const PopUp = () => {
    return (
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
      <View>
        <Card
          image={avaliationMessage[value].img}
        />
        <Text>{avaliationMessage[value].text}</Text>
        </View>
        <Dialog.Actions>
          <Dialog.Button title="Replay" onPress={() => console.log('test1')} />
          <Dialog.Button title="Go back" onPress={() => console.log('test2')} />
        </Dialog.Actions>
      </Dialog>
    );
  };

  return (
    <>
      <PopUp />
    </>
  );
};

export default AvaliationPopup;
