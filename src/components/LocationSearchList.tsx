import styled from '@emotion/styled';
import { FC, useContext } from 'react';
import { LocationContentType } from '../models/content';
import { Title } from '../theme/Layout';
import { LocationContext } from '../views/location/LocationContext';

const LocationSearchList: FC<LocationContentType> = ({ title, gridAreaName }) => {
  const { results } = useContext(LocationContext);

  return (
    <Container style={{ gridArea: gridAreaName }} data-testid="listAllSearches">
      <Title>{title}</Title>
      {results?.length !== 0 && (
        <ol>
          {results?.map((address, index) => (
            <li key={index}>{address.ip}</li>
          ))}
        </ol>
      )}
    </Container>
  );
};

export default LocationSearchList;

const Container = styled.div`
  border: 1px solid black;
`;
