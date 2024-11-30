import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Other Services
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to="/design"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Landscape
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/outdoor"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Outdoor
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/irrigation"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Irrigation
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
