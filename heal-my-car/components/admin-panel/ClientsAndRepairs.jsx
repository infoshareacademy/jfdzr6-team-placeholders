import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RepairsInProgress } from './clientsData/RepairsInProgress';
import Repairstatus from '../Repairstatus';
import { Fragment } from 'react';

export const ClientsAndRepairs = () => {
  return (
    <>
      <div>
        <Accordion>
          <RepairsInProgress />
          <AccordionDetails>
            <Typography>
              Polerowanie 500 zł <br />
              Wymiana ogumienia 250 zł <br />
              Koszt całkowity zleconej usługi: 750 zł
            </Typography>
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