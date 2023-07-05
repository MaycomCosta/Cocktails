import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const Nav = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  background: #01233e;


  @media screen and (max-width: 576px) {
    height: 8rem;
    display: flex;
  }
`
export const NavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 85vw;
  max-width: 1170px;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
`
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`
export const DivLink = styled.div`
  color: #FF9D00;
  font-size: 30px;
`
export const Links = styled.div`
  color: white;

  :hover {
    color: #FF9D00;
    transition: 1s;
  }
`

export const NavItem = styled(Link)`
  color: ${props => props.currentPage === props.to ? '#FF9D00' : 'white'};
  text-transform: capitalize;
  margin-right: 0.5rem;
  text-decoration: none;
  transition: all 0.3s linear;
    
  :hover {
    color: #FF9D00;
  }
`;
