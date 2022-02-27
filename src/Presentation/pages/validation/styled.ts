import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    margin-top: 4rem;
    width: 30%;

    h1,
    input{
      margin-bottom: 2rem;
    }
  }
`;

export const WrapperButton = styled.div`
  margin-top: 4rem;
`;
