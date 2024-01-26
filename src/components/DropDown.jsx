import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppContext } from '../Store/AppContext';
import { ContinueButton } from './ContinueButton';
import { handleContinue } from '../utils/handleContinue';
import { Description } from 'components/Description';
import { Title } from 'components/Title';
import { ContentWrapper } from '../styles/Pages.styled';
import {
  StyledDropButton,
  StyledDropContainer,
  StyledButtonWrapper,
  StyledField,
  StyledInput,
  StyledError,
  StyledForm,
} from 'styles/DropDown.styled';
export const DropdownForm = () => {
  const { selectedData, updateSelectedData } = useAppContext();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [isEmptyHeight, setIsEmptyHeight] = useState(false);
  const [isEmptyWeight, setIsEmptyWeight] = useState(false);

  useEffect(() => {
    setIsEmptyHeight(height === '');
  }, [height]);

  useEffect(() => {
    setIsEmptyWeight(weight === '');
  }, [weight]);

  const handleUnitChange = selectedUnit => {
    setCurrent(selectedUnit);
    setHeight('');
    setWeight('');
    setIsEmptyHeight(false);
    setIsEmptyWeight(false);
  };
  const handleHeightChange = e => {
    setHeight(e.target.value);
  };

  const handleWeightChange = e => {
    setWeight(e.target.value);
  };

  const handleButtonClick = () => {
    if (!height || !weight) {
      setIsEmptyHeight(height === '');
      setIsEmptyWeight(weight === '');
      return;
    }
    const nextPage = selectedData.page > 4 ? 1 : selectedData.page + 1;
    handleContinue(nextPage, updateSelectedData, navigate);
    updateSelectedData({
      measure: {
        height: parseFloat(height),
        weight: parseFloat(weight),
      },
    });
    setHeight('');
    setWeight('');
    setIsEmptyHeight(false);
    setIsEmptyWeight(false);
  };

  return (
    <>
      <StyledDropContainer>
        <StyledButtonWrapper>
          <StyledDropButton
            isSelected={current === 'imperial'}
            onClick={() => handleUnitChange('imperial')}
          >
            Imperial
          </StyledDropButton>
          <StyledDropButton
            isSelected={current === 'metric'}
            onClick={() => handleUnitChange('metric')}
          >
            Metric
          </StyledDropButton>
        </StyledButtonWrapper>

        {current && (
          <StyledForm>
            {current === 'imperial' ? (
              <>
                <StyledField>
                  {isEmptyHeight && (
                    <StyledError>please enter your height</StyledError>
                  )}
                  <StyledInput
                    type="text"
                    min={120}
                    max={250}
                    placeholder="Height (ft)"
                    value={height}
                    onChange={handleHeightChange}
                    required
                  />
                </StyledField>
                <StyledField>
                  {isEmptyWeight && (
                    <StyledError>please enter your weight</StyledError>
                  )}
                  <StyledInput
                    type="text"
                    min={30}
                    max={200}
                    placeholder="Weight (lbs)"
                    value={weight}
                    onChange={handleWeightChange}
                    required
                  />
                </StyledField>
              </>
            ) : (
              <>
                <StyledField>
                  {isEmptyHeight && (
                    <StyledError>please enter your height</StyledError>
                  )}
                  <StyledInput
                    type="text"
                    min={120}
                    max={250}
                    placeholder="Height (cm)"
                    value={height}
                    onChange={handleHeightChange}
                    required
                  />
                </StyledField>
                <StyledField>
                  {isEmptyWeight && (
                    <StyledError>please enter your weight</StyledError>
                  )}
                  <StyledInput
                    type="text"
                    min={30}
                    max={200}
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={handleWeightChange}
                    required
                  />
                </StyledField>
              </>
            )}
          </StyledForm>
        )}
      </StyledDropContainer>
      <ContentWrapper>
        <Title>Measure Yourself</Title>
        <Description>What are your height and body weight?</Description>
      </ContentWrapper>
      {height && weight && (
        <ContinueButton onClick={handleButtonClick}>Continue</ContinueButton>
      )}
    </>
  );
};
