import styled from 'styled-components'

export const CheckoutPageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  form {
    display: grid;
    grid-template-columns: 40rem 1fr;
    grid-gap: 2rem;

    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 1.125rem;
    }
  }

  .enderecoPagamento {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const FieldsetForm = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.baseCard};

  .titulo {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    .mapPinLine {
      color: ${(props) => props.theme.yellowDark};
    }

    .currencyDollar {
      color: ${(props) => props.theme.purple};
    }

    h3 {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: ${(props) => props.theme.baseSubtitle};
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseText};
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input[type='text'] {
      border: 1px solid ${(props) => props.theme.baseButton};
      border-radius: 4px;
      background: ${(props) => props.theme.baseInput};
      padding: 0.75rem;
    }

    input[type='text']::placeholder {
      color: ${(props) => props.theme.baseLabel};
      font-size: 0.875rem;
    }

    #cep {
      width: 12.5rem;
    }

    #numero {
      width: 12.5rem;
    }
  }
`
