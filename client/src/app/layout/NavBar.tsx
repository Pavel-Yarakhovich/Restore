import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
];

const navStyles = {
    color: 'inherit',
    typography: 'h7',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#baecf9'
    }
};

type Props = {
    isDarkMode: boolean;
    setDarkMode: (flag: boolean) => void;
}

export default function NavBar({ setDarkMode, isDarkMode }: Props) {
  return (
    <AppBar
        position="fixed"
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1
        }}
    >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Box display="flex" alignItems="center">
                <Typography component={NavLink} sx={navStyles} to="/" variant="h6">RE-STORE</Typography>
                <IconButton onClick={() => setDarkMode(!isDarkMode)}>
                    { isDarkMode ? <LightModeIcon /> : <DarkModeIcon /> }
                </IconButton>
            </Box>

            <List sx={{ display: 'flex' }}>
                {midLinks.map(({ title, path }) => (
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>

            <Box display="flex" alignItems="center">
                <IconButton size="large" sx={{ color: 'inherit' }}>
                    <Badge badgeContent="3" color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <List sx={{ display: 'flex' }}>
                    {rightLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Toolbar>
    </AppBar>
  )
}