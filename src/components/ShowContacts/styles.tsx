import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F0F1FF',
    },
    contactContainer: {
      backgroundColor: 'white',
      borderRadius: 8,
      shadowColor: '#171717',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 10,
      margin: 10,
    },
  
    userIcon: {
      color: '#344054',
    },
  
    nameText: {
      color: '#344054',
      fontWeight: 'bold',
      fontSize: 16,
    },
  
    phoneText: {
      color: '#667085',
      fontSize: 15,
    },
  
    contentContainer: {
      padding: 15,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    textContainer: {
      marginLeft: 20,
    },

    noContactText : {
      fontSize : 22
    }
  });


  export default styles;
  