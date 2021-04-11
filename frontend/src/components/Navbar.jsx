import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";
import { createProject, listProjects } from "../actions/projectActions";
import Modal from "./Modal";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 65,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [projectName, setProjectName] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleOpenModal = () => {
    handleClose();
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleClose();
    dispatch(signout());
  };

  const create = () => {
    dispatch(
      createProject({
        name: projectName,
        user: userInfo._id,
      })
    );
    dispatch(listProjects());
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img
              src="/logo192.png"
              alt="logo"
              style={{ width: "45px", marginTop: "10px" }}
            />
          </Typography>
          <Typography variant="body2">{userInfo.name}</Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpenModal}>Create Project</MenuItem>
              <MenuItem onClick={logout}>Log Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        open={openModal}
        handleClose={handleCloseModal}
        setProjectName={setProjectName}
        create={create}
      />
    </div>
  );
}
