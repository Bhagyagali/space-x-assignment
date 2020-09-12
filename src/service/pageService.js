import {nextPage, prevPage,filterAction,storeData} from "../store/actions/pageAction";
import {fetchFeeds} from "./api";

// /**
//  *
//  * @param page
//  * @returns {function(*): Promise<unknown>}
//  */
// export const dispatchNextPage = ( page) => ( dispatch ) => {
//     return fetchFeeds(page ).then( res => dispatch( nextPage( res ) ) ) ;
// }

// /**
//  *
//  * @param page
//  * @returns {function(*): Promise<unknown>}
//  */
// export const dispatchPrevPage = ( page) => ( dispatch ) => {
//     return fetchFeeds(page ).then( res => dispatch( prevPage( res ) ) ) ;
// }
/**
 *
 * @param filterURL
 * @returns {function(*): Promise<unknown>}
 */
export const dispatchFilterAction = ( filterURL) => ( dispatch ) => {
    return fetchFeeds(filterURL ).then( res => dispatch( storeData( res ) ) ) ;
}

