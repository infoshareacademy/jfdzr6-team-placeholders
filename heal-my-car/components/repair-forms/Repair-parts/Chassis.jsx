import * as React from "react";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";

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
//   "Naprawa zawieszenia przedniego",
//   "Naprawa zawieszenia tylnego",
//   "Naprawa hamulców",
//   "Naprawa tłumika"
// ];

// export const Chassis = () => {
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
//         <InputLabel id="demo-multiple-checkbox-label">Podwozie</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Podwozie" />}
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

export const Chassis = (props) => {
  return (
    <div className="chassis">
      <Paper elevation={2} style={{ padding: "10px", marginRight: "15px" }}>
        <FormGroup>
          <h3>Podwozie</h3>
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa zawieszenia przedniego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa zawieszenia przedniego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa zawieszenia tylnego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa zawieszenia tylnego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa hamulców"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa hamulców"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa tłumika"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa tłumika"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
