import styled from 'styled-components';

export const StyledGoalsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`;

export const StyledGoalsItem = styled.li`
  width: 172px;
  height: 172px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 20.848px;
  border: 1px solid ${props => props.theme.colors.light};
  background: linear-gradient(214deg, #f1f1f1 12.33%, #fff 69.93%);
  overflow: hidden;
  cursor: pointer;
  ${({ isSelected, theme }) =>
    isSelected &&
    `
    border: 1px solid ${theme.colors.green}; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `}
`;
export const StyledGoalImage = styled.img``;
export const StyledGoalDescription = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 16.679px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.208px;
`;
