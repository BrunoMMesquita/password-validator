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

    > div {
      border: 16px solid ${green}; /* Light grey */
      border-top: 16px solid ${darkGray}; /* Blue */
      border-radius: 50%;
      width: 70px;
      height: 70px;
      animation: spin 2s linear infinite;
      animation-name: ${rotate};
    }
`
