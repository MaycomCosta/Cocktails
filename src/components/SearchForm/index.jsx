import * as C from './styled'
import { useRef, useEffect } from 'react'

import { useDrinks } from '../../hooks/DrinksContext'

export const SearchForm = () => {
  const { setSearchTerm } = useDrinks()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

    return (
        <C.Section>
            <C.Form onSubmit={handleSubmit}>
                <C.FormControl>
                    <label>Search Your Favorite Cocktail</label>
                    <input 
                        type='text'
                        name='name'
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </C.FormControl>
            </C.Form>
        </C.Section>
    )
}