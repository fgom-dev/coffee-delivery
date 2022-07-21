import styled from 'styled-components'

export const CheckoutPageContainer = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: space-between;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;

    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 1.125rem;
    }
  }
`

export const FieldsetEndereco = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme.baseCard};
  legend {
    display: flex;
    gap: 0.5rem;

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
`
