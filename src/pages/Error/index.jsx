import * as C from './styles'

import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <C.Section>
            <div>
                <h1>{`oops! it's a dead end`}</h1>
                <Link className='btn-link' to='/' >
                    back home
                </Link>
            </div>
        </C.Section>
    )
}