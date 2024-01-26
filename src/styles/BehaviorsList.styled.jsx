import styled from 'styled-components';

export const StyledBehaviorsList = styled.ul`
  width: 360px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 129px;
`;

export const StyledBehaviorsItem = styled.li`
  flex-basis: calc((100% - (2 - 1) * 16px) / 2);
  padding: 12px 24px 12px 15px;
  height: 60px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
  border-radius: 15px;
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
export const StyledBehaviorImage = styled.img`
  width: 30px;
  height: 30px;
`;
export const StyledBehaviorsDescription = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.3px;
`;
