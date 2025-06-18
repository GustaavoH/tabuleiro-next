import Linha from "./linha";
import SubDivisao from "./SubDivisao";


export default function Tabuleiro() {
    return (
        <div>
            <Linha/>
            <Linha preta/>   
            <Linha/>
            <Linha preta/>   
            <Linha/>
            <Linha preta/>   
            <Linha/>
            <Linha preta/>
        </div>
    )
}