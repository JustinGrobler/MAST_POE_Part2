import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [dishTitle, setDishTitle] = useState('');
  const [dishDetails, setDishDetails] = useState('');
  const [dishCategory, setDishCategory] = useState('Starters');
  const [dishCost, setDishCost] = useState('');
  const [dishList, setDishList] = useState<any[]>([]);

  const addDishToMenu = () => {
    const newDish = { title: dishTitle, details: dishDetails, category: dishCategory, cost: dishCost };
    setDishList([...dishList, newDish]);

    setDishTitle('');
    setDishDetails('');
    setDishCategory('Starters');
    setDishCost('');
    Alert.alert('Dish added successfully');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.heading}>Christoffels Private Menu</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Dish Title:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter dish title"
            onChangeText={setDishTitle}
            value={dishTitle}
          />

          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter description"
            onChangeText={setDishDetails}
            value={dishDetails}
          />

          <Text style={styles.label}>Category:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={dishCategory}
              onValueChange={setDishCategory}
              style={styles.picker}
            >
              <Picker.Item label="Starters" value="Starters" />
              <Picker.Item label="Mains" value="Mains" />
              <Picker.Item label="Desserts" value="Desserts" />
            </Picker>
          </View>

          <Text style={styles.label}>Cost:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter cost"
            keyboardType="numeric"
            onChangeText={setDishCost}
            value={dishCost}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Add Dish"
            color="#6B8E23"
            onPress={addDishToMenu}
          />
        </View>

        <View style={styles.menuList}>
          <Text style={styles.menuTitle}>Total Dishes: {dishList.length}</Text>
          {dishList.map((dish, index) => (
            <View key={index} style={styles.dishItem}>
              <Text style={styles.dishText}>
                <Text style={styles.dishTitle}>{dish.title}</Text> - {dish.details} ({dish.category}) - R{dish.cost}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#6B8E23',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    marginBottom: 20,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 15,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 20,
  },
  menuList: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  dishItem: {
    backgroundColor: '#e7f3fe',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '100%',
  },
  dishText: {
    fontSize: 16,
    color: '#333',
  },
  dishTitle: {
    fontWeight: 'bold',
  },
});
