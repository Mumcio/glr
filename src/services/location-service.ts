import axios from 'axios';
import { AddressLookup } from '../models/addressLookup';

const { REACT_APP_IPADDRESS_GEOLOC_URL } = process.env;

export const getUserLocation = async (ipAddress?: string) => {
  const geoLocUrl = ipAddress
    ? `${REACT_APP_IPADDRESS_GEOLOC_URL}/${ipAddress}/json`
    : `${REACT_APP_IPADDRESS_GEOLOC_URL}/json`;

  const response = await axios.get<AddressLookup>(geoLocUrl);
  return response.data;
};
