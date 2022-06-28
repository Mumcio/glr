import styled from '@emotion/styled';
import { FC, useContext, useMemo } from 'react';
import { LocationContentType } from '../models/content';
import { Title } from '../theme/Layout';
import { LocationContext } from '../views/location/LocationContext';

const LocationDetails: FC<LocationContentType> = ({ title, gridAreaName }) => {
  const { results } = useContext(LocationContext);
  const lastAddress = useMemo(() => results[results.length - 1], [results]);
  const userAddress = useMemo(() => results[0], [results]);

  return (
    <Container style={{ gridArea: gridAreaName }}>
      <Title>{title}</Title>
      {!results?.length && <div>loading....</div>}

      {gridAreaName === 'infoAboutUserLoc' && userAddress?.latitude && (
        <ul>
          <li>{userAddress.ip}</li>
          <li>{userAddress.city}</li>
          <li>{userAddress.region}</li>
          <li>{userAddress.country}</li>
          <li>{userAddress.timezone}</li>
          <li>{userAddress.currency}</li>
          <li>{userAddress.currency_name}</li>
        </ul>
      )}

      {gridAreaName === 'infoAboutLastSearch' && lastAddress?.latitude && (
        <ul>
          <li>{lastAddress.ip}</li>
          <li>{lastAddress.city}</li>
          <li>{lastAddress.region}</li>
          <li>{lastAddress.country}</li>
          <li>{lastAddress.timezone}</li>
          <li>{lastAddress.currency}</li>
          <li>{lastAddress.currency_name}</li>
        </ul>
      )}
    </Container>
  );
};

export default LocationDetails;

const Container = styled.div`
  border: 1px solid black;
`;
