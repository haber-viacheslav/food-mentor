import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (${props => props.theme.media.smToMd}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.media.mdToLg}) {
    width: 768px;
    padding: 0 24px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    width: 1280px;
    padding: 0 20px;
  }
`;
