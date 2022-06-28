import styled from '@emotion/styled';
import { FC, useContext, useMemo } from 'react';
import { LocationContentType } from '../models/content';
import { LocationContext } from '../views/location/LocationContext';
import { Title } from '../theme/Layout';

const { REACT_APP_GOOGLE_MAPS_URL } = process.env;

const LocationMap: FC<LocationContentType> = ({ title, gridAreaName }) => {
  const { results } = useContext(LocationContext);
  const lastAddress = useMemo(() => results[results.length - 1], [results]);
  const userAddress = useMemo(() => results[0], [results]);

  return (
    <Container style={{ gridArea: gridAreaName }}>
      <Title>{title}</Title>
      {!results?.length && <div>loading....</div>}

      {gridAreaName === 'mapWithUserLocation' && userAddress?.latitude && (
        <iframe
          title={gridAreaName}
          width="100%"
          height="85%"
          scrolling="no"
          src={`${REACT_APP_GOOGLE_MAPS_URL}?q=${userAddress?.latitude},${userAddress?.longitude}&output=embed`}
        ></iframe>
      )}

      {gridAreaName === 'mapWithLastSearch' && lastAddress?.latitude && (
        <iframe
          title={gridAreaName}
          width="100%"
          height="85%"
          scrolling="no"
          src={`${REACT_APP_GOOGLE_MAPS_URL}?q=${lastAddress?.latitude},${lastAddress?.longitude}&output=embed`}
        ></iframe>
      )}
    </Container>
  );
};

export default LocationMap;

const Container = styled.div`
  border: 1px solid black;
  overflow: hidden;
`;
