import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CardDialog from './CardDialog'; // Import the dialog component

const CustomCard = ({ title, description, image,moreInfo }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: '50px' }}>
        <CardMedia component="img" height="200" image={image} alt="card image" />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.dark">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            sx={{ width: 250 }}
            size="large"
            onClick={handleDialogOpen} // Open dialog on button click
          >
            View More Details
          </Button>
        </CardActions>
      </Card>

      <CardDialog
        open={dialogOpen}
        onClose={handleDialogClose} // Close dialog on close button click
        title={title}
        description={description}
        image={image}
        moreInfo={moreInfo}
      />
    </>
  );
};

export default CustomCard;
