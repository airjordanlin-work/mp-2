import styled from "styled-components";
import {Cocktail} from "../interfaces/CocktailName.ts";

const AllCharsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv = styled.div<{ strAlcoholic: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 40%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) => (props.strAlcoholic === "Alcoholic" ? 'darkorange' : 'black')};
    color: ${(props) => (props.strAlcoholic !== "Alcoholic" ? 'white' : 'black')};
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
    transition: transform 0.3s ease;
    

    &:hover {
        transform: scale(1.05);
        /* Slightly enlarges the element on hover */
    }
`;



export default function Cocktails(props : { data:Cocktail[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Cocktail) =>
                    <SingleCharDiv key={char.idDrink} strAlcoholic={char.strAlcoholic}>
                        <h1>{char.strDrink}</h1>
                        <p>{char.strAlcoholic !== "Alcoholic" ? "(Non-Alcoholic)" : "Alcoholic"}</p>
                        <img src={char.strDrinkThumb} alt={`image of ${char.strDrink}`} />
                        <h1>{char.strInstructions}</h1>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}