import { useNavigate } from 'react-router-dom';
import { handleContinue } from 'utils/handleContinue';
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
import { useAppContext } from '../Store/AppContext';
export const Header = () => {
  const { selectedData, updateSelectedData } = useAppContext();

  const navigate = useNavigate();

  const handleGoBack = () => {
    const nextPage =
      selectedData.page === 1 ? selectedData.page : selectedData.page - 1;
    handleContinue(nextPage, updateSelectedData, navigate);
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
