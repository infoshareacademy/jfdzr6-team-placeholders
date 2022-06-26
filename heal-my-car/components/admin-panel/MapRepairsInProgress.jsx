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
                      variant="body1"
                      sx={{ fontWeight: "bold" }}
                    >{`Klient: ${client.name} ${client.lastName}`}</Typography>
                  </ListItemButton>
                </AccordionSummary>
                <AlternateEmailIcon
                  sx={{ color: "#d90000", paddingLeft: "10px" }}
                />
                <Typography variant="div" sx={{ fontWeight: "bold" }}>
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
                              sx={{ color: "#d90000" }}
                            />
                            <Typography
                              component={"div"}
                              variant="body2"
                              sx={{ width: "60vw", fontWeight: "bold" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                {`Pojazd: ${repair.carBrand} VIN: ${repair.carVin}`}
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
                                    >{`${task.task}`}</p>
                                  </>
                                );
                              })}
                            </Typography>
                          </AccordionSummary>
                        );
                      })}
                  </Typography>
                </div>
              </Accordion>
            </>
          );
        })}
    </>
  );
};
