import { useState, useEffect, Fragment } from "react";
import { db } from "../src/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
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

export const Repairstatus = () => {
  const [repairs, setRepairs] = useState([]);
  const [openRowIndex, setOpenRowIndex] = useState(null);

  useEffect(() => {
    getRepairs();
  }, []);

  // const repairTasks = async () => {
  //   const repairs = await getDocs(collection('repairs'));
  //   setRepairs(repairs);
  // }

  const getRepairs = () => {
    const repairsCollection = collection(db, "repairs");
    const pendingRepairsQuery = query(
      repairsCollection,
      where("isDone", "==", false)
    );

    getDocs(pendingRepairsQuery).then((QuerySnapshot) => {
      setRepairs(QuerySnapshot.docs.map((doc) => doc.data()));
    });
  };

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
          <Typography>
            <h4>Status zlecenia dla:</h4>
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{}}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                {repairs.map((row, index) => (
                  <Fragment key={row.carVin}>
                    <TableRow
                      onClick={() => handleCollapse(index)}
                      style={{
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>
                        {row.carVin}
                      </TableCell>
                      <TableCell>
                        {row.carBrand}
                      </TableCell>
                      <TableCell>
                        {row.isDone ? "Done" : "Pending"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      {row.tasks.map((task, i) => (
                        <TableCell key={`${row.clientId}-${row.carVin}-${i}`}>
                          <Collapse in={openRowIndex === index}>
                            {task.task}
                            {task.price}
                            
                          </Collapse>
                        </TableCell>
                      ))}
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

// return (
//   <TableContainer component={Paper}>
//     <Table sx={{ width: 1 }} aria-label="simple table">
//       <TableHead>
//         <TableRow
//           style={{
//             backgroundColor: "#BDC3C7",
//           }}
//         >
//           <TableCell>
//             <b>VIN</b>
//           </TableCell>
//           <TableCell>
//             <b>Brand</b>
//           </TableCell>
//           <TableCell>
//             <b>Status</b>
//           </TableCell>
//           <TableCell>
//             <b>Data dodania</b>
//           </TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {repairs.map((row, index) => (
//           <Fragment key={row.carVin}>
//             <TableRow
//               onClick={() => handleCollapse(index)}
//               style={{
//                 backgroundColor: openRowIndex === index ? "#7F8C8D" : "#BDC3C7",
//                 cursor: "pointer",
//               }}
//               sx={{ "&:last-child td, &:last-child th": { border: 50 } }}
//             >
//               <TableCell>{row.carVin}</TableCell>
//               <TableCell>{row.carBrand}</TableCell>
//               <TableCell>{row.isDone ? "Done" : "Pending"}</TableCell>
//               <TableCell>{ }</TableCell>
//             </TableRow>
//             <TableRow>
//               {row.tasks.map((task, i) => (
//                 <TableCell key={`${row.clientId}-${row.carVin}-${i}`}>
//                   <Collapse in={openRowIndex === index}>
//                     <i>
//                       {task.task}
//                       {task.price}
//                     </i>
//                   </Collapse>
//                 </TableCell>
//               ))}
//             </TableRow>
//           </Fragment>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// );
