import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '../components/Input';

export default function Upload() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [availability, setAvailability] = useState('');
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleUpload = async () => {
    try {
      // Store data locally using AsyncStorage  
      await AsyncStorage.setItem('title', title);
      await AsyncStorage.setItem('author', author);
      await AsyncStorage.setItem('description', description);
      await AsyncStorage.setItem('date', date.toISOString());
      await AsyncStorage.setItem('availability', availability);
      await AsyncStorage.setItem('image', image);

      console.log('Data stored successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async () => {
    // Use react-native-image-picker to select an image  
    const response = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (response.assets) {
      setImage(response.assets[0].uri);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  useEffect(() => {
    // Retrieve data from AsyncStorage when the component mounts  
    const fetchData = async () => {
      try {
        const storedTitle = await AsyncStorage.getItem('title');
        const storedAuthor = await AsyncStorage.getItem('author');
        const storedDescription = await AsyncStorage.getItem('description');
        const storedDate = await AsyncStorage.getItem('date');
        const storedAvailability = await AsyncStorage.getItem('availability');
        const storedImage = await AsyncStorage.getItem('image');

        setTitle(storedTitle);
        setAuthor(storedAuthor);
        setDescription(storedDescription);
        setDate(new Date(storedDate));
        setAvailability(storedAvailability);
        setImage(storedImage);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
            <TouchableOpacity onPress={handleImageUpload}>
              {image ? (
                <Image
                  source={{
                    uri: image,
                  }}
                  style={styles.image}
                />
              ) : (
                <View style={styles.imagePlaceholder} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={handleUpload}>
          <Text style={styles.uploadText}>Upload Book</Text>
        </TouchableOpacity>
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