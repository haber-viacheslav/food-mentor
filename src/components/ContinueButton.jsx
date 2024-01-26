import { StyledContinueButton } from 'styles/ContinueButton.styled';

export const ContinueButton = ({ children, onClick }) => {
  return (
    <StyledContinueButton type="button" onClick={onClick}>
      {children}
    </StyledContinueButton>
  );
};
