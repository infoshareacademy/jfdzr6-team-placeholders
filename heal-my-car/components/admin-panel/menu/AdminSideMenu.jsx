import * as React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { auth } from "../../../src/firebase";
import { signOut } from "firebase/auth";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  position: "relative",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  position: "relative",

  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 20px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function AdminSideMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 75px)",
        position: "sticky",
        top: "77px",
        left: "0",
      }}
    >
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#2f3b52",
          },
        }}
      >
        <DrawerHeader>
          {!open ? (
            <IconButton
              sx={{ marginRight: "20px" }}
              onClick={open == false ? handleDrawerOpen : handleDrawerClose}
            >
              <ArrowForwardIcon sx={{ color: "#fff" }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={open == false ? handleDrawerOpen : handleDrawerClose}
            >
              <ArrowBackIcon sx={{ color: "#fff" }} />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List disablePadding>
          <ListItem disablePadding sx={{ display: "block" }} className="link">
            <Link to="/newtasks" className="adminMenuLink">
              <ListItemButton
                sx={{
                  minHeight: 62,
                  backgroundColor: "#1976d2",
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <CurrencyExchangeIcon
                  sx={{
                    color: "#fff",
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                />
                <ListItemText
                  primary={"Wycena zleceń"}
                  sx={{ opacity: open ? 1 : 0 }}
                  className="adminPanelMenu"
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider />
          <ListItem disablePadding sx={{ display: "block" }} className="link">
            <Link to="/inprogress" className="adminMenuLink">
              <ListItemButton
                sx={{
                  minHeight: 64,
                  backgroundColor: "#1976d2",
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <CarRepairIcon
                  sx={{
                    color: "#fff",
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                />
                <ListItemText
                  primary={"Naprawy w toku"}
                  sx={{ opacity: open ? 1 : 0 }}
                  className="adminPanelMenu"
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider />
          <ListItem disablePadding sx={{ display: "block" }} className="link">
            <Link to="/repairsdone" className="adminMenuLink">
              <ListItemButton
                sx={{
                  backgroundColor: "#1976d2",
                  minHeight: 62,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ManageHistoryIcon
                  sx={{
                    color: "#fff",
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                />
                <ListItemText
                  primary={"Naprawy wykonane"}
                  sx={{ opacity: open ? 1 : 0 }}
                  className="adminPanelMenu"
                />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider sx={{ marginBottom: "350%" }} />
        <List>
          <ListItem disablePadding sx={{ display: "block" }} className="link">
            <Link to="/" className="adminMenuLink">
              <ListItemButton
                onClick={() => signOut(auth)}
                sx={{
                  minHeight: 62,
                  backgroundColor: "#1976d2",
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <LogoutIcon
                  sx={{
                    color: "#fff",
                    backgroundColor: "#cc218875f",
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                />
                <ListItemText
                  primary={"Wyloguj"}
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                  className="adminPanelMenu"
                />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

// import React from "react";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import { Link } from "react-router-dom";

// export const AdminSideMenu = () => {
//   return (
//     <>
//       <div
//         className="side-menu"
//         style={{
//           width: "140px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "350px",
//           justifyContent: "space-between",
//         }}
//       >
//         <Stack direction="column" spacing={1} marginTop="15px">
//           <Link to="/newtasks" className="link">
//             <Button variant="contained">Naprawy do wyceny</Button>
//           </Link>
//           <Link to="/admin-panel" className="link">
//             <Button variant="contained">Naprawy w toku</Button>
//           </Link>
//           <Link to="/repairsdone" className="link">
//             <Button variant="contained">Naprawy wykonane</Button>
//           </Link>
//         </Stack>
//         <Stack direction="column" spacing={1} marginTop="15px">
//           <Link to="/login" className="link">
//             <Button variant="contained">Wyloguj mnie</Button>
//           </Link>
//         </Stack>
//       </div>
//     </>
//   );
// };
