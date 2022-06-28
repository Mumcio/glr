import styled from '@emotion/styled';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  border: 1px solid black;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
  grid-auto-flow: row;
  grid-template-areas:
    'location mapWithUserLocation infoAboutUserLoc'
    'location searchBox searchBox'
    'location mapWithLastSearch infoAboutLastSearch';
`;

export const Title = styled.div`
  width: 100%;
  line-height: 30px;
  color: #fff;
  background-color: #2c3e50;
  text-align: center;
`;
