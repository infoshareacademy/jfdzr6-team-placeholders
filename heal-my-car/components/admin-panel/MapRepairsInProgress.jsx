import {
  Accordion,
  AccordionSummary,
  ListItemButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { SendRepairDone } from "./SendRepairDone";

export const MapRepairsInProgress = ({ clients, getClients }) => {
  return (
    <>
      {clients.map((client, index) => {
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
              <div>
                <Typography
                  component={"div"}
                  variant="body1"
                  sx={{ margin: "20px" }}
                >
                  {client.clientRepairs.map((repair, index) => {
                    return (
                      <AccordionSummary sx={{ width: "60vw" }}>
                        <DirectionsCarFilledIcon sx={{ color: "#d90000" }} />
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
