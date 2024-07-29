import React, { useState, useEffect } from 'react';
import uuid from 'react-native-uuid';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '../components/Input';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Upload() {
  const idKey = 'id';

  const getId = async () => {
    try {
      const storedId = await AsyncStorage.getItem(idKey);
      return storedId ? parseInt(storedId) : 0;
    } catch (error) {
      console.error(error);
    }
  };

  const setId = async (newId) => {
    try {
      await AsyncStorage.setItem(idKey, newId.toString());
    } catch (error) {
      console.error(error);
    }
  };


  const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
  };


  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [availability, setAvailability] = useState('');
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedBooks = await AsyncStorage.getItem('books');
        if (storedBooks) {
          const books = JSON.parse(storedBooks);
          setTitle(books[0].title ?? '');
          setAuthor(books[0].brand.author ?? '');
          setDescription(books[0].description ?? '');
          setDate(books[0].date ? new Date(books[0].date) : new Date());
          setAvailability(books[0].availability.quantity ?? '');
          setImage(books[0].image ?? null);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    console.log('State updated:', title, author, description, date, availability, image);
  }, [title, author, description, date, availability, image]);

  const handleUpload = async (books) => {
    try {
      const currentId = await getId();
      const newBook = {
        id: currentId + 1,
        image,
        title,
        description,
        brand: { author },
        price: 10.99,
        availability: { quantity: parseInt(availability) },
        date,
      };
      const storedBooks = await AsyncStorage.getItem('books');
      const updatedBooks = storedBooks ? JSON.parse(storedBooks) : [];
      updatedBooks.push(newBook);
      await AsyncStorage.setItem('books', JSON.stringify(updatedBooks));
      await setId(currentId + 1);
      console.log('Data saved to AsyncStorage successfully!');
      printAsyncStorageContent();
    } catch (error) {
      console.error(error);
    }
  };


  const printAsyncStorageContent = async () => {
    try {
      const storedBooks = await AsyncStorage.getItem('books');
      console.log(JSON.parse(storedBooks));
    } catch (error) {
      console.error(error);
    }
  };


  const handleImageLink = async (link) => {
    setImage(link);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <ScrollView>
      <LinearGradient
        style={styles.container}
        colors={['#FDF0F3', '#FFFBFC']}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Upload a Book</Text>
        </View>

        <View style={styles.formContainer}>
          <Input
            title="Title"
            placeholder="Enter book title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />

          <Input
            title="Author"
            placeholder="Enter author name"
            value={author}
            onChangeText={(text) => setAuthor(text)}
          />

          <Input
            title="Description"
            placeholder="Enter book description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            multiline={true}
            numberOfLines={4}
          />

          <View style={styles.dateContainer}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>

          <Input
            title="Availability"
            placeholder="Enter book availability"
            value={availability}
            onChangeText={(text) => setAvailability(text)}
          />
          <View style={styles.imageContainer}>
            <Text style={styles.label}>Image</Text>
            <Input
              title="Image Link"
              placeholder="Enter image link"
              value={image}
              onChangeText={(text) => handleImageLink(text)}
            />
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <View style={styles.imagePlaceholder} />
            )}
          </View>


        </View>
        <TouchableOpacity onPress={() => handleUpload([{
          image,
          title,
          description,
          author,
          price: 10.99,
          availability: { quantity: parseInt(availability) },
          date,
        }])}>
          <Text style={styles.uploadText}>Upload Book</Text>
        </TouchableOpacity>

        <Button title="Clear" onPress={clearAsyncStorage} />

      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  formContainer: {
    width: '80%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  imagePlaceholder: {
    width: 100,
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  uploadText: {
    fontSize: 18,
    color: '#333',
    padding: 16,
  },
});  