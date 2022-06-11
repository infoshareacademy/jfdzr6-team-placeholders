import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';



// // Dane klientów ustawione na sztywno w celu wyświetlenia komponentu. 
// // Listę klientów będziemy pobierać z firebase
// const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//         field: 'firstName',
//         headerName: 'First name',
//         width: 150,
//         editable: false,
//     },
//     {
//         field: 'lastName',
//         headerName: 'Last name',
//         width: 150,
//         editable: false,
//     },
//     {
//         field: 'carBrand',
//         headerName: 'Brand',
//         type: 'string',
//         width: 100,
//         editable: true,
//     },
//     {
//         field: 'VIN',
//         headerName: 'VIN',
//         type: 'string',
//         width: 200,
//         editable: false,
//     },
//     {
//         field: 'status',
//         headerName: 'Status',
//         type: 'singleSelect',
//         valueOptions: ['Pending', 'Done'],
//         width: 100,
//         editable: true,
//     },
// ];

// export const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', carBrand: 'BMW', VIN: 'WDB448394734878', status: 'Pending' },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', carBrand: 'Mercedes', VIN: 'WDB448394734878', status: 'Done' },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', carBrand: 'Audi', VIN: 'WDB448394734878', status: 'Done' },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', carBrand: 'BMW', VIN: 'WDB448394734878', status: 'Pending' },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 66 },
//     { id: 6, lastName: 'Melisandre', firstName: 'Noname', age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export const ClientsList = () => {
//     return (
//         <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 pageSize={8}
//                 rowsPerPageOptions={[8]}
//                 checkboxSelection
//                 disableSelectionOnClick
//             />
//         </div>
//     );
// };
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function BasicExampleDataGrid() {
    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid {...data} components={{ Toolbar: GridToolbar }} />
        </div>
    );
}