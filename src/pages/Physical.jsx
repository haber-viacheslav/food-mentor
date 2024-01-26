import { useState } from 'react';
import { Description } from 'components/Description';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { SubTitle } from 'components/SubTitle';
import { ContentWrapper } from '../styles/Pages.styled';
import { ExerciseList } from 'components/ExerciseList';
import { ExerciseWrapper } from '../styles/Pages.styled';
import { useNavigate } from 'react-router-dom';
import { ExerciseItem } from 'components/ExerciseItem';
import exerciseData from '../MockData/exercises.json';
import girl from 'assets/active-girl.png';
import { useAppContext } from '../Store/AppContext';
import { ContinueButton } from 'components/ContinueButton';
import { Modal } from 'components/Modal';
import { UserData } from 'components/UserData';
const Physical = () => {
  const { selectedData, updateSelectedData } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClose = () => {
    setIsOpen(!isOpen);

    return setTimeout(() => {
      setIsOpen(false);
      navigate('/');
      updateSelectedData({
        page: 1,
        goal: null,
        measure: {},
        behaviors: null,
        exercise: null,
      });
    }, 3000);
  };

  const handleExerciseSelect = exercise => {
    updateSelectedData({ exercise });
  };
  return (
    <>
      <Section>
        <ContentWrapper>
          <Title>Physical exercise</Title>
          <Description>
            Physical exercise means a lot for a woman who wants to lose kilos
            and works at the office
          </Description>
        </ContentWrapper>

        <SubTitle>How active are you during the day?</SubTitle>
        <ExerciseWrapper>
          <img src={girl} alt="girl" loading="lazy" />
          {exerciseData && (
            <ExerciseList>
              {exerciseData.map(exercise => (
                <ExerciseItem
                  key={exercise.id}
                  description={exercise.descr}
                  isSelected={selectedData.exercise?.id === exercise.id}
                  onSelect={() => handleExerciseSelect(exercise)}
                />
              ))}
            </ExerciseList>
          )}
        </ExerciseWrapper>
        {selectedData?.exercise && (
          <ContinueButton onClick={onClose}>Done</ContinueButton>
        )}
      </Section>
      {isOpen && (
        <Modal onClick={onClose}>
          <UserData data={selectedData} />
        </Modal>
      )}
    </>
  );
};

export default Physical;
