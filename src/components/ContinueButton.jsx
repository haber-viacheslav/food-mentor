import { StyledContinueButton } from 'styles/ContinueButton.styled';

export const ContinueButton = ({ type = 'button', children, onClick }) => {
  return (
    <StyledContinueButton type={type} onClick={onClick}>
      {children}
    </StyledContinueButton>
  );
};
