import axios from "axios";

const API_END_POINT = "https://swapi.co/api/people";

const fetchCharacters = () => {
    return (dispatch) => {
        axios.get(API_END_POINT)
            .then((response) => {
                dispatch(receiveCharacters(response.data.results));
            })
            .catch((error) => {
                console.warn("error", error);
            });
    };
};

const receiveCharacters = (payload) => {
    return {
        type: "RECEIVE_CHARACTERS",
        payload
    };
};

export {
    fetchCharacters
};