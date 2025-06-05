import { AppBar, Box, Button, Container, IconButton, Toolbar, Tooltip, Typography } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Gestor de tareas</Typography>
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 4 }}>
                <Outlet />
            </Container>

            <Box sx={{ mt: 4, py: 2, textAlign: 'center' }}>
                <Tooltip title="Help">
                    <IconButton onClick={() => navigate('/docs')}>
                        <HelpOutlineIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <Box component="footer" sx={{ mt: 4, py: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                <Typography variant="body2" color="text.secondary">© 2025 Gestor de tareas</Typography>
            </Box>
        </>
    )
}