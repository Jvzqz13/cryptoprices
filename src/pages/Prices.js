import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Prices (props){
    const apiKey = "73AFD794-4E99-46BB-AFF6-2C3B8F6459B9";
    const params = useParams(); 
    const symbol = params.symbol;

    const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    
    //state to hold the coin data
    const [ coin, setCoin ] = useState("null");

    // useEffect to run getCoin function when component mounts
    useEffect(()=> { 

        // function get coin
        const getCoin = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCoin(data);
                
            } catch (error) {
                console.log(error);
            }
        };
        getCoin();
    }, [url])

    // loaded function for when data is fetch
    const loaded = () => {
        return (
        <div>
            <h1> {coin.asset_id_base}/{coin.asset_id_quote} </h1>
            <h2> {coin.rate} </h2>
        </div>
    )}
    // function for when data doesnt exist
    const loading = () => {
        return (
            <h1> Loading.... </h1>
        )
    }

    return coin && coin.rate ? loaded() : loading();
};

export default Prices;