import { Container } from 'components/Container';
import { Description } from 'components/Description';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { ContentWrapper } from '../styles/Pages.styled';
import { SubTitle } from 'components/SubTitle';

const Goal = () => {
  return (
    <Section title="The Goal">
      <Container>
        <ContentWrapper>
          <Title>The Goal</Title>
          <Description>
            Focus on the health benefits you need. Balanced nutrition will let
            you achieve them
          </Description>
        </ContentWrapper>
        <SubTitle>What are your goals?</SubTitle>
      </Container>
    </Section>
  );
};

export default Goal;
