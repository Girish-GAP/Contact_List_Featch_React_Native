import React from 'react'
import {Text} from 'react-native'
import styles from '../styles'
import { messages } from '../../../utils/constants/messages'

const NoContacts = () => {
  return (
    <Text style = {styles.noContactText}>
        {messages.no_contacts}
    </Text>
  )
}

export default NoContacts