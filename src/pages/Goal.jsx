import { useNavigate } from 'react-router-dom';
import { Description } from 'components/Description';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { ContentWrapper } from '../styles/Pages.styled';
import { SubTitle } from 'components/SubTitle';
import goalsData from '../MockData/goals.json';
import { GoalsList } from 'components/GoalsList';
import { GoalsItem } from 'components/GoalsItem';
import { assetsData } from 'assets/assets';
import { useAppContext } from '../Store/AppContext';
import { ContinueButton } from 'components/ContinueButton';
import { handleContinue } from '../utils/handleContinue';
const Goal = () => {
  const { selectedData, updateSelectedData } = useAppContext();
  const navigate = useNavigate();

  const handleGoalSelect = goal => {
    updateSelectedData({ goal });
  };

  const handleButtonClick = () => {
    const nextPage = selectedData.page > 4 ? 1 : selectedData.page + 1;
    handleContinue(nextPage, updateSelectedData, navigate);
  };

  return (
    <Section title="The Goal">
      <ContentWrapper>
        <Title>The Goal</Title>
        <Description>
          Focus on the health benefits you need. Balanced nutrition will let you
          achieve them
        </Description>
      </ContentWrapper>
      <SubTitle>What are your goals?</SubTitle>
      {goalsData && (
        <GoalsList>
          {goalsData.map(goal => (
            <GoalsItem
              key={goal.id}
              goal={goal.title}
              image={assetsData[goal.image]}
              isSelected={selectedData.goal?.id === goal.id}
              onSelect={() => handleGoalSelect(goal)}
            />
          ))}
        </GoalsList>
      )}
      {selectedData.goal && (
        <ContinueButton onClick={handleButtonClick}>Continue</ContinueButton>
      )}
    </Section>
  );
};

export default Goal;
