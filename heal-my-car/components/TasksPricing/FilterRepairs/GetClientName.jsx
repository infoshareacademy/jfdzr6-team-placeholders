const GetClientName = ({ clients, repair }) => {
  console.log(clients, repair);

  let filteredClients = clients.find((client) => {
    const path = client?.clientRepairs[0]?._key?.path?.segments[6];
    return path == repair.id;
  });
  console.log(filteredClients);
  console.log(filteredClients?.name);
  console.log(filteredClients?.lastName);
  return (
    <p
      style={{
        fontFamily: "arial",
        // color: "#161616",
      }}
    >
      {filteredClients?.name} {filteredClients?.lastName}
    </p>
  );
};

export default GetClientName;
