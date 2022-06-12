import * as React from "react";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   "Kontrola silnika",
//   "Wymiana oleju",
//   "Wymiana filtrów i płynów",
//   "Diagnoza pracy silnik",
//   "Wymiana rozrządu",
//   "Mycie silnika",
//   "Wymiana świec",
//   "Kontrola wtrysków",
//   "Wymiana uszczelek głowicy",
//   "Diagnostyka tłoków",
// ];

// export const Engine = () => {
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-checkbox-label">Silnik</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Silnik" />}
//           renderValue={(selected) => selected.join(", ")}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem key={name} value={name}>
//               <Checkbox checked={personName.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// };

export const Engine = () => {
  return (
    <div className="engine">
      <FormGroup>
        <h3>Silnik</h3>
        <FormControlLabel control={<Checkbox />} label="Kontrola silnika" />
        <FormControlLabel control={<Checkbox />} label="Wymiana oleju" />
        <FormControlLabel control={<Checkbox />} label="Wymiana rozrządu" />
        <FormControlLabel control={<Checkbox />} label="Diagnoza pracy silnik" />
        <FormControlLabel control={<Checkbox />} label="Wymiana rozrządu" />
        <FormControlLabel control={<Checkbox />} label="Mycie silnika" />
      </FormGroup>
    </div>
  );
};