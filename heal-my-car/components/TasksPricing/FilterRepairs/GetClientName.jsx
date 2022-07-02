const GetClientName = ({ clients, repair }) => {
  let filteredClients = clients.find((client) => {
    return client.clientRepairs.some(
      (clientRepair) => clientRepair._key.path.segments[6] === repair.id
    );
  });
  return (
    <p
      style={{
        fontFamily: "arial",
      }}
    >
      {filteredClients?.name} {filteredClients?.lastName}
    </p>
  );
};

export default GetClientName;
