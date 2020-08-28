import React from 'react';
import {
  Container,
  Content,
  Button,
  Input,
  Item,
  Text,
  Header,
} from 'native-base';

const Home = ({setCountryDetails}) => {
  const [country, setCountry] = React.useState('');

  const submitForm = () => {
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryDetails(data[0]);
      });
  };

  return (
    <Container>
      <Header />
      <Content>
        <Item rounded style={{marginTop: 36}}>
          <Input
            placeholder="Enter country"
            value={country}
            onChangeText={setCountry}
            style={{textAlign: 'center'}}
          />
        </Item>
        <Button
          rounded
          disabled={!country}
          onPress={submitForm}
          style={{alignSelf: 'center', marginTop: 18}}>
          <Text>Submit</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
