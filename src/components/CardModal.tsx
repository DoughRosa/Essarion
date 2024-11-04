import { Box } from "@mui/material";
import CharacterInterface from "../interfaces/CharacterInterface";

interface CardModalProps{
    open: boolean;
    onClose: ()=> void;
    card: CharacterInterface | null;
}

function CardModal({open, onClose, card}: CardModalProps){
    if (!open) return null;
    
    return(
    
            <Box  
            sx={{ position: 'fixed', right: '0px', top: '15px' }} 
                onMouseLeave={onClose}>
               <img src={card?.img} alt={card?.name}  style={{height: '400px', margin: '15px'}} /> 
            </Box>
    )
}

export default CardModal