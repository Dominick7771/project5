import {useCallback, useMemo} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {apiActions} from "../modules/actions/apiActions";

const useFetch = endpoint => {
    const dispatch = useDispatch();
    const selectApiState = state => state.apiReducer.films;
    const apiState = useSelector(selectApiState, shallowEqual);

    const performFetch = useCallback(data => dispatch(apiActions.fetch(endpoint, data)), [endpoint, dispatch]);
    const response = useMemo(() => apiState, [apiState, endpoint]);

    return {response, performFetch};
}

export default useFetch;