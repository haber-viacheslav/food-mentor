import { StyledHeader, MainNav, StyledLink } from '../styles/Header.styled';
import { Container } from './Container';
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <MainNav>
          <StyledLink to="/" end>
            Food Mentor
          </StyledLink>
        </MainNav>
      </Container>
    </StyledHeader>
  );
};
