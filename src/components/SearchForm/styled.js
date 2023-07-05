import styled from 'styled-components'

export const Section = styled.section`
  padding: 5rem 0;
  margin-top: 1rem;
  padding-bottom: 0;
`
export const Form = styled.form`
  width: 75vw;
  margin: 0 auto;
  max-width: 40rem;
  background: white;
  padding: 2rem 2.5rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);

  label {
    display: block;
    margin-bottom: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: black;
  }

  input {
    width: 100%;
    border: none;
    border-color: transparent;
    background: #f1f5f8;
    border-radius: 0.25rem;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
`
export const FormControl = styled.div`

`