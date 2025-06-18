
import axios from 'axios';
import { useEffect, useState } from 'react';

const api_key = 'f63a97d3abb70a81ee06013d1c0c0aca';
const access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjNhOTdkM2FiYjcwYTgxZWUwNjAxM2QxYzBjMGFjYSIsIm5iZiI6MTc1MDE0OTM4My45NzMsInN1YiI6IjY4NTEyOTA3OTkzOTk4ODJmZGJiZDY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aKfdk2-FYiZIVJNmXNuKnm9C6iGbMxjb4owo7S6xu-s';
const api_url = 'https://api.themoviedb.org/3/search/movie';


function SearchBar() {
    const [sceltadellutente, setSceltaDellUtente] = useState('');
    const [results, setResults] = useState([]);
    useEffect(() => {
        // console.log('Valore input:', sceltadellutente);
        axios.get(`${api_url}?api_key=${api_key}&query=${sceltadellutente}`).then(resp => {
            setResults(resp.data.results)
        });

    }, [sceltadellutente]);

    return (
        <>
            <div className="search-bar my-3 d-flex flex-row-reverse">
                <input
                    type="text"
                    placeholder="Cerca un film..."
                    value={sceltadellutente}
                    onChange={(e) => setSceltaDellUtente(e.target.value)}
                />
            </div>
            {/* film */}
            <div className="results">
                {results.map((movie) => (
                    <div key={movie.id} className="result-item" >
                        <h3>{movie.title}</h3>
                        <p>{movie.original_language}</p>
                        <p>{movie.vote_average}</p>
                    </div>
                ))}
            </div>
            
        </>
    )


}

export default SearchBar;