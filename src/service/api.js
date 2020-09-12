import fetch from "isomorphic-fetch";
const limit = 50;

/**
 *
 * @param filterURL
 * @returns {Promise<void> | Promise<T | void>}
 */
export function fetchFeeds( filterURL = "https://api.spaceXdata.com/v3/launches?limit=100") {
    return fetch( filterURL )
        .then( res => res.json( ) )
        .then( res => res)
        .catch(error => console.log(error))
}
