import Cocktails from "./components/Cocktails.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Cocktail} from "./interfaces/CocktailName.ts";

const ParentDiv=styled.div`
    width: 100vw;
    height: auto;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){


    const [data, setData] = useState<Cocktail[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
            const {drinks} : {drinks: Cocktail[]} = await rawData.json();
            setData(drinks);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <Cocktails data={data}/>
        </ParentDiv>
    )
}