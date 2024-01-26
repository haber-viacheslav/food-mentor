import {
  StyledExerciseItem,
  StyledExerciseItemDescription,
} from 'styles/ExerciseList.styled';
export const ExerciseItem = ({ description, onSelect, isSelected }) => {
  return (
    <StyledExerciseItem onClick={onSelect} isSelected={isSelected}>
      <StyledExerciseItemDescription>
        {description}
      </StyledExerciseItemDescription>
    </StyledExerciseItem>
  );
};
