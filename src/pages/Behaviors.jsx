import { Description } from 'components/Description';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { ContentWrapper } from '../styles/Pages.styled';

const Behaviors = () => {
  return (
    <Section>
      <ContentWrapper>
        <Title>Destructive behaviors</Title>
        <Description>We all have them! Which are yours?</Description>
      </ContentWrapper>
    </Section>
  );
};

export default Behaviors;
