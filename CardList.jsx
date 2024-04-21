import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Card from './Card'
import uuid from "react-native-uuid"

const CardList = ({cards, onUpdate, onDelete, onAdd}) => {

  const [cardWord, setCardWord] = useState("")
  const [cardDef, setCardDef] = useState("")

  const [editedWord, setEditedWord] = useState('')
  const [editedDef, setEditedDef] = useState('')

  const handleAdd = () => {
    console.log("Button pressed")
    const uid = uuid.v4()
    onAdd(
      {uid, cardWord, cardDef}
    )
    setCardWord("")
    setCardDef("")
  }

  const handleDelete = (cardId, cardIndex) => {
    // This is just the part that will call on the actual delete function which is being passed from the "App" component.
    onDelete(cardId, cardIndex)
    // So, now the unique id of the card is passed on to "deleteCard" function in "App" component through its alias "OnDelete" here.
  }

  const CWord = ({cardWord}) => (
    <View>
      <Text>{cardWord}</Text>
    </View>
  )

  const CDef = ({cardDef}) => (
    <View>
      <Text>{cardDef}</Text>
    </View>
  )

  const CardItem = ({cardWord, cardDef}) => (
    <View>
      <Text>
        {cardWord}
      </Text>
      <Text>
        {cardDef}
      </Text>
      {/* <TouchableOpacity style={styles.deleteButton}><Text style={styles.deleteButtonText}>Delete</Text></TouchableOpacity> */}
    </View>
  )

  return (
    <ScrollView>
      <View>
        <TextInput style={{backgroundColor: "#fff", height: 100, width: 100, borderColor: 'red', borderWidth: 2}} 
          onChangeText={(e) => {setCardWord(e)}} value={cardWord}
        />
        <TextInput style={{backgroundColor: "#fff", height: 100, width: 100, borderColor: 'red', borderWidth: 2}} 
          onChangeText={(e) => {setCardDef(e)}} value={cardDef}
        />
        <TouchableOpacity onPress={handleAdd} style={styles.addButton}><Text style={styles.addButtonText}>Add</Text></TouchableOpacity>
      </View>
      
{/* "cards" should be the list passed from "App.js", the one with id, word, def data */}
      <FlatList 
        style={styles.list}
        data={cards}
        renderItem={({item, index}) => <View>
          <CardItem 
            cardWord={item.cardWord} 
            cardDef={item.cardDef} 
          />
          <TouchableOpacity onPress={() => {handleDelete(item.uid, index)}} style={styles.deleteButton}><Text style={styles.deleteButtonText}>Delete</Text></TouchableOpacity>
        </View>}
        keyExtractor={item => item.uid}
      />
      
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#fff'
    },
    list: {
      paddingBottom: 20,
      display: "flex"
    },
    addButton: {
      backgroundColor: '#007bff',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 20,
      alignItems: 'center',
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginTop: 8,
      width: 50,
      height: 50
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 8,
        alignItems: 'center',
        display: "flex",
        flex: 1
      },
    deleteButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });

export default CardList