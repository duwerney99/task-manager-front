import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Container, Typography } from '@mui/material';
import { BackButton } from '../components/common/BackButton';

const HelpPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/usage.md')
      .then(res => res.text())
      .then(setContent);
  }, []);

  return (
    <Container>
      <Box display="flex" alignItems="center" mb={2}>
        <BackButton />
        <Typography variant="h5" ml={2}>Guía de uso</Typography>
      </Box>
      <Box sx={{ backgroundColor: '#f9f9f9', p: 2, borderRadius: 2 }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>
    </Container>
  );
};

export default HelpPage;
