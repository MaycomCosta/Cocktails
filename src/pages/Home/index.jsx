import { CocktailList, SearchForm } from '../../components/index'

import * as C from './styles'

export const Home = () => {
    return (
        <C.Main>
            <SearchForm />
            <CocktailList />
        </C.Main>
    )
}

