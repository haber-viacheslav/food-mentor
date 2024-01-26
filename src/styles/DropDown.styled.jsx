import styled from 'styled-components';

export const StyledDropContainer = styled.div`
  padding-top: 90px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledButtonWrapper = styled.div`
  width: 360px;
  display: flex;
  height: 32px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.green};
  overflow: hidden;
`;

export const StyledDropButton = styled.button`
  width: 50%;
  color: ${props => props.theme.colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  display: flex;
  background-color: ${props => props.theme.colors.clearWhite};
  border: none;
  cursor: pointer;
  ${({ isSelected, theme }) =>
    isSelected &&
    `
    background-color: ${theme.colors.lightGreen}
  `}
  transition: 300ms background-color ease-in-out;
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.lightGreen};
    cursor: pointer;
  }
`;

export const StyledForm = styled.form`
  position: relative;

  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const StyledField = styled.label`
  position: relative;
  width: 360px;
`;
export const StyledError = styled.span`
  position: absolute;
  color: ${props => props.theme.colors.red};
  bottom: 18px;
  right: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 20px 15px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.clearWhite};
`;
