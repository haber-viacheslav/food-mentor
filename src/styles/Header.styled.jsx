import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 9px 0;
`;

export const MainNav = styled.nav`
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 9.5px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 9.5px;
  color: ${props => props.theme.colors.greyGreen};
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.45px;
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  &:hover,
  &:focus {
  }

  &.active {
  }
`;

export const StyledImage = styled.img`
  height: 100%;
`;
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.5px;
  height: 33.5px;
  border: none;
  outline: none;
  border-radius: 6.543px;
  background-color: ${props => props.theme.colors.buttonBg};
  cursor: pointer;
`;
