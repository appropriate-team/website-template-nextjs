import { Box, Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey.100',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Box>
        <Typography variant="h2" component="h1" gutterBottom color="grey.800">
          Welcome to Your MUI App!
        </Typography>
        <Typography variant="h6" color="grey.600">
          This is a clean starter template using MUI with Next.js.
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            sx={{
              px: 3,
              py: 1.5,
              backgroundColor: 'primary.main',
              borderRadius: 2,
              boxShadow: 1,
              '&:hover': { backgroundColor: 'primary.dark' },
              transition: 'all 0.2s',
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
