import MapSingleRepair from "./MapSingleRepair";

const MapRepairs = ({ repair, setEnabledEdits, enabledEdits, updateTaskPrice }) => {
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
      </li>
    </>
  );
};
export default MapRepairs;
