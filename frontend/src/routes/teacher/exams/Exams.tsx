import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import React from "react";
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

const ActionButton: React.FC = () => {
  return (
    <>
      <Button style={{ marginRight: "8px"}}>Modifica</Button>
      <Button> Sessioni </Button>
    </>
  );
};
export const Exams: React.FC = () => {
  return (
    <>
    <div>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'end'}}>
        <Button>Aggiungi Esame</Button>
      </Box>
    </div>
          
    <Table aria-label="basic table">
    <thead>
      <tr>
        <th style={{ width: '40%' }}> 
         <Typography level="h1">Esami</Typography>
        </th>
        <th>
         <Typography level="h4">Classe</Typography>
        </th>
        <th>
        <Typography level="h4">Azioni</Typography>
        </th>
      
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Storia</td>
        <td> <Chip>Suse</Chip> Cookie </td>
        <td>
         <ActionButton></ActionButton>
        </td>  
      </tr>
      <tr>
        <td>Geografia</td>
        <td> <Chip>Suse</Chip> Cookie </td>
        <td>
         <ActionButton></ActionButton>
        </td>  
      </tr>
      <tr>
        <td>Matematica</td>
        <td> <Chip>Suse</Chip> Cookie </td>
        <td>
         <ActionButton></ActionButton>
        </td>  

      </tr>
      <tr>
        <td>Italiano</td>
        <td> <Chip>Suse</Chip> Cookie </td>
        <td>
         <ActionButton></ActionButton>
        </td>  
      </tr>
      <tr>
        <td>Inglese</td>
        <td> <Chip>Suse</Chip> Cookie </td>
        <td>
         <ActionButton></ActionButton>
        </td>
          
      </tr>
    </tbody>
  </Table>
 </>
 );
  
  

};
