import React from 'react';
import {
  Container,
  Content,
  Button,
  List,
  ListItem,
  Text,
  Header,
} from 'native-base';
import {SvgCssUri} from 'react-native-svg';
import {Dimensions, BackHandler, StyleSheet} from 'react-native';

const Country = ({country, setCountryDetails, setCapital}) => {
  const goBack = () => {
    setCountryDetails(null);
    return true;
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      goBack,
    );

    return () => backHandler.remove();
  });

  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem style={styles.center}>
            <SvgCssUri
              width={Dimensions.get('window').width / 2}
              height="200"
              uri={country.flag}
              scale={0.5}
            />
          </ListItem>
          <ListItem style={styles.center}>
            <Text>Capital: {country.capital}</Text>
          </ListItem>
          <ListItem style={styles.center}>
            <Text>Population: {country.population}</Text>
          </ListItem>
          <ListItem style={styles.center}>
            <Text>Latitude: {country.latlng[0]}</Text>
          </ListItem>
          <ListItem style={styles.center}>
            <Text>Longitude: {country.latlng[1]}</Text>
          </ListItem>
        </List>
        <Button
          rounded
          onPress={() => setCapital(country.capital)}
          style={styles.button}>
          <Text>Capital Weather</Text>
        </Button>
        <Button onPress={goBack} rounded style={styles.button}>
          <Text>Back</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  center: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    marginTop: 12,
  },
});

export default Country;
