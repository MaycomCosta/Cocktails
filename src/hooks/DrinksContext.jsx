import { createContext, useContext, useState, useEffect, useCallback } from 'react'

import propTypes from 'prop-types'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const DrinksContext = createContext({})

const DrinksProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchDrinks = useCallback( async () => {
        setLoading(true)
        try{
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            console.log(data)
            const { drinks } = data
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
            setLoading(false)
        }catch (err) {
            console.log(err)
            setLoading(false)
        }
    }, [searchTerm])

    useEffect (() => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return (
        <DrinksContext.Provider
          value={{ loading, cocktails, searchTerm, setSearchTerm }}
        >
            { children }
        </DrinksContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDrinks = () => {
    const context = useContext(DrinksContext)
  
    if (!context) {
      throw new Error('useDrinks must be used with DrinksContext')
    }
  
    return context
  }

export { DrinksContext, DrinksProvider}

DrinksProvider.propTypes = {
    children: propTypes.node
  }