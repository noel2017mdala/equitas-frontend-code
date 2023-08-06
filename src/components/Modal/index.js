import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import style from "./modal.module.css";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 4,
  p: 4,
};

const index = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalContainer}>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="responsive-modal-title"
        aria-describedby="responsive-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 4,
            p: 2,
            maxWidth: "90vw",
            maxHeight: "90vh",
            overflow: "auto",
          }}
        >
          <div className={style.modalContentContainer}>
            <div>
              <img
                src={data.rocket.flickr_images[0]}
                className={style.rocketImage}
              />
              <p className={style.imageName}>{data.rocket.name}</p>
            </div>

            <div>
              <h2>Description</h2>
              <p>{data.rocket.description}</p>
            </div>

            <div>
              <h2>Crew Members</h2>
              <div className={style.profileContainer}>
                {data.crew.length > 0 ? (
                  data.crew.map((crewMember) => (
                    <div key={crewMember.id} className={style.profile}>
                      <img
                        src={crewMember.image}
                        alt={crewMember.name}
                        className={style.profileImage}
                      />
                      <p>{crewMember.name}</p>
                    </div>
                  ))
                ) : (
                  <p>No crew members found</p>
                )}
              </div>
            </div>
          </div>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default index;
