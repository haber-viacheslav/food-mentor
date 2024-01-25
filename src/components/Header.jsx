import { useLocation, useNavigate } from 'react-router-dom';
import {
  StyledHeader,
  MainNav,
  StyledLink,
  StyledImage,
  StyledButton,
} from '../styles/Header.styled';
import { BackButton } from './BackButton';
import { Container } from './Container';
import svg from 'assets/avocado.svg';
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backBtnLink = location.state?.from ?? '/';
  const handleGoBack = () => {
    navigate(backBtnLink);
  };
  return (
    <StyledHeader>
      <Container>
        <MainNav>
          <BackButton onClick={handleGoBack} />
          <StyledLink to="/" end>
            <StyledButton type="button">
              <StyledImage src={svg} alt="avocado" width={18} />
            </StyledButton>
            Food Mentor
          </StyledLink>
        </MainNav>
      </Container>
    </StyledHeader>
  );
};
