import React from "react";
import {
  Container,
  Grid,
  Header,
  Segment,
  Statistic,
  Icon,
  Form,
  Button
} from "semantic-ui-react";

const ButtonSaveCancel = ({ addEntry }) => {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry()}>
        OK
      </Button>
    </Button.Group>
  );
};

export default ButtonSaveCancel;
