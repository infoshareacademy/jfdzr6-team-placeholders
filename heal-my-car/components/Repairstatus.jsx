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
          <Typography sx={{ color: "#ECF0F1" }}>
            <b>Rozwiń moje aktualne zlecenia</b>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "50vw" }} aria-label="simple table">
              <TableHead sx={{ bgcolor: "primary.main" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>
                    <b>Nr VIN</b>
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    <b>Marka</b>
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}></TableCell>
                  <TableCell sx={{ color: "#fff" }}>
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

                      <TableCell></TableCell>
                      <TableCell>
                        {row.isDone ? "Ukończony" : "W trakcie"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell key={`${row.clientId}-${row.carVin}`}>
                        <Collapse in={openRowIndex === index}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <ul style={{ listStyleType: "none" }}>
                              {row.tasks.map((task) => (
                                <>
                                  <li>
                                    <b>Usługa:</b> {task.task}, <b>cena:</b>{" "}
                                    {task.price} 💰
                                  </li>

                                  <br />
                                  
                                </>
                              ))}
                            </ul>
                            <div style={{display: "flex",
                              justifyContent: "flex-end"}}>
                            <div >Opis dodatkowy: {row.selfText}</div>
                            </div>
                          </div>
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
