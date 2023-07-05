import * as C from './styled'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export const Cocktail = ({ image, name, id, info, glass }) => {
    
    return (
        <C.Article>
            <div>
                <img src={image} alt={name}/>
            </div>
            <C.CocktailFooter>
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className='btn-link'>
                details
                </Link>
            </C.CocktailFooter>
        </C.Article>
    )
}

Cocktail.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
    glass: PropTypes.string.isRequired,
}