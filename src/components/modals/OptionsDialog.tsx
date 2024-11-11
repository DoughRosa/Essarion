import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import CharacterInterface from '../../interfaces/CharacterInterface';

const options = ['Mover', 'Atacar', 'Jogar Uma Carta', 'Comprar Uma Carta'];

export interface OptionsDialogProps {
  open: boolean;
  selectedValue: CharacterInterface;
  onClose: (selectedValue: CharacterInterface) => void;
}

function OptionsDialog({open, onClose, selectedValue}: OptionsDialogProps) {
  if (!open) return null;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (selectedCharacter: CharacterInterface) => {
    onClose(selectedCharacter);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Selectione uma ação:</DialogTitle>
      <List sx={{ pt: 0 }}>
        {options.map((option) => (
          <ListItem disableGutters key={option}>
            <ListItemButton onClick={() => handleListItemClick(selectedValue)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={option} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default OptionsDialog;