import React, { useState } from "react";
import logo from "../assets/images/whim.png";
import "../assets/styles/scss/style.scss";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function TopNav() {
  //Route variable
  const navigate = useNavigate();

  //MI UI
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  //Logout function
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="topnav" id="myTopNav">
      <div className="logo">
        <img
          src={logo}
          width="50"
          height="30"
          alt="error"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="menuItem" onClick={() => navigate("/post_hobby")}>
        Post Hobby
      </div>

      <div className="search-container">
        <input type="text" id="search-bar" placeholder="Search" />
        <i
          className="fa fa-search search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
        ></i>
      </div>

      <div className="userWrapper">
        <Stack direction="row" spacing={2}>
          <div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              {localStorage.getItem("token") ? (
                <>
                  <span>
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="userName">
                    {localStorage.getItem("name")}
                  </span>
                </>
              ) : (
                <>
                  <span>
                    <i className="userName" onClick={() => navigate("/login")}>
                      login
                    </i>
                  </span>
                </>
              )}
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        {localStorage.getItem("token") ? (
                          <>
                            <MenuItem key={this.label}>My account</MenuItem>
                            <MenuItem onClick={logout} key={this.label}>
                              Logout
                            </MenuItem>
                          </>
                        ) : null}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default TopNav;
