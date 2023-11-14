import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';

const PersonCard = ({personInfo, setTitle, setAge}) => {
  //console.log(personInfo);
  const {email, first_name, id, last_name, gender, photo} = personInfo;

  return (
    <TouchableOpacity testID='personContainer' style={styles.mainContainer} onPress={() => setAge(id+10)}>
      <View style={styles.leftSide}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: photo,
            }}
          />
        </View>
        <View style={styles.infoConatainer}>
          <Text testID='nameBar' onPress={() => setTitle(first_name)} style={styles.name}>
            {first_name + '  ' + last_name}
          </Text>
          <Text style={styles.job}>{email}</Text>
        </View>
      </View>
      <View style={styles.infoConatainer}>
        <Text style={styles.name}>{gender}</Text>
        <Text style={styles.job}>{id + 20}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(PersonCard);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 15,
    borderRadius: 15,
  },
  leftSide: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoConatainer: {
    marginBottom: 35,
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
    color: 'white',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    objectFit: 'cover',
  },

  job: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '600',
  },
});
