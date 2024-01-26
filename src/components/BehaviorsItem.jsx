import {
  StyledBehaviorsItem,
  StyledBehaviorImage,
  StyledBehaviorsDescription,
} from '../styles/BehaviorsList.styled';
import { assetsData } from 'assets/assets';
export const BehaviorsItem = ({ behavior, onSelect }) => {
  const { title, image, text, selected } = behavior;
  const handleClick = () => {
    onSelect({ ...behavior, selected: !selected });
  };
  return (
    <StyledBehaviorsItem onClick={handleClick} isSelected={selected}>
      <StyledBehaviorImage
        src={assetsData[image]}
        alt={title}
        width={30}
        loading="lazy"
      />
      <StyledBehaviorsDescription>{text}</StyledBehaviorsDescription>
    </StyledBehaviorsItem>
  );
};
