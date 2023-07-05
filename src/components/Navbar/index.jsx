import * as C from './styled'

// eslint-disable-next-line react/prop-types
export const Navbar = ({ currentPage }) => {
    return (
        <C.Nav>
            <C.NavCenter>
                <C.DivLink>
                    <h2>MixMaster</h2>
                </C.DivLink>
                <C.NavLinks>
                    <C.Links>
                        <C.NavItem currentPage={currentPage} className='nav-links' to='/'>
                          Home
                        </C.NavItem>
                    </C.Links>
                    <C.Links>
                        <C.NavItem currentPage={currentPage} className='nav-links' to='/about'>
                          About
                        </C.NavItem>
                    </C.Links>
                </C.NavLinks>
            </C.NavCenter>
        </C.Nav>
    )
}