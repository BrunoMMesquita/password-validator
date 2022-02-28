import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > div {
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

export const MessageError = styled.div`
  span, p {
    color: ${props => props.theme.colors.error};
  }

  p {
    margin-left: 2rem;
  }
`

export const WrapperButton = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;

  button {
    width: 12rem;
  }

  @media (max-width: 800px) {
    margin-top: 8rem;

    button {
      width: 100%;
    }
  }
`;
