import React from 'react';
import {
  Container,
  Content,
  Button,
  List,
  ListItem,
  Text,
  Header,
  Spinner,
  Thumbnail,
} from 'native-base';
import {BackHandler, StyleSheet} from 'react-native';
import {WEATHER_API_KEY} from '@env';

const Country = ({capital, setCapital}) => {
  const [weather, setWeather] = React.useState(null);

  const goBack = () => {
    setCapital(null);
    return true;
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      goBack,
    );

    return () => backHandler.remove();
  });

  const fetchWeather = () => {
    const url = `http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${capital}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data.current);
      })
      .catch((error) => console.error(error));
  };

  React.useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner />
        </Content>
      </Container>
    );
  }
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem style={styles.center}>
            <Text>Temperature: {weather.temperature}</Text>
          </ListItem>
          <ListItem style={styles.center}>
            {weather.weather_icons.map((icon, key) => (
              <Thumbnail source={{uri: icon}} height={200} width={200} />
            ))}
          </ListItem>
          <ListItem style={styles.center}>
            <Text>Wind Speed: {weather.wind_speed}</Text>
          </ListItem>
          <ListItem style={styles.center}>
            <Text>Precipitation: {weather.precip}</Text>
          </ListItem>
        </List>
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
