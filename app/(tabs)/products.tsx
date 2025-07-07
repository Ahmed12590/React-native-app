import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const products = [
  { id: 1, name: 'Chicken Burger', image: require('../../assets/images/burger.jpg') },
  { id: 2, name: 'Vanilla Icecream', image: require('../../assets/images/burger.jpg') },
  { id: 3, name: 'Crispy Fries', image: require('../../assets/images/burger.jpg') },
];

export default function ProductsPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Products</Text>
      {products.map((product) => (
        <View key={product.id} style={styles.productCard}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Background color for product page
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#fff',
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
});
