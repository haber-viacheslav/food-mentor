import { Description } from 'components/Description';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { ContentWrapper } from '../styles/Pages.styled';

const Measure = () => {
  return (
    <Section>
      <ContentWrapper>
        <Title>Measure Yourself</Title>
        <Description>What are your height and body weight?</Description>
      </ContentWrapper>
    </Section>
  );
};

export default Measure;
