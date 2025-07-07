import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🍦 Peshwari Icecream Shop</Text>
      
      <View style={styles.productCard}>
        <Image
          source={require('../../assets/images/burger.jpg')}
          style={styles.productImage}
        />
        <Text style={styles.productName}>Chicken Burger</Text>
        <Link href="/products" style={styles.linkButton}>
          View Products
        </Link>
      </View>

      <View style={styles.productCard}>
        <Image
          source={require('../../assets/images/burger.jpg')}
          style={styles.productImage}
        />
        <Text style={styles.productName}>Vanilla Icecream</Text>
        <Link href="/products" style={styles.linkButton}>
          View Products
        </Link>
      </View>

      <View style={styles.productCard}>
        <Image
          source={require('../../assets/images/burger.jpg')}
          style={styles.productImage}
        />
        <Text style={styles.productName}>Crispy Fries</Text>
        <Link href="/products" style={styles.linkButton}>
          View Products
        </Link>
      </View>
    </ScrollView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#fe7e01', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  productImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  linkButton: {
    marginTop: 8,
    color: '#007bff',
    fontWeight: 'bold',
  },
});