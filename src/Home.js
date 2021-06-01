import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Home extends Component {
  componentDidMount() {
    console.log('sss');
  }
  onPress = () => {
    console.log('onPress');
  };
  render() {
    console.log('[render]');
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <ScrollView>
          <View style={styles.sectionContainer}>
            <Text>demo11111122</Text>
            <Image
              style={styles.image}
              source={{
                uri: 'https://img2.baidu.com/it/u=2100401123,2895311668&fm=26&fmt=auto&gp=0.jpg',
              }}
            />
            <Text>demo111111</Text>
            <Text>demo111111</Text>
            <Text>demo111111</Text>
            <TouchableOpacity onPress={this.onPress}>
              <Text>demo Button</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  image: {
    width: 100,
    height: 100,
  },
  highlight: {
    fontWeight: '700',
  },
});
