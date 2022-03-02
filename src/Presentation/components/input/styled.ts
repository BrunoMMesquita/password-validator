import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  input {
    width: 100%;
    color: ${props => props.theme.colors.text};
    background: transparent;
    padding: 0.625rem;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.primary};
    font-size: 1rem;

    &:focus{
      border-bottom: 2px ${props => props.theme.colors.primary} solid;
      outline: none;
    }
  }

  a {
    position: absolute;
    right: 3%;
    top: 0.7rem;
    cursor: pointer;
    font-weight: 500;
    color: ${props => props.theme.colors.text};

    @media (max-width: 450px) {
      right: 5%;
    }
  }
`
