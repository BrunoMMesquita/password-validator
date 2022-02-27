import styled from 'styled-components'

export const Container = styled.div`
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
`
