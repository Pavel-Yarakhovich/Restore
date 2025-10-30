import { Container, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError() {
    const { state } = useLocation();
    return (
        <Container component={Paper}>
            <Typography gutterBottom variant="h4">Server error</Typography>
            
            {state.error && (
                <>
                    <Typography gutterBottom variant="h6">{state.error.title}</Typography>
                    <Typography gutterBottom variant="body1">{state.error.detail}</Typography>
                </>
            )}
        </Container>
    )
}