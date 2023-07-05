import styled from 'styled-components'

export const Section = styled.section`
  padding: 5rem 0;

  text-align: center;


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

export const Drinks = styled.div`
  width: 85vw;
  max-width: 1170px;
  margin: 0 auto;
  text-align: left;

  img {
    border-radius: 0.25rem;
    width: 100%;
  } 

  p {
    font-weight: bold;
    text-transform: capitalize;
    line-height: 1.8;
    color: white;
  }

  span {
    margin-right: 0.5rem;
  }


  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 3rem;
    align-items: center;
  }
`

export const DrinksInfo = styled.div`
  padding-top: 2rem;


  .drink-data {
    background: #ff9d00;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: white;
  }

@media screen and (min-width: 992px) {
    padding-top: 0;
  }
`

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  letter-spacing: 0.3rem;
  text-align: center;
  margin-bottom: 3.5rem;
  margin-top: 1rem;
  color: #ff9d00;
`