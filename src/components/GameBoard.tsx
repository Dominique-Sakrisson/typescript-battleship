import react, {FC, useEffect, useState} from 'react';
import styled, { createGlobalStyle, keyframes, css } from "styled-components";

type GameBoardProps = {
    initialRow?: number,
    initialCol?: number
}
const GameBoard:FC<GameBoardProps> = ({initialRow = 10, initialCol= 10}) => {
    const [row, setRow] = useState(initialRow);
    const [col, setCol] = useState(initialCol);
    //sett board X x Y
    const [board, setBoard] = useState(Array.from({length: row}, 
        (element, index) => Array.from({length: col}, 
            ( element2, index2) => ({
                x: index, y: index2, type: rollTypeStatus()})
            )));
    //keep track of the moves made
    //moves will have an x value, y value, and a hit value

    const [moves, setMoves] = useState([]);
    
interface IProps {
    active? : boolean
}
    const ListItem = styled.li<IProps>`
    --alive: rgba(100,100,255,.8);
    --wrecked: rgba(0, 0, 180,.8);
    width: '7%';
        padding: '1rem';
        border: '1px solid black';
        ${props => props.active ? 'background-color: var(--wrecked);' : 'background-color: var(--alive);'}
        &:hover{
            
        }
    `;
    
    useEffect(()=> {
        
    },[])

    useEffect(()=> {
        
    },[board])
function getTypeStatus(type: string){
    if(type === 'empty') return true;
    if(type === 'hit') return false;
}
//this is for testting
function rollTypeStatus(){
    if(Math.random() * 3 > 2) return 'hit';
    return 'empty';
}

   const buildBoard = () => {
        console.log(board);
        const rows = board.map((rowItem, index) => {
            const col = rowItem.map((colItem, index2) => {
                return (
                    <ListItem 
                        active={getTypeStatus(colItem.type)} 
                        style={{
                        width: '7%',
                        padding: '1rem',
                        border: '1px solid black',            
                    }}>{colItem.x},{colItem.y},{colItem.type}</ListItem>
                    )
                })
                return(
                    <ul style={{
                        display: "flex", 
                        flexWrap: "wrap",
                        listStyle: 'none',
                    }}>
                        {col}
                    </ul>
                    
                    )
                })
        return rows;
    }    
    return(<>
        {buildBoard()}
    </>
     )
}

export default GameBoard;
