import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Description } from 'components/Description';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { ContentWrapper } from '../styles/Pages.styled';
import behaviorsData from '../MockData/behaviors.json';
import { BehaviorsList } from 'components/BehaviorsList';
import { BehaviorsItem } from 'components/BehaviorsItem';
import { useAppContext } from '../Store/AppContext';
import { ContinueButton } from 'components/ContinueButton';
import { handleContinue } from '../utils/handleContinue';
import { areBehaviorsEqual } from 'utils/areBehaviorsEqual';

const Behaviors = () => {
  const { selectedData, updateSelectedData } = useAppContext();
  const navigate = useNavigate();
  const [localBehaviors, setLocalBehaviors] = useState(behaviorsData);

  useEffect(() => {
    if (selectedData.behaviors && selectedData.behaviors.length > 0) {
      const updatedBehaviors = localBehaviors.map(behavior =>
        selectedData.behaviors.find(
          selectedBehavior => selectedBehavior.id === behavior.id
        )
          ? { ...behavior, selected: true }
          : behavior
      );

      if (!areBehaviorsEqual(localBehaviors, updatedBehaviors)) {
        setLocalBehaviors(updatedBehaviors);
      }
    }
  }, [localBehaviors, selectedData.behaviors]);

  const handleBehaviorSelect = selectedBehavior => {
    setLocalBehaviors(prevBehaviors =>
      prevBehaviors.map(behavior =>
        behavior.id === selectedBehavior.id
          ? { ...behavior, selected: !behavior.selected }
          : behavior
      )
    );
  };

  const handleButtonClick = () => {
    const nextPage = selectedData.page + 1;

    const updatedGlobalBehaviors = localBehaviors.filter(
      localBehavior => localBehavior.selected
    );

    updateSelectedData({ behaviors: updatedGlobalBehaviors });
    handleContinue(nextPage, updateSelectedData, navigate);
  };
  return (
    <Section>
      <ContentWrapper>
        <Title>Destructive behaviors</Title>
        <Description>We all have them! Which are yours?</Description>
      </ContentWrapper>
      {localBehaviors && (
        <BehaviorsList>
          {localBehaviors.map(behavior => (
            <BehaviorsItem
              key={behavior.id}
              behavior={behavior}
              onSelect={() =>
                handleBehaviorSelect({
                  ...behavior,
                  selected: !behavior.selected,
                })
              }
            />
          ))}
        </BehaviorsList>
      )}

      <ContinueButton onClick={handleButtonClick}>Continue</ContinueButton>
    </Section>
  );
};

export default Behaviors;
