import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import uuid from "react-native-uuid"

const Card = ({cid, word, definition}) => {
  // Create a card object here
  const cardObj = {
    id: cid,
    cardWord: word,
    cardDef: definition
  }

  return (
    <View style={styles.card}>
      <Text style={styles.word}>{cardObj.cardWord}</Text>
      <Text style={styles.definition}>{cardObj.cardDef}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    word: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    definition: {
      fontSize: 16,
    },
  });

export default Card