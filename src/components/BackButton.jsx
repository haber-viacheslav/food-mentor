import { StyledBackBtn } from '../styles/BackButton.styled';
import backIcon from 'assets/back.svg';
export const BackButton = ({ onClick, children }) => {
  return (
    <StyledBackBtn type="button" onClick={onClick}>
      <img src={backIcon} alt="back" />
      {children}
    </StyledBackBtn>
  );
};
