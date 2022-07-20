import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  margin-top: 3.375rem;
  max-width: 16rem;

  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px;

  .cardContent {
    position: relative;
    top: -1.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding-inline: 1.25rem;
  }

  .tagList {
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme.yellowLight};
    border-radius: 100px;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.625rem;
    color: ${(props) => props.theme.yellowDark};
  }

  h3 {
    margin-top: 0.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubtitle};
  }

  .description {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;

    color: ${(props) => props.theme.baseLabel};
  }

  form {
    display: flex;
    flex-wrap: wrap;
  }
`
