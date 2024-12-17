import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Avatar } from '@mui/material';

export default function BreadCrumb() {
  const breadcrumbs = [
    <Typography key="2" color="secondary" component="div" sx={{display: "flex"}} >
      <Avatar variant="square" sx={{ width: 24, height: 24 }} />
      <Typography component="span" sx={{ color: 'text.secondary', paddingLeft: '8px' }}>Olivia Rhye</Typography>
    </Typography>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      Dashboard
    </Typography>,
  ];

  return (
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{paddingBottom: '24px', paddingTop: { xs: '12px', md: '0px'}}}
      >
        {breadcrumbs}
      </Breadcrumbs>
  );
}
