/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Box, Collapse, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useEffect, useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
// import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const Icons = (props) => {
  if(props.text == 'Home') return <HomeOutlinedIcon />
  if(props.text == 'Dashboard') return <AnalyticsOutlinedIcon />
  if(props.text == 'Projects') return <ViewComfyOutlinedIcon />
  if(props.text == 'Settings') return <SettingsOutlinedIcon />
  if(props.text == 'Support') return <ContactSupportOutlinedIcon />
  if(props.text == 'Tasks') return <ListAltOutlinedIcon />
  if(props.text == 'Reporting') return <PieChartOutlinedIcon />
  if(props.text == 'Users') return <PeopleAltOutlinedIcon />
}

export function SideBar({open, toggleSideBar}) {

  const [expand, setExpand] = useState('');

  useEffect(() => {
    if(!open) setExpand('');
  }, [open])

  const handleClick = (text) => {
    if(!open) return;
    setExpand((prevState) => prevState ? '' : text);
  };

  return (
    <>
      <Drawer variant="permanent" open={open} sx={{ display: { xs: open ? 'unset' : 'none', md: 'unset' } }}>
          <DrawerHeader>
              <IconButton onClick={toggleSideBar}>
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
          </DrawerHeader>
          <List>
              {['Home', 'Dashboard', 'Projects', 'Settings', 'Support', 'Tasks', 'Reporting', 'Users'].map((text) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => handleClick(text)} color='secondary'
                    sx={[ { minHeight: 48, px: 2.5, }, open ? { justifyContent: 'initial', } : { justifyContent: 'center', }, ]}
                  >
                    <ListItemIcon
                      color='secondary'
                      sx={[{minWidth: 0, justifyContent: 'center', },
                      open ? {mr: 3,} : {mr: 'auto',},]}
                    >
                      <Icons text={text}/>
                    </ListItemIcon>
                    <ListItemText primary={text} sx={[open ? { opacity: 1, } : { opacity: 0, }, ]} />
                    {expand === text ? <ExpandLess sx={{display: open ? 'unset' : 'none'}} color='action' /> : <ExpandMore sx={{display: open ? 'unset' : 'none'}} color='action' />}
                  </ListItemButton>
                  <Collapse in={expand === text} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{color: 'white'}}>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Overview" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{color: 'white'}}>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{color: 'white'}}>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Analytics" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{color: 'white'}}>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Report" />
                      </ListItemButton>
                    </List>
                  </Collapse>
              </ListItem>
              ))}
          </List>
          
          {open
          ? <Box sx={{ padding: '8px', border: '1px solid', borderColor: 'secondary.light', borderRadius: '8px', margin: '12px' }}>
              <Box sx={{ width: '100%' }}>
                <Typography textAlign='center' fontWeight={600}>Verify this device</Typography>
                <QrCodeScannerOutlinedIcon sx={{fontSize: '175px'}} />
              </Box>
            </Box>
          : <Box sx={{ margin: '15px' }}>
              <QrCodeScannerOutlinedIcon fontSize='large' color='action' />
            </Box>
          }

          {open
          ? <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px', border: '1px solid', borderColor: 'secondary.light', borderRadius: '8px', margin: '12px' }}>
              <Box sx={{ margin: 1 }}>
                <Avatar sx={{ width: '32px', height: '32px'}} src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
              </Box>
              <Box sx={{ width: '100%' }}>
                <Typography>Olivia Rhye</Typography>
                <Typography fontSize="14px" color='textSecondary'>oliviarhye@gmail.com</Typography>
              </Box>
            </Box>
          : <Box sx={{ margin: '15px' }}>
              <Avatar sx={{ width: '32px', height: '32px'}} src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
            </Box>
          }
      </Drawer>
      <DrawerHeader />
    </>
  );
}