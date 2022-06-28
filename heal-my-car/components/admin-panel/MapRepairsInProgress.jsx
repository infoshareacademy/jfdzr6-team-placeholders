import {
  Accordion,
  AccordionSummary,
  ListItemButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { SendRepairDone } from "./SendRepairDone";

export const MapRepairsInProgress = ({ clients, getClients }) => {
  return (
    <>
      {clients
        .filter(({ clientRepairs }) => {
          return clientRepairs.some(({ isDone }) => !isDone);
        })
        .map((client, index) => {
          return (
            <>
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemButton>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                    >{`Klient: ${client.name} ${client.lastName}`}</Typography>
                  </ListItemButton>
                </AccordionSummary>
                <div className="clientsData">
                  <Typography
                    component={"div"}
                    display="flex"
                    sx={{ paddingLeft: "15px", justifyContent: "start" }}
                  >
                    <AlternateEmailIcon
                      sx={{ color: "#d90000", paddingRight: "10px" }}
                    />
                    {`email: ${client.email}`}
                  </Typography>
                  <div>
                    <Typography
                      component={"div"}
                      variant="body1"
                      sx={{ margin: "20px" }}
                    >
                      {client.clientRepairs
                        .filter(({ isDone }) => !isDone)
                        .map((repair, index) => {
                          return (
                            <AccordionSummary sx={{ width: "60vw" }}>
                              <DirectionsCarFilledIcon
                                sx={{ color: "#d90000", paddingLeft: "20px" }}
                              />
                              <Typography
                                component={"div"}
                                display="block"
                                sx={{
                                  width: "60vw",
                                  fontWeight: "bold",
                                  paddingLeft: "10px",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  {`${repair.carBrand}`}
                                  {<br />}
                                  {`VIN: ${repair.carVin}`}
                                  <SendRepairDone
                                    clients={clients}
                                    repair={repair}
                                    getClients={getClients}
                                    id={repair.id}
                                  />
                                </div>
                                {repair.tasks.map((task, index) => {
                                  return (
                                    <>
                                      <p
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          fontWeight: "normal",
                                        }}
                                      >{`${index + 1}. ${task.task}`}</p>
                                    </>
                                  );
                                })}
                              </Typography>
                            </AccordionSummary>
                          );
                        })}
                    </Typography>
                  </div>
                </div>
              </Accordion>
            </>
          );
        })}
    </>
  );
};
