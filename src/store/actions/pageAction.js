import {NEXT_PAGE, PREV_PAGE,FILTER_ACTION,STORE_DATA} from "./action.constant";

// export const nextPage = ( data ) => ( {
//     type: NEXT_PAGE,
//     data,
// } );

// export const prevPage = ( data ) => ( {
//     type: PREV_PAGE,
//     data,
// } );
export const filterAction = ( data ) => ( {
    type: FILTER_ACTION,
    data,
} );
export const storeData = ( data ) => ( {
    type: STORE_DATA,
    data,
} );