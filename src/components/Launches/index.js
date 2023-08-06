import { Grid, Paper, Container } from "@mui/material";
import Launch from "../Launch";
import styles from "./launches.module.css";

const Launches = ({ launches }) => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container spacing={2}>
        {launches.map((launch) => (
          <Grid key={launch.id} item xs={12} sm={6} md={4}>
            <Launch props={launch} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Launches;
