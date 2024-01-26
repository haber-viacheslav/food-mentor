import styled from 'styled-components';

export const StyledPhysicalList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
`;

export const StyledExerciseItem = styled.li`
  padding: 12px 24px 12px 15px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.clearWhite};
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out, border-color 300ms ease-in-out;
  ${({ isSelected, theme }) =>
    isSelected &&
    `
    border: 1px solid ${theme.colors.green}; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `}
`;

export const StyledExerciseItemDescription = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.2px;
`;
