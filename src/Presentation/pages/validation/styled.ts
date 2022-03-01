import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    margin-top: 4rem;
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1080px) {
      width: 70%;
    }

    @media (max-width: 800px) {
      width: 90%;
      justify-content: space-between;
    }
  }
`;

export const WrapperInputs = styled.div`
  margin-top: 4rem;

  input{
    margin-bottom: 2rem;
  }
`;

export const MessageError = styled.ul`
  span, li {
    color: ${props => props.theme.colors.error};
  }

  li {
    margin-left: 2.5rem;
    padding: 0.3rem;
  }
`

export const WrapperButton = styled.div<{ success: boolean }>`
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    margin-right: 2rem;
    color: ${props => props.success ? props.theme.colors.primary : props.theme.colors.error}
  }

  button {
    width: 12rem;
  }

  @media (max-width: 800px) {
    margin-top: 8rem;
    flex-direction: column;

    span {
      margin: 1rem 0;
    }

    button {
      width: 100%;
    }
  }
`;
