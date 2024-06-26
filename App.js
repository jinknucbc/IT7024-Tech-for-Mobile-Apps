import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';
import CardList from './CardList';


export default function App() {

  const [cards, setCards] = useState([])
  // "cards" is an array of cards, so this itself doesn't need to have any data.

  const addCard = (newCard) => {
    // The new card being received here is just being added to the array.
    
    setCards([...cards, newCard])
  }

  const updateCard = (id, cardUpdated) => {
    setCards(cards.map((card) => (card.id === id ? cardUpdated : card)))
  }
// Card deletion would have to be done here, because this is the one with access
// to cards array.
  const deleteCard = (id, index) => {
    setCards(cards.filter((card, idx) => idx !== index))
  }

  return (
    <>
        <View style={styles.container}>
          <CardList
            cards={cards} 
            onAdd={addCard}
            onDelete={deleteCard}
          />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
});
