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
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isHome = location.pathname === "/";

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
              Verdant
            </Typography>
          </Box>

          {/* Logo Picture Phone */}
          <LawnMower sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {/* Logo Title Phone */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Verdant
          </Typography>

          {/* Hamburger */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
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
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                const menuItemContent = (
                  <Typography textAlign="center">{page.name}</Typography>
                );

                return (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    {isHome || page.type === "link" ? (
                      <Link
                        to={page.path}
                        style={{ textDecoration: "none", color: "#272727" }}
                      >
                        {menuItemContent}
                      </Link>
                    ) : (
                      <a
                        href={`#${page.anchor}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {menuItemContent}
                      </a>
                    )}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Nav links desktop */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {isHome || page.type === "link" ? (
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
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
