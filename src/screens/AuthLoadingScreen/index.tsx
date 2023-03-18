import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import Background from '../../components/Background'
import { theme } from '../../theme/theme'

export default function AuthLoadingScreen({ navigation }) {
  firebase.auth().onAuthStateChanged((user: any) => {
    if (user) {
      // User is logged in
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    } else {
      // User is not logged in
      navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
      })
    }
  })

  return (
      <Background>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Background>
  )
}
