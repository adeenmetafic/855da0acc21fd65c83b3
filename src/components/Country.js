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
import {Dimensions, BackHandler} from 'react-native';

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
          <ListItem>
            <Text>Capital: {country.capital}</Text>
          </ListItem>
          <ListItem>
            <Text>Population: {country.population}</Text>
          </ListItem>
          <ListItem>
            <Text>Latitude: {country.latlng[0]}</Text>
          </ListItem>
          <ListItem>
            <Text>Longitude: {country.latlng[1]}</Text>
          </ListItem>
          <ListItem>
            <SvgCssUri
              width={Dimensions.get('window').width}
              uri={country.flag}
              scale={0.5}
            />
          </ListItem>
        </List>
        <Button rounded onPress={() => setCapital(country.capital)}>
          <Text>Capital Weather</Text>
        </Button>
        <Button onPress={goBack} rounded>
          <Text>Back</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Country;
