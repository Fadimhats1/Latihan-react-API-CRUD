import { createContext } from "react";

export const URL_API = "http://localhost:3004/posts"

export const URL_image = "https://placeimg.com/640/480/";

export const dataApiContext = createContext();

import React from 'react'

const DataApiProvider = ({values, children}) => {
    return (
        <dataApiContext.Provider value={values}>
            {children}
        </dataApiContext.Provider>
    )
}

export default DataApiProvider