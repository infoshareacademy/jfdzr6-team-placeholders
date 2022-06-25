import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RepairsInProgress } from './clientsData/RepairsInProgress';
import { Fragment } from 'react';
import { Repairstatus } from '../Repairstatus';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../src/Firebase';




export const ClientsAndRepairs = () => {
  const [repairs, setRepairs] = useState([]);
  const clientId = 666; //tutaj przypisać wartość JWT z informacją o id clienta

  useEffect(() => {
    getRepairs();
  }, []);
  const getRepairs = () => {
    const repairsCollection = collection(db, 'repairs');
    const pendingRepairsQuery = query(
      repairsCollection,
      // where('clientId', '==', clientId),
      where('isAccepted', '==', true),
      where('isDone', '==', false)
    );

    getDocs(pendingRepairsQuery).then((QuerySnapshot) => {
      setRepairs(QuerySnapshot.docs.map((doc) => doc.data()));
    });
  };
  return (
    <>
      <div>
        <Accordion>
          <RepairsInProgress />
          <AccordionDetails>
            {repairs.map((row, index) => (
              <Fragment >
                < Typography key={index}>
                  Komentarz: {row.selfText}</Typography>
                < Typography key={row}>Naprawy: {row.tasks.map((tasks, index) => (`
                  ${index + 1} ${tasks.task}: ${tasks.price} PLN`))}</Typography>
              </Fragment>
            ))}

          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      <p>tu tu tu</p>
      <RepairsInProgress />
      <p>up up up </p>
    </>
  );
}