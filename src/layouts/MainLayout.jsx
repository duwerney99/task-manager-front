import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import { Outlet } from "react-router-dom"


export const MainLayout = () => {
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

            <Box component="footer" sx={{ mt: 4, py: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                <Typography variant="body2" color="text.secondary">© 2025 Gestor de tareas</Typography>
            </Box>
        </>
    )
}