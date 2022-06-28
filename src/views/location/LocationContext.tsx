import React from 'react';
import { AddressLookup } from '../../models/addressLookup';

type LocationContextType = {
  results: AddressLookup[];
  setResults: (address: AddressLookup[]) => void;
};

export const LocationContext = React.createContext<LocationContextType>({
  results: [],
  setResults: () => {},
});
