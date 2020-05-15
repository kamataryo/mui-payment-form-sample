import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

type Props = {
  open: boolean;
  handleClose: () => void;
};
type MUIOnChangeEvent = React.FormEvent<HTMLInputElement | HTMLTextAreaElement>;

const modalStyle: React.CSSProperties = {
  position: "absolute",
  minWidth: 400,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  background: "white",
  padding: "2em 4em 3em",
};

const useForms = () => {
  // card number
  const [number, setNumber] = React.useState("");
  const displayNumberDigits: string[] = [];
  for (let index = 0; index < number.length; index += 4) {
    displayNumberDigits.push(number.slice(index, index + 4));
  }
  const numberProps = {
    value: displayNumberDigits.join(" "),
    onChange: (e: MUIOnChangeEvent) => {
      const nextNumber = e.currentTarget.value
        .replace(/ /g, "")
        .replace(/[^0-9]+/i, "");
      if (nextNumber.length > 16) {
        return;
      } else {
        setNumber(nextNumber);
      }
    },
  };

  // name
  const [name, setName] = React.useState("");
  const nameProps = {
    value: name,
    onChange: (e: MUIOnChangeEvent) => setName(e.currentTarget.value),
  };

  // exp
  const [exp, setExp] = React.useState("");
  const displayExpDigits: string[] = [];
  for (let index = 0; index < exp.length; index += 2) {
    displayExpDigits.push(exp.slice(index, index + 2));
  }
  const expProps = {
    value: displayExpDigits.join("/"),
    onChange: (e: MUIOnChangeEvent) => {
      const nextExp = e.currentTarget.value
        .replace(/\//g, "")
        .replace(/[^0-9]+/i, "");
      if (nextExp.length > 4) {
        return;
      } else {
        setExp(nextExp);
      }
    },
  };

  // cvv
  const [cvv, setCvv] = React.useState("");
  const cvvProps = {
    value: cvv,
    onChange: (e: MUIOnChangeEvent) => {
      const nextCvv = e.currentTarget.value.replace(/[^0-9]+/i, "");
      if (nextCvv.length > 4) {
        return;
      } else {
        setCvv(nextCvv);
      }
    },
  };

  return {
    numberProps,
    nameProps,
    expProps,
    cvvProps,
  };
};

export default function Payment(props: Props) {
  const { open, handleClose } = props;
  const { numberProps, nameProps, expProps, cvvProps } = useForms();

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={modalStyle}>
        <Typography component="h3">{"Add a payment method"}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              {...numberProps}
              label={"Credit card number"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField {...nameProps} label={"Name on card"} fullWidth={true} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              {...expProps}
              label={"Date of expire"}
              placeholder={"MM/YY"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              {...cvvProps}
              label={"CVV"}
              fullWidth={true}
              type={"password"}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type={"button"}>
              {"Register"}
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}
