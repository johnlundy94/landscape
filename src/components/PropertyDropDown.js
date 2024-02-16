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
        Others
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
        {/* Update these MenuItems to link to your desired paths */}
        <MenuItem onClick={handleClose}>
          <Link to="/eden" style={{ textDecoration: "none", color: "inherit" }}>
            Eden
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/elysian"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Elysian
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/oasis"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Oasis
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/serenity"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Serenity
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
