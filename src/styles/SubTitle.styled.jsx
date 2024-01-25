import styled from 'styled-components';

export const StyledSubTitle = styled.h3`
  margin-bottom: 15px;
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 1.71;
  letter-spacing: 0.2px;
`;
