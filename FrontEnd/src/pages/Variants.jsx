import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CycleCard from './Cards/CycleCard';
import RaftingCard from './Cards/RaftingCard';
import SurfCard from './Cards/SurfCard';
import SafariCard from './Cards/SafariCard';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 215,
  padding: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor :'White',
}));

export default function Variants() {
  return (
    <Stack direction="row" spacing={5}>
      <DemoPaper square={false}><CycleCard/> </DemoPaper>
      <DemoPaper square={false}><SafariCard/></DemoPaper>
      <DemoPaper square={false}><SurfCard/></DemoPaper>
      <DemoPaper square={false}><RaftingCard/></DemoPaper>
           
    </Stack>
  );
}
