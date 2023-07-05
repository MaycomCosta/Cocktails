import styled from 'styled-components'

export const Section = styled.section`
  padding: 5rem 0;

  display: flex;
  justify-content: center;

  .btn-link {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: white;
    border: 2px solid #ff9d00;
    padding: 0.45rem 0.8rem;
    display: inline-block;
    transition: all 0.3s linear;
    cursor: pointer;
    font-size: 0.8rem;
    background: #ff9d00;
    border-radius: 0.25rem;
    display: inline-block;
    text-decoration: none;

    :hover {
      background: white;
      color: #ff9d00;
    }
  }

  div {
    text-align: center;
    text-transform: capitalize;
  }

  h1 {
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 1rem;
    color: white;
  }
`