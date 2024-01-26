import styled from 'styled-components';
export const StyledBackBtn = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 6.5px;
  background-color: ${props => props.theme.colors.transparent};
  border: none;
  transition: 300ms color ease-in-out;
  :hover,
  :focus {
    cursor: pointer;
  }
`;
