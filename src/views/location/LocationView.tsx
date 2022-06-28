import { FC, useEffect } from 'react';
import { useMutation } from 'react-query';
import LocationDetails from '../../components/LocationDetails';
import LocationMap from '../../components/LocationMap';
import LocationSearchForm from '../../components/LocationSearchForm';
import LocationSearchList from '../../components/LocationSearchList';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { AddressLookup } from '../../models/addressLookup';
import { getUserLocation } from '../../services/location-service';
import { Grid } from '../../theme/Layout';
import LocationContextProvider from './LocationContextProvider';

const LocationView: FC = () => {
  const [results, setResults] = useSessionStorage<AddressLookup[]>('addresses', []);

  const { mutate } = useMutation(() => getUserLocation(), {
    onSuccess: (data: AddressLookup) => setResults([data]),
  });

  useEffect(() => {
    if (results?.length === 0) {
      mutate();
    }
  }, [results, mutate]);

  return (
    <LocationContextProvider results={results} setResults={setResults}>
      <Grid>
        <LocationSearchList title="List of all searches" gridAreaName="location" />
        <LocationMap title="Map with user location" gridAreaName="mapWithUserLocation" />
        <LocationDetails title="Information about user location" gridAreaName="infoAboutUserLoc" />
        <LocationSearchForm gridAreaName="searchBox" />
        <LocationMap title="Map with last search location" gridAreaName="mapWithLastSearch" />
        <LocationDetails title="Information about last search" gridAreaName="infoAboutLastSearch" />
      </Grid>
    </LocationContextProvider>
  );
};

export default LocationView;
