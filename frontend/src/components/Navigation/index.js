import React from 'react';
import {useDispatch} from "react-redux";
import {stateActions} from "../../modules/actions/stateActions";

const Index = () => {

    const dispatch = useDispatch()

    const getValue = text => {
        dispatch(stateActions.changeNav('CHANGE_NAV', text.target.innerHTML))
    }

    return (
        <nav onClick={getValue}>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link">All</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Movie</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Series</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Game</button>
                </li>
            </ul>
        </nav>
    );
};

export default Index;