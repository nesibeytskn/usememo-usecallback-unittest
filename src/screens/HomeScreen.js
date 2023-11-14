import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';
import PersonCard from '../components/PersonCard';
import {data} from '../utils/constants';

const HomeScreen = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('Kişi Listesi');
  const [age, setAge] = useState(0);

  const cachedSetAppTitle = useCallback(willSetTitle => {
    for (let i = 0; i < 100000000; i++) {}

    setTitle(willSetTitle);
  }, []);

  const handleSetAge = () => {
    //console.log('fonksiyon çalıştı');
    for (let i = 0; i < 100000000; i++) {}
    return age + 10;
  };
  const cachedSetAge = useMemo(() => handleSetAge(), [age]);
  return (
    <View  style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text
        testID='appTitle'
          style={[styles.title, {color: isGreen ? '#16c784' : 'white'}]}
          onPress={() => setIsGreen(!isGreen)}>
          {title}
        </Text>
        <Text style={styles.title}>{cachedSetAge}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PersonCard
            personInfo={item}
            setTitle={cachedSetAppTitle}
            setAge={setAge}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#6b7280',
  },
  headerContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 35,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
});
