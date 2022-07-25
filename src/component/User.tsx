import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { State } from "../state";

export default function BasicCard() {
  const person = useSelector((state: State) => state.personReducer);
  return (
    <Card sx={{ minWidth: 275 }} style={{ width: "500px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          User name:{person?.name ? person.name : ""}
        </Typography>
        <Typography variant="h5" component="div">
          Phon number:{person?.phonNumber ? person.phonNumber : ""}
        </Typography>
      </CardContent>
    </Card>
  );
}
