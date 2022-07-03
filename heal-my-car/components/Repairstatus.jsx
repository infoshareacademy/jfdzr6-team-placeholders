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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ConstructionIcon from "@mui/icons-material/Construction";
import SyncIcon from "@mui/icons-material/Sync";

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
      <Accordion
        style={{
          width: "auto",
          backgroundColor: "#41506e",
          borderRadius: "35px",
          borderBottom: "15px solid #41506e",
        }}
      >
        <AccordionSummary
          style={{
            backgroundColor: "#b35797",
            width: "auto",
            borderTop: "2px solid #ba58e6",
            borderBottom: "2px solid #ba58e6",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ color: "info.contrastText" }}
        >
          <Typography sx={{ color: "#ECF0F1" }}>
            <b>Rozwiń moje aktualne zlecenia</b>
            <ConstructionIcon
              sx={{
                marginLeft: open ? 1 : "auto",
                marginInlineStart: open ? 1 : "auto",
                marginBottom: open ? -0.5 : "auto",
                color: "#fff",
                minWidth: 10,
                mr: open ? 5 : "auto",
                justifyContent: "center",
              }}
            />
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "400" }} aria-label="simple table">
              <TableHead
                style={{
                  backgroundColor: "#b35797",
                  borderTop: "1.5px solid #ba58e6",
                  borderBottom: "1.5px solid #ba58e6",
                  borderLeft: "1.5px solid #ba58e6",
                  borderRight: "1.5px solid #ba58e6",
                  borderRadius: "5px",
                }}
              >
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>
                    <b>Nr VIN</b>
                    <BuildCircleIcon
                      sx={{
                        marginLeft: open ? 1 : "auto",
                        marginInlineStart: open ? 1 : "auto",
                        marginBottom: open ? -0.5 : "auto",
                        color: "#fff",
                        minWidth: 10,
                        mr: open ? 5 : "auto",
                        justifyContent: "center",
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    <b>Marka</b>
                    <DirectionsCarIcon
                      sx={{
                        marginLeft: open ? 1 : "auto",
                        marginInlineStart: open ? 1 : "auto",
                        marginBottom: open ? -0.5 : "auto",
                        color: "#fff",
                        minWidth: 5,
                        mr: open ? 5 : "auto",
                        justifyContent: "center",
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}></TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    <b>Status</b>
                    <CarRepairIcon
                      sx={{
                        marginLeft: open ? 1 : "auto",
                        marginInlineStart: open ? 1 : "auto",
                        marginBottom: open ? -0.5 : "auto",
                        color: "#fff",
                        minWidth: 10,
                        mr: open ? 5 : "auto",
                        justifyContent: "center",
                      }}
                    />
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
                        backgroundColor:
                          openRowIndex === index ? "#41506e" : "#252e42",
                        borderTop: "1.5px solid #ba58e6",
                        borderBottom: "1.5px solid #ba58e6",
                        borderLeft: "1.5px solid #ba58e6",
                        borderRight: "1.5px solid #ba58e6",
                        width: "atuo",
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>
                        <b style={{ color: "#fff" }}>{row.carVin}</b>
                      </TableCell>
                      <TableCell>
                        <b style={{ color: "#fff" }}>{row.carBrand}</b>
                      </TableCell>

                      <TableCell>
                        <br />
                      </TableCell>
                      <TableCell>
                        <b style={{ color: "#fff" }}>
                          {row.isDone ? "Ukończony!" : "W trakcie..."}
                        </b>
                        <SyncIcon
                          sx={{
                            marginLeft: open ? 1 : "auto",
                            marginInlineStart: open ? 1 : "auto",
                            marginBottom: open ? -0.5 : "auto",
                            color: "#fff",
                            minWidth: 10,
                            mr: open ? 5 : "auto",
                            justifyContent: "center",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell key={`${row.clientId}-${row.carVin}`}>
                        <Collapse in={openRowIndex === index}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <ul style={{ listStyleType: "none" }}>
                              {row.tasks.map((task) => (
                                <>
                                  <li
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-start",
                                    }}
                                  >
                                    <b>Usługa:</b> {task.task}
                                  </li>

                                  <ul>
                                    <li style={{ listStyleType: "none" }}>
                                      <b>Cena:</b>
                                      {"  "}
                                      {task.price}
                                      {",00"}
                                      {"zł"}💰
                                    </li>
                                    <br />
                                  </ul>
                                </>
                              ))}
                            </ul>
                            <div>
                              <div>
                                <b>Opis dodatkowy:</b> {row.selfText}
                              </div>
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
