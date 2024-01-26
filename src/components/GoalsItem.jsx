import {
  StyledGoalsItem,
  StyledGoalImage,
  StyledGoalDescription,
} from '../styles/GoalsList.styled';
export const GoalsItem = ({ goal, image, isSelected, onSelect }) => {
  return (
    <StyledGoalsItem onClick={onSelect} isSelected={isSelected}>
      <StyledGoalDescription>{goal}</StyledGoalDescription>
      <StyledGoalImage src={image} alt={goal} loading="lazy" />
    </StyledGoalsItem>
  );
};
