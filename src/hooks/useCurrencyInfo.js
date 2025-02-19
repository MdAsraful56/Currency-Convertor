import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        if (currency) { // Ensure currency is defined
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setCurrencyInfo(data[currency]);
                })
                .catch((error) => {
                    console.error("Failed to fetch currency info:", error);
                });
        }
    }, [currency]);

    return currencyInfo;
}


export default useCurrencyInfo;