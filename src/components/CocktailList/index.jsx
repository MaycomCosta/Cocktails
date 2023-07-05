import * as C from './styled'
import { Cocktail } from '../index'
import { Loading } from '../Loading'

import { useDrinks } from '../../hooks/DrinksContext'

export const CocktailList = () => {
    const { cocktails, loading } = useDrinks()

    if (loading) {
        return <Loading />
    }

    if (cocktails.length < 1) {
        return (
          <C.SectionTitle>
            no cocktails matched your search criteria
          </C.SectionTitle>
        )
    }
    return (
        <C.Section>
            <C.SectionTitle>cocktails</C.SectionTitle>
            <C.CocktailsCenter>
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />
                })}
            </C.CocktailsCenter>
        </C.Section>
    )
}