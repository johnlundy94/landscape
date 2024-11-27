import * as React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LawnMower from "@mui/icons-material/Agriculture";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/", type: "link" },
  { name: "Quote", path: "/quote", type: "link" },
  { name: "Properties", path: "/serenity", type: "link" },
  { name: "Services", path: "/design", type: "link" },
];

function Nav() {
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const { pathname } = useLocation();

  const handleOpenNavMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setMenuAnchor(null);
  };

  const isHome = pathname === "/";

  const renderNavItem = (page) => (
    <Button
      key={page.name}
      onClick={handleCloseNavMenu}
      sx={{
        my: 2,
        color: "white",
        display: "block",
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {page.type === "link" ? (
        <Link
          to={page.path}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {page.name}
        </Link>
      ) : (
        <a
          href={`#${page.anchor}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {page.name}
        </a>
      )}
    </Button>
  );

  return (
    <AppBar
      position="static"
      color="primary"
      className="Nav"
      id="back-to-top-anchor"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* Logo Picture Desktop */}
            <LawnMower sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            {/* Logo Title Desktop */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              VVL
            </Typography>
          </Box>

          {/* Logo Picture Phone */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <LawnMower sx={{ mr: 1 }} />
            {/* Logo Title Phone */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              VVL
            </Typography>
          </Box>
          {/* Hamburger */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={menuAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(menuAnchor)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(renderNavItem)}
            </Menu>
          </Box>

          {/* Nav links desktop */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map(renderNavItem)}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
