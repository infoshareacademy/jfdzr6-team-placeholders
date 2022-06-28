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
                    {client.clientRepairs
                      .filter(({ isDone }) => isDone)
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
                              {`${repair.carBrand}`}
                              {<br />}
                              {` VIN: ${repair.carVin}`}
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
                                      <p>{`${index + 1}. ${task.task}`}</p>
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
