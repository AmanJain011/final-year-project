import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Avatar, Divider, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn } from '@material-ui/icons';

const teamMembers = [
  {
    name: 'Aman Jain',
    rollno: '21ESKIT013',
    skills: 'Backend, Express.js, JWT, API Security',
    photo: 'https://i.imgur.com/0sZBEfQ.jpeg',
    github: '#',
    linkedin: '#'
  },
  {
    name: 'Aditya Pratap Singh',
    rollno: '21ESKIT007',
    skills: 'Frontend, UI/UX, React, MERN',
    photo: 'https://i.imgur.com/HqWVzd7.jpeg',
    github: 'https://github.com/Adityasingh30',
    linkedin: 'https://www.linkedin.com/in/aditya-pratap-singh-79700024a/'
  },
  {
    name: 'Ayush Jhawar',
    rollno: '21ESKIT028',
    skills: 'Node.js, React, MongoDB',
    photo: 'https://i.imgur.com/iAOQjWS.jpeg',
    github: '#',
    linkedin: '#'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1A1A2E',
    minHeight: '100vh',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    padding: theme.spacing(6),
  },
  card: {
    textAlign: 'center',
    padding: theme.spacing(3),
    borderRadius: '20px',
    background: 'linear-gradient(to right,rgba(100, 121, 131, 0.98),rgb(214, 226, 237))',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.6)'
    }
  },
  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    margin: '0 auto 15px auto',
    border: '3px solid #00BFFF'
  },
  icons: {
    marginTop: theme.spacing(1),
    '& a': {
      margin: theme.spacing(0, 1),
      color: '#00BFFF',
      '&:hover': {
        color: '#fff'
      }
    }
  },
  header: {
    marginTop: theme.spacing(6),
    paddingTop: theme.spacing(6),
    borderTop: '1px solid #444',
    textAlign: 'center',
    color: '#ccc',
    maxWidth: 900,
    margin: 'auto'
  }
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      
      {/* About the Project Section */}
      <Box className={classes.header}>
        <Typography variant="h2" align="center" gutterBottom style={{
          fontWeight: 900,
          fontFamily: 'Georgia, serif',
          color: '#fff'
        }}>
          About the Project
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Atomic</strong> is an Online Cinema Hall Ticket Booking System built using the MERN stack.
          It provides a seamless experience for users to explore, book, and manage movie reservations through a modern interface.
        </Typography>
        <Typography variant="body1" paragraph>
          Designed with real-world use cases in mind, Atomic supports admin-level controls for cinemas, QR-code-based entry systems,
          email confirmations, and an intuitive frontend backed by robust security and scalable architecture.
        </Typography>
        <Typography variant="body1" paragraph>
          We built this project as part of our final year major project, aiming to deliver a product that showcases both technical skill and user empathy.
        </Typography>

      </Box>

      {/* Meet the Team Section */}
      <Box mt={10}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          style={{
            fontWeight: 900,
            fontFamily: 'Georgia, serif',
            color: '#fff'
          }}
        >
          Meet the Team
        </Typography>
        <Divider style={{ backgroundColor: '#00BFFF', marginBottom: '2rem' }} />

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <Avatar src={member.photo} alt={member.name} className={classes.avatar} />
                <CardContent>
                  <Typography variant="h3" style={{ fontWeight: 600 }}>{member.name}</Typography>
                  <Typography variant="subtitle1" style={{ color: '#000' }}>{member.rollno}</Typography>
                  <Typography variant="body1" style={{ marginTop: 10 }}>{member.skills}</Typography>
                  <div className={classes.icons}>
                    <Link href={member.github} target="_blank" rel="noopener">
                      <GitHub />
                    </Link>
                    <Link href={member.linkedin} target="_blank" rel="noopener">
                      <LinkedIn />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography variant="body1" style={{ marginTop: 10, textAlign:'center' }}>
          <em>Major Project | Department of IT</em>
        </Typography>
    </Box>
  );
};

export default AboutUs;
