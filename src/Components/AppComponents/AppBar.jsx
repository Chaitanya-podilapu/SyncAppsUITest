import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

// eslint-disable-next-line react/prop-types
export default function ToolBar({open, toggleSideBar}) {


  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={1} sx={{ display: { md: 'none' }, backgroundColor: 'white' }}>
        <Toolbar>
          <Typography color='primary.main' variant="h6" sx={{flexGrow: 1}} noWrap component="div">
            Untitled UI
          </Typography>
          <IconButton
            aria-label="open drawer"
            onClick={toggleSideBar}
            edge="end"
            sx={[open && { display: 'none' }, ]}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}