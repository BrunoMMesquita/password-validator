import styled from 'styled-components'

export const ButtonOta = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  border: none;
  padding: 0.625rem;
`;
