import React from 'react';
import Home from './src/components/Home';
import Country from './src/components/Country';
import Weather from './src/components/Weather';

const App = () => {
  const [countryDetails, setCountryDetails] = React.useState(null);
  const [capital, setCapital] = React.useState(null);

  return capital ? (
    <Weather capital={capital} setCapital={setCapital} />
  ) : countryDetails ? (
    <Country
      country={countryDetails}
      setCountryDetails={setCountryDetails}
      setCapital={setCapital}
    />
  ) : (
    <Home setCountryDetails={setCountryDetails} />
  );
};

export default App;
