import React from 'react';
import {ScrollView, Text} from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </ScrollView>
  );
};

export default Home;
