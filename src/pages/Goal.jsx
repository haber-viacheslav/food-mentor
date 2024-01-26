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
const Goal = () => {
  const { selectedData, updateSelectedData } = useAppContext();
  const navigate = useNavigate();

  const handleGoalSelect = goal => {
    updateSelectedData({ goal });
  };

  const handleButtonClick = () => {
    const nextPage = selectedData.page + 1;
    updateSelectedData({ page: nextPage });
    switch (nextPage) {
      case 2:
        navigate('/measure');
        break;
      case 3:
        navigate('/behaviors');
        break;
      case 4:
        navigate('/physical');
        break;
      default:
        navigate('/');
        break;
    }
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
