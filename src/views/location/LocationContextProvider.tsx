import React, { FC } from 'react';
import { AddressLookup } from '../../models/addressLookup';
import { LocationContext } from './LocationContext';

type Props = {
  children: React.ReactNode;
  results: AddressLookup[];
  setResults: (address: AddressLookup[]) => void;
};

const LocationContextProvider: FC<Props> = ({ children, results, setResults }) => {
  return <LocationContext.Provider value={{ results, setResults }}>{children}</LocationContext.Provider>;
};

export default LocationContextProvider;
