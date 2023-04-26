import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Contact from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';
import styles from './styles';
import NoContacts from './NoContacts';
import Contacts from './Contacts';

const ShowContacts = () => {
  useEffect(() => {}, []);
  const [contactsList, setContactsList] = useState<any>(null);
  const [isContacts, setIsContacts] = useState(true);

  const getPermission = () => {
    // Get permissions from android
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
      .then(res => {
        if (res === 'granted') {
          Contact.getAll()
            .then(contacts => {
              if (contacts.length === 0) {
                setIsContacts(false);
              }
              setContactsList(contacts);
            })
            .catch(e => {
              console.log(e);
            });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <View style={styles.container}>
      {!isContacts ? <NoContacts /> : <Contacts contactsList={contactsList} />}
    </View>
  );
};

export default ShowContacts;
