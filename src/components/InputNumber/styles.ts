import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  background: ${(props) => props.theme.baseButton};
  padding: 0.5rem;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
  }

  input[type='number'] {
    border: 0;
    background: transparent;
    max-width: 1.25rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.baseTitle};
    text-align: center;
  }

  button[type='button'] {
    display: flex;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`
