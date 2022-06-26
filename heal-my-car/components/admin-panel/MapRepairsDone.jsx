import {
  Accordion,
  AccordionSummary,
  ListItemButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

export const MapRepairsDone = ({ clients }) => {
  return (
    <>
      {clients
        .filter(({ clientRepairs }) => {
          return clientRepairs.some(({ isDone }) => isDone);
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
                <div>
                  <Typography
                    component={"div"}
                    variant="body1"
                    sx={{ margin: "20px" }}
                  >
                    {client.clientRepairs
                      .filter(({ isDone }) => isDone)
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
                              {`Pojazd: ${repair.carBrand} VIN: ${repair.carVin}`}
                              {repair.tasks.map((task, index) => {
                                return (
                                  <>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        fontWeight: "normal",
                                      }}
                                    >
                                      <p>{`${task.task}`}</p>
                                    </div>
                                  </>
                                );
                              })}
                              {`Koszt usługi: ${
                                repair.totalCost != null
                                  ? repair.totalCost + " zł"
                                  : "usługa nie wyceniona"
                              }`}
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
