import styled, { keyframes } from 'styled-components';
import { darkGray, green } from '@/Presentation/styles/colors';

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  opacity: 0.7;
  background: #000;
`;

export const BaseSpiner = styled.div`
  border: 0.5rem solid ${green} ; /* Light grey */
  border-top: 0.5rem solid ${darkGray}; /* Blue */
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  animation: spin 2s linear infinite;
  animation-name: ${rotate};
`;
