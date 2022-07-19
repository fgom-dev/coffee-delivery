import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .bannerText {
    display: flex;
    flex-direction: column;
    max-width: 36.75rem;
    gap: 4.125rem;

    .bannerTextTitle {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: ${(props) => props.theme.baseTitle};
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        color: ${(props) => props.theme.baseSubtitle};
      }
    }

    .bannerTextContent {
      display: flex;
      gap: 2.5rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }

      p {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        font-family: 'Roboto', sans-serif;
        color: ${(props) => props.theme.baseText};

        span {
          display: flex;
          padding: 0.5rem;
          color: ${(props) => props.theme.white};
          border-radius: 50%;
          background-color: ${(props) => props.theme.yellow};
        }
      }
    }
  }
`
