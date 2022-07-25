import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { personAction } from "../state";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Person } from "../state/action";
import Button from "@mui/material/Button";

function Form() {
  const dispatch = useDispatch();
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const { createPerson } = bindActionCreators(personAction, dispatch);
  const [errors, setErrors] = useState({
    name: false,
    phonNumber: false,
    password: false,
    confirmPassword: false,
  });
  const [editPerson, setEditPerson] = useState<Person>({
    name: "",
    phonNumber: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const editFieldPerson = (field: string, value: string) => {
    if (field !== "confirmPassword")
      setEditPerson({ ...editPerson, [field]: value });
    else setConfirmPassword(value);
    field === "name"
      ? setErrors({
          ...errors,
          name: editPerson.name.length > 32,
        })
      : field === "phonNumber"
      ? setErrors({
          ...errors,
          phonNumber:
            editPerson.phonNumber.length !== 10 ||
            !/^[0-9]+$/.test(editPerson.phonNumber),
        })
      : field === "password"
      ? setErrors({
          ...errors,
          password:
            editPerson.password.length < 6 ||
            editPerson.password.length > 12 ||
            !specialChars.test(editPerson.password) ||
            /[a-z]/.test(editPerson.password) ||
            /[0-9]/.test(editPerson.password),
        })
      : field === "confirmPassword" &&
        setErrors({
          ...errors,
          confirmPassword: editPerson.password !== confirmPassword,
        });
  };

  const asyncFunction = async (): Promise<any> => {
    if (!Object.values(errors).includes(true)) {
      try {
        return await createPerson(editPerson);
      } catch (err) {
        throw err;
      }
    }
  };

  return (
    <>
      <Box style={{ width: "200px" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            asyncFunction();
          }}
        >
          <TextField
            style={{ paddingBottom: "17px" }}
            required
            error={errors.name}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            onChange={(e) => editFieldPerson("name", e.target.value)}
          />
          <TextField
            style={{ paddingBottom: "17px" }}
            required
            error={errors.phonNumber}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            onChange={(e) => editFieldPerson("phonNumber", e.target.value)}
          />
          <TextField
            style={{ paddingBottom: "17px" }}
            required
            error={errors.password}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => editFieldPerson("password", e.target.value)}
          />
          <TextField
            style={{ paddingBottom: "17px" }}
            required
            error={errors.confirmPassword}
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            type="password"
            onChange={(e) => editFieldPerson("confirmPassword", e.target.value)}
          />
          <Button variant="contained" type="submit">
            Contained
          </Button>
        </form>
      </Box>
    </>
  );
}

export default Form;
