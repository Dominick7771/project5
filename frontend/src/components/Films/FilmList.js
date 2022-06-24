import React, {useEffect, useState} from 'react';

const FilmList = ({title, year, type, poster}) => {

    const [img, setImg] = useState(false)

    useEffect(() => {
        checkImgSrc(poster)
    }, [])

    const improveYear = year => {
        let date = new Date(year * 1000);
        let options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' };
        return date.toLocaleDateString("en-US", options)
    }

    const checkImgSrc = src => {
        const img = new Image();
        img.onload = function () { setImg(true) }
        img.src = src;
    }

    return (
        <div className={"card mb-3 maxWidth"}>
            <div className={"row g-0"}>
                <div className={"col-md-4"}>
                    {img ? <img src={poster} alt={title} className={"img-fluid rounded-start"}/> : <></>}
                </div>
                <div className={'col-md-8'}>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>{title}</h5>
                        <p className={"card-text"}>{type}</p>
                        <p className={"card-text"}><small className={"text-muted"}>{improveYear(year)}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmList;



