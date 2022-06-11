import RejectPricing from "../RejectPricing";
import SubmitPricing from "../SubmitPricing";
import MapSingleRepair from "./MapSingleRepair";

const MapRepairs = ({
  getRepairs,
  repair,
  setEnabledEdits,
  enabledEdits,
  updateTaskPrice,
}) => {
  return (
    <>
      <li key={repair.id}>
        <p>Marka: {repair.carBrand}</p>
        <p>VIN: {repair.carVin}</p>
        Naprawy:{" "}
        <ul>
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
        </ul>
        <SubmitPricing getRepairs={getRepairs} repair={repair} />
        <RejectPricing getRepairs={getRepairs} repair={repair} />
      </li>
    </>
  );
};
export default MapRepairs;
