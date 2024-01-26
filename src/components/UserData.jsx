import { Description } from './Description';
import { Title } from './Title';
import { SubTitle } from './SubTitle';
import { UserStyledContainer } from 'styles/Pages.styled';

export const UserData = ({ data: { goal, measure, behaviors, exercise } }) => {
  const textArray = behaviors
    ? behaviors.map(item => item.text).join(', ')
    : null;
  console.log('textArray', behaviors);

  return (
    <UserStyledContainer>
      <Title>Congratulation!</Title>
      {goal && (
        <SubTitle>
          Your Goal: <Description>{goal.title}</Description>
        </SubTitle>
      )}
      {measure.height && (
        <SubTitle>
          Your Height: <Description> {measure.height}</Description>
        </SubTitle>
      )}
      {measure.weight && (
        <SubTitle>
          Your Weight: <Description> {measure.weight}</Description>
        </SubTitle>
      )}
      {behaviors && (
        <SubTitle>
          Your Behaviors: <Description> {textArray}</Description>
        </SubTitle>
      )}
      {exercise && (
        <SubTitle>
          Your Exercise: <Description> {exercise.descr}</Description>
        </SubTitle>
      )}
    </UserStyledContainer>
  );
};
