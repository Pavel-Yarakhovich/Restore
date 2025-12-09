import { AppBar, Badge, Box, IconButton, LinearProgress, List, ListItem, Toolbar, Typography } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useAppSelector } from "../store/store";
import { useFetchBasketQuery } from "../../features/basket/basketApi";

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
    const {isLoading} = useAppSelector(state => state.ui);
    const {data: basket} = useFetchBasketQuery();

    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, width: '100%' }}>
                <Box display="flex" alignItems="center">
                    <Typography component={NavLink} sx={navStyles} to="/" variant="h6">RE-STORE</Typography>
                    <IconButton onClick={() => setDarkMode(!isDarkMode)} sx={{ marginLeft: 2 }}>
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
                    <IconButton component={Link} to="/basket" size="large" sx={{ color: 'inherit' }}>
                        <Badge badgeContent={itemCount} color="secondary">
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

            {isLoading && (
                <Box sx={{ width: '100%' }}>
                    <LinearProgress color="secondary" />
                </Box>
            )}
        </AppBar>
    )
}