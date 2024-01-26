import { Description } from 'components/Description';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { SubTitle } from 'components/SubTitle';
import { ContentWrapper } from '../styles/Pages.styled';
import { PhysicalList } from 'components/PhysicalList';
import { PhysicalWrapper } from '../styles/Pages.styled';
import girl from 'assets/active-girl.png';
const Physical = () => {
  return (
    <Section>
      <ContentWrapper>
        <Title>Physical exercise</Title>
        <Description>
          Physical exercise means a lot for a woman who wants to lose kilos and
          works at the office
        </Description>
      </ContentWrapper>

      <SubTitle>How active are you during the day?</SubTitle>
      <PhysicalWrapper>
        <img src={girl} alt="girl" loading="lazy" />
        <PhysicalList></PhysicalList>
      </PhysicalWrapper>
    </Section>
  );
};

export default Physical;
