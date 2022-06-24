import React, {useEffect} from 'react';
import Loader from "./Loader";
import useFetch from "../../hooks/useFetch";
import {FILMS} from "../../modules/endpoints";
import FilmList from "./FilmList";

const Index = () => {

    const {response, performFetch} = useFetch(FILMS);

    useEffect(() => {
        performFetch();
    }, [])

    const {loading, data} = response || {};

    function byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }

    return (
        <div>
            {loading || !data ? (
                    <Loader/>
                ) : (
                    data.results.sort(byField('Title')).map(({Title, Year, imdbID, Type, Poster}) =>
                        <FilmList key={imdbID} title={Title} year={Year} type={Type} poster={Poster}/>)
            )}
        </div>
    );
};

export default Index;