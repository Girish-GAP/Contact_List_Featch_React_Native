import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../styles';

const Contacts = ({contactsList} :any) => {
  useEffect(() => {}, []);

  return (
    <FlatList
      data={contactsList}
      renderItem={({item, index}) => {
        return (
          <View style={styles.contactContainer}>
            <View style={styles.contentContainer}>
              <Icon name="user" size={30} />

              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.displayName}</Text>
                <Text style={styles.phoneText}>
                  {item.phoneNumbers[0].number}
                </Text>
              </View>
            </View>
          </View>
        );
      }}></FlatList>
  );
};

export default Contacts;
