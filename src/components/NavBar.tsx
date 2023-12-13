import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const PDVTabsActivePath = ["/", "/pdvTabs/1"];
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        width: "200px",
        [`& .MuiDrawer-paper`]: { boxSizing: "border-box" },
        height: "90vh",
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List>
          {[
            { label: "PDV tabs", path: ["/", "/pdvTabs/1"] },
            { label: "test", path: ["/test", "/pdvTabs/test"] },
          ].map((item, index) => (
            <ListItem
              key={item.label}
              disablePadding
              style={{
                color: item.path.includes(location.pathname) ? "#1976d2" : "",
              }}
              onClick={() => navigate("/")}
            >
              <ListItemButton>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
