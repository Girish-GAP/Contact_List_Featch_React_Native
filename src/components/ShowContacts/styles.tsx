import {StyleSheet} from 'react-native'
import { colors } from '../../utils/constants/colors';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
    contactContainer: {
      backgroundColor: colors.contact_background,
      borderRadius: 8,
      shadowColor: colors.shadow,
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 10,
      margin: 10,
    },
  
    userIcon: {
      color: colors.user_icon,
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
  