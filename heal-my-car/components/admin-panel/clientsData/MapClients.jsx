import { ListItemText } from "@mui/material"

export const MapClients = ({ clients }) => {
    console.log('map', clients);
    {
        clients.map((client, clientId, index) => {
            console.log(client.lastName);
            return (
                <li key={clientId}>'ss'</li>
            )

            // <ul key={index}>
            //     <li key={clientId}>`Imię ${client.name}`</li>
            // </ul>

        })
    }
}
