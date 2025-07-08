import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const BG_IMAGE = require('../../assets/images/welcome.png')

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={BG_IMAGE}
      style={styles.background}
      resizeMode="cover"
    >
      {/* dark gradient overlay */}
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(0,0,0,0.6)']}
        style={styles.overlay}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Welcome to{'\n'}
          <Text style={styles.accent}>Fast Food</Text>
        </Text>
        <Text style={styles.subtitle}>
          Get your favourite meals delivered{'\n'}
          quickly right to your doorstep.
        </Text>

        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.emailButtonText}>Start with email</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>────────  Sign in with  ────────</Text>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#FFF' }]}
          onPress={() => {/* Facebook login */}}
        >
          <Text style={[styles.socialButtonText, { color: '#000' }]}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#FFF' }]}
          onPress={() => {/* Google login */}}
        >
          <Text style={[styles.socialButtonText, { color: '#000' }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    marginTop: height * 0.15,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 42,
  },
  accent: {
    color: '#FF6A00',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 22,
  },
  emailButton: {
    marginTop: 32,
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: 'center',
  },
  emailButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    marginVertical: 20,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },
  socialButton: {
    marginVertical: 8,
    paddingVertical: 12,
    borderRadius: 28,
    alignItems: 'center',
  },
  socialButtonText: {
    fontSize: 15,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  footerText: {
    color: 'rgba(255,255,255,0.8)',
  },
  footerLink: {
    color: '#fff',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
})
