import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField, Typography } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "70%",
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const submitHandler = (e) => {
    e.preventDefault();
    props.create ? props.create() : props.update();
    props.handleClose();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h5" component="h2">
        {props.modalTitle}
      </Typography>
      <br />
      <form autoComplete="off" onSubmit={submitHandler}>
        <TextField
          value={props.value && props.value}
          style={{ width: "100%" }}
          id="standard-basic"
          label="Project Name"
          onChange={(e) => props.setProjectName(e.target.value)}
        />
        <Button
          style={{ marginTop: "30px", width: "100%" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          {props.modalButtonText}
        </Button>
      </form>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
