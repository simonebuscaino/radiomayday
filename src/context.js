import React, {useContext, useState} from 'react';
import { useMediaQuery } from 'react-responsive';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [loading, setLoading] = useState({
        is: false,
        text: ""
    });
    const [error, setError] = useState({
        is: false,
        status: null,
        text: ""
    });
    const [message, setMessage] = useState({
        is: false,
        type: "",
        text: ""
    });

    const clearMessage = () => {
        setTimeout(() => {
            setMessage("")
        }, 10000);
    }

    // Converte la data della measure nel formato italiano
    const convertDate = (dateToConvert) => {
        let originFormatDate = new Date(dateToConvert);
        let dd = String(originFormatDate.getDate()).padStart(2, '0');
        let mm = String(originFormatDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = originFormatDate.getFullYear();
        
        return dd + "/" + mm + "/" + yyyy;
    } 

    // Converte la data della measure nel formato italiano
    const convertTime = (dateToConvert) => {
        let originFormatDate = new Date(dateToConvert);
        let hh = String(originFormatDate.getHours());
        let mm = String(originFormatDate.getMinutes()).padStart(2, '0');
        
        return hh + ":" + mm;
    } 

    const isMobileDisplay = useMediaQuery({ query: `(max-width: 760px)` });
    
    return (
        <AppContext.Provider 
            value={{
                loading,
                setLoading,
                message,
                setMessage,
                clearMessage,
                error,
                setError,
                convertDate,
                convertTime,
                isMobileDisplay,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};