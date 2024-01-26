import styled from 'styled-components';

export const StyledContinueButton = styled.button`
  display: flex;
  margin: 0 auto;
  width: 360px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.green};
  border-radius: 12px;
  border: none;
  cursor: pointer;
  opacity: 0.3;
  color: ${props => props.theme.colors.clearWhite};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.44;
  letter-spacing: 0.2px;
  transition: 300ms opacity ease-in-out;
  :hover,
  :focus {
    opacity: 0.7;
    cursor: pointer;
  }
`;
