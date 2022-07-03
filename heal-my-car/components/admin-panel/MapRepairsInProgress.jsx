import {
  Accordion,
  AccordionSummary,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { SendRepairDone } from "./SendRepairDone";

export const MapRepairsInProgress = ({ clients, getClients }) => {
  return (
    <>
      <div
        style={{
          height: "64px",
          width: "200%",
          color: "#fff",
        }}
      >
        Naprawy w toku
      </div>
      {clients
        .filter(({ clientRepairs }) => {
          return clientRepairs.some(({ isDone }) => !isDone);
        })
        .filter(({ clientRepairs }) => {
          return clientRepairs.some(({ totalCost }) => totalCost != null);
        })
        .map((client, index) => {
          return (
            <>
              <ListItemButton>
                <ListItemIcon>
                  <DirectionsCarFilledIcon sx={{ color: "#1976d2" }} />
                </ListItemIcon>
                {client.clientRepairs
                  .filter(({ isDone }) => !isDone)
                  .filter(({ totalCost }) => totalCost != null)
                  .map((repair, index) => {
                    return (
                      <ListItemText
                        primary={`Pojazd: ${repair.carBrand} | VIn: ${repair.carVin}`}
                      />
                    );
                  })}
              </ListItemButton>
            </>
          );
        })}
    </>
  );
};

{
  /* <div
                className="clientsData"
                style={{ marginTop: "20px", paddingBottom: "10px" }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <DirectionsCarFilledIcon sx={{ color: "#1976d2" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Klient: ${client.name} ${client.lastName}`}`}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircle sx={{ color: "#1976d2" }} />
                  </ListItemIcon>
                  <ListItemText primary={`Klient: `} />
                  <GetClientName clients={clients} repair={repair} />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <CarRepairIcon sx={{ color: "#1976d2" }} />
                  </ListItemIcon>
                  <ListItemText primary="Zlecone usługi:" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {repair.tasks.map((task, index) => (
                      <MapSingleRepair
                        key={index}
                        repair={repair}
                        task={task}
                        index={index}
                        enabledEdits={enabledEdits}
                        setEnabledEdits={setEnabledEdits}
                        updateTaskPrice={updateTaskPrice}
                      />
                    ))}
                  </List>
                </Collapse>

                <SendRepairDone
                                    clients={clients}
                                    repair={repair}
                                    getClients={getClients}
                                    id={repair.id}
                                  />
              </div> */
}
{
  /* <Accordion
                key={index}
                sx={{
                  display: "flex",
                  padding: "20px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    width: "40vw",
                    backgroundColor: "#2f3b52",
                    color: "#fff",
                  }}
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
                      sx={{ color: "#fff", paddingRight: "10px" }}
                    />
                    {`email: ${client.email}`}
                  </Typography>
                  <div>
                    <Typography component={"div"} variant="body1">
                      {client.clientRepairs
                        .filter(({ isDone }) => !isDone)
                        .filter(({ totalCost }) => totalCost != null)
                        .map((repair, index) => {
                          return (
                            <AccordionSummary>
                              <DirectionsCarFilledIcon sx={{ color: "#fff" }} />
                              <Typography
                                component={"div"}
                                display="block"
                                sx={{
                                  width: "18vw",
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
}; */
}
