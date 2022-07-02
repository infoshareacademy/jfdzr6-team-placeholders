import { useState, useEffect, Fragment } from "react";
import { db } from "../src/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Collapse } from "@mui/material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import Paper from "@mui/material/Paper";

export const Repairstatus = (props) => {
  const [repairs, setRepairs] = useState([]);
  const [openRowIndex, setOpenRowIndex] = useState(null);

  useEffect(() => {
    getRepairs();
  }, []);

  // const repairTasks = async () => {
  //   const repairs = await getDocs(collection('repairs'));
  //   setRepairs(repairs);
  // }

  const getRepairs = async () => {
    const clientDocRef = doc(db, "clients", props.userId);

    const clientData = await getDoc(clientDocRef);

    const promises = clientData.data().clientRepairs.map((repair) => {
      return getDoc(repair);
    });

    const repairsDocs = await Promise.all(promises);

    const repairs = repairsDocs.map((repair) => {
      return { ...repair.data(), id: repair.id };
    });

    // .filter((repair) => {
    //   return !repair.isDone;
    // });

    setRepairs(repairs);

    // setRepairs(repairs.map((repair) => {
    //   return { ...repair.data(), id: repair.id };
    // }));
  };

  // const pendingRepairsQuery = query(
  //   repairsCollection,
  //   where("isDone", "==", false)
  // );

  // getDocs(pendingRepairsQuery).then((QuerySnapshot) => {
  //   setRepairs(QuerySnapshot.docs.map((doc) => doc.data()));
  // });

  const handleCollapse = (index) => {
    if (openRowIndex === index) {
      setOpenRowIndex(null);
      return;
    }

    setOpenRowIndex(index);
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ bgcolor: "primary.main", color: "info.contrastText" }}
        >
          <Typography>Status zlecenia dla:</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead
                sx={{ bgcolor: "primary.main", color: "info.contrastText" }}
              >
                <TableRow>
                  <TableCell>
                    <b>Nr VIN</b>
                  </TableCell>
                  <TableCell>
                    <b>Marka</b>
                  </TableCell>
                  <TableCell>
                    <b>Opis</b>
                  </TableCell>
                  <TableCell>
                    <b>Status</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {repairs.map((row, index) => (
                  <Fragment key={row.carVin}>
                    <TableRow
                      component="th"
                      scope="row"
                      onClick={() => handleCollapse(index)}
                      style={{
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>{row.carVin}</TableCell>
                      <TableCell>{row.carBrand}</TableCell>

                      <TableCell>{row.selfText}</TableCell>
                      <TableCell>
                        {row.isDone ? "Ukończony" : "W trakcie"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell key={`${row.clientId}-${row.carVin}`}>
                        <Collapse in={openRowIndex === index}>
                          <ul style={{listStyleType:"none"}}>
                            {row.tasks.map((task) => (
                              <>
                                <li>
                                  <b>Usługa:</b> {task.task}, cena: {task.price}
                                </li>
                              </>
                            ))}
                            
                          </ul>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
