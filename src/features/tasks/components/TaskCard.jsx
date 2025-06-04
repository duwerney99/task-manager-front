import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const TaskCard = ({ task }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                border: '2px solidrgb(112, 115, 117)',
                borderRadius: 2,
                my: 2,
                transition: '0.2s',
                '&:hover': {
                    boxShadow: 3,
                    borderColor: '#115293',
                },
            }}
        >
            <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {task.title}
                </Typography>
                <Typography gutterBottom>{task.description}</Typography>
                <Box mt={1}>
                    <Typography variant="caption" color="text.secondary">
                        Estado: {task.status}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
