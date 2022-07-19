import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;

      background: ${(props) => props.theme.purpleLight};
      border-radius: 6px;

      color: ${(props) => props.theme.purpleDark};
    }

    button {
      display: flex;
      border: 0;
      padding: 0.5rem;
      border-radius: 6px;
      background: ${(props) => props.theme.yellowLight};
      color: ${(props) => props.theme.yellowDark};
      cursor: pointer;
    }
  }
`
