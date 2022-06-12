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
//   "Kontrola czujników",
//   "Kontrola bezpieczników",
//   "Kasowanie błędów",
//   "Serwis klimatyzacji",
// ];

// export const Electronics = () => {
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
//         <InputLabel id="demo-multiple-checkbox-label">Elektryka i elektronika</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Elektryka i elektronika" />}
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

export const Electronics = (props) => {
  return (
    <div className="electronics">
      <Paper elevation={2} style={{ padding: "10px" }}>
        <FormGroup>
          <h3>Elektryka i elektronika</h3>
          <FormControlLabel
            control={
              <Checkbox
                name="Kontrola czujników"
                onChange={props.handleFormUpdate}
              />
            }
            label="Kontrola czujników"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Kontrola bezpieczników"
                onChange={props.handleFormUpdate}
              />
            }
            label="Kontrola bezpieczników"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Kasowanie błędów"
                onChange={props.handleFormUpdate}
              />
            }
            label="Kasowanie błędów"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Serwis klimatyzacji"
                onChange={props.handleFormUpdate}
              />
            }
            label="Serwis klimatyzacji"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
