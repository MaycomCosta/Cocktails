import styled from 'styled-components'

export const Article = styled.article`
  background: white;
  margin-bottom: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.25rem;
  transition: 3s linear all;

  :hover {
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  }

  img {
    height: 20rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    width: 100%;
    display: block;
  }
`
export const CocktailFooter = styled.div`
  padding: 1.5rem;

  h3, h4, p {
    margin-bottom: 0.3rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-weight: 400;
    line-height: 1;
    font-size: 1.5rem;
  }

  p {
    color: #afafaf;
    margin-bottom: 0.5rem;
  }

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
`