import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Grid } from '@mui/material';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your forgot password logic, e.g., send reset email
    console.log(`Forgot password request for email: ${email}`);
    setSubmitted(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: '2rem',
          padding: '1.5rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Forgot Password
        </Typography>
        {!submitted ? (
          <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '1rem' }}
                >
                  Send Reset Email
                </Button>
              </Grid>
            </Grid>
          </form>
        ) : (
          <Typography variant="body1" style={{ marginTop: '1rem' }}>
            An email with password reset instructions has been sent to {email}.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ForgotPasswordForm;
 

/* import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Grid } from '@mui/material';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false); // State to toggle reset password form

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your forgot password logic, e.g., send reset email
    console.log(`Forgot password request for email: ${email}`);
    setSubmitted(true);
    setShowResetForm(true); // Show reset password form after submission
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Here you can implement your reset password logic
    console.log(`Reset password logic for email: ${email}`);
    // Optionally, clear form fields or reset state
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: '2rem',
          padding: '1.5rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        {!showResetForm ? (
          <>
            <Typography variant="h5" gutterBottom>
              Forgot Password
            </Typography>
            {!submitted ? (
              <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      style={{ marginTop: '1rem' }}
                    >
                      Send Reset Email
                    </Button>
                  </Grid>
                </Grid>
              </form>
            ) : (
              <Typography variant="body1" style={{ marginTop: '1rem' }}>
                An email with password reset instructions has been sent to {email}.
                <br />
                <Button
                  onClick={() => setShowResetForm(true)}
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: '1rem' }}
                >
                  Reset Password
                </Button>
              </Typography>
            )}
          </>
        ) : (
          <form style={{ marginTop: '1rem' }} onSubmit={handleResetPassword}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="newPassword"
                  label="New Password"
                  type="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm New Password"
                  type="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '1rem' }}
                >
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default ForgotPasswordForm;
 

 */