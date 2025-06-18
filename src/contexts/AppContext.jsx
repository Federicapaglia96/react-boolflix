import { createContext, useState } from "react"

const SearchContext= createContext()

const SearchTextProvider = ({children}) => {

    const [search, setSearch] = useState([]);
    
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

const useSearchContext = () => {
  return useContext(SearchContext);
};

export { SearchTextProvider, useSearchContext };

