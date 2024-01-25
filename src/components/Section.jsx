import { SectionWrp, SectionHiddenTitle } from '../styles/Section.styled';
import { Container } from 'components/Container';

export const Section = ({ title, children }) => {
  return (
    <SectionWrp>
      <Container>
        {title && <SectionHiddenTitle>{title}</SectionHiddenTitle>}
        {children}
      </Container>
    </SectionWrp>
  );
};
