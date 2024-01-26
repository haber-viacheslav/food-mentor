import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  z-index: 10;
  background-color: ${props => props.theme.colors.lightGreen};
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  height: 480px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.light};
  z-index: 10;

  @media screen and (${props => props.theme.media.sm}) {
    width: 340px;
  }

  @media screen and (${props => props.theme.media.md}) {
    padding: 32px 32px 24px;
    width: 681px;
    height: 540px;
  }

  @media screen and (${props => props.theme.media.lg}) {
  }
`;

export const BtnCloseModal = styled.button`
  outline: none;
  position: absolute;
  border-radius: 50%;
  top: 12px;
  right: 12px;
  height: 24px;
  width: 24px;
  background-color: ${props => props.theme.colors.transparent};
  border: none;
  transition: 300ms background-color ease-in-out;
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.lightGreen};
    cursor: pointer;
  }
`;
