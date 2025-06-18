
import axios from 'axios';
import { useEffect, useState } from 'react';

const api_key = 'f63a97d3abb70a81ee06013d1c0c0aca';
const access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjNhOTdkM2FiYjcwYTgxZWUwNjAxM2QxYzBjMGFjYSIsIm5iZiI6MTc1MDE0OTM4My45NzMsInN1YiI6IjY4NTEyOTA3OTkzOTk4ODJmZGJiZDY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aKfdk2-FYiZIVJNmXNuKnm9C6iGbMxjb4owo7S6xu-s';
const api_url_Movie = 'https://api.themoviedb.org/3/search/movie';
const api_url_Serie = 'https://api.themoviedb.org/3/discover/tv';


function SearchBar() {
    //FILM
    const [sceltadellutente, setSceltaDellUtente] = useState('');
    const [results, setResults] = useState([]);

    //SERIE
    const [resultsSerie, setResultsSerie]=useState([]);


    useEffect(() => {
        //chiamata per i film
        axios.get(`${api_url_Movie}?api_key=${api_key}&query=${sceltadellutente}`).then(resp => {
            setResults(resp.data.results)
           
        });
        //chiamata per le serie tv
        axios.get(`${api_url_Serie}?api_key=${api_key}&query=${sceltadellutente}`).then(resp => {
            setResultsSerie(resp.data.results)
        });

    }, [sceltadellutente]);

    return (
        <>
            <div className="search-bar my-3 d-flex flex-row-reverse">
                <input
                    type="text"
                    style={{ margin: '16px', padding: '8px' }}
                    placeholder="Cerca un film..."
                    value={sceltadellutente}
                    onChange={(e) => setSceltaDellUtente(e.target.value)}
                />
            </div>
            {/* film */}
            <div className="container mt-4">
                <h2>Film</h2>
                <div className="d-flex flex-row overflow-auto pb-3">
                    {results.map((movie) => (
                        <div key={movie.id} className="card me-3" style={{ minWidth: "200px" }}>
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.original_language}</p>
                                <p className="card-text">{movie.vote_average}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2>Serie</h2>
                <div className="d-flex flex-row overflow-auto pb-3">
                    {resultsSerie.map((curSerie) => (
                        <div key={curSerie.id} className="card me-3" style={{ minWidth: "200px" }}>
                            <div className="card-body">
                                <h5 className="card-title">{curSerie.title}</h5>
                                <p className="card-text">{curSerie.original_language}</p>
                                <p className="card-text">{curSerie.vote_average}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )


}

export default SearchBar;