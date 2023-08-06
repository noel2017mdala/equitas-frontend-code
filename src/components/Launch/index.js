import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import styles from "./launch.module.css";
import moment from "moment-timezone";
import Modal from "../Modal";

const getUsersTimeZone = () => {
  const options = { timeZoneName: "long" };
  const userTimezone = Intl.DateTimeFormat(undefined, options).resolvedOptions()
    .timeZone;
  return userTimezone;
};

const formatDateTime = (date) => {
  const getUserTimeZone = getUsersTimeZone();
  const time = moment(date);
  return time.tz(getUserTimeZone).format("MMMM Do YYYY, h:mm:ss a");
};

const Launch = ({ props }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleButtonClick = (data) => {
    setShowModal(true);
    setModalData(data);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData({});
  };

  return (
    <>
      <Card className={styles.card}>
        <CardMedia
          className={styles.cardMedia}
          image={props.links.patch.small}
          title={props.name}
        />
        <CardContent className={styles.cardContent}>
          <h2 className={styles.title}>{props.name}</h2>
          <p className={styles.id}>Id: {props.id}</p>
          <p className={styles.flightNumber}>
            Flight Number: {props.flight_number}
          </p>
          <p className={styles.date}>
            Launch Date:
            {formatDateTime(props.date_utc)}
          </p>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              console.log(props);
              handleButtonClick(props);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Modal isOpen={showModal} onClose={closeModal} data={modalData} />
    </>
  );
};

export default Launch;
