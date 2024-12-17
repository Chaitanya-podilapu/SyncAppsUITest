import { Button, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function DashboardCards() {

  return (
    <div className="dashboard-cards" style={{overflowX: "overlay", paddingBottom: '24px'}}>
      <Grid container wrap="nowrap" spacing={3} style={{minWidth: "min-content"}}>
        <Grid size={4} style={{width: "auto"}}>
            <Card variant="outlined" sx={{borderRadius: '12px', border: '2px solid', borderColor: 'primary.main'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Grid container flexDirection="row" wrap="nowrap" spacing={3}>
                        <Grid size="auto">
                            <MonetizationOnOutlinedIcon fontSize="large" color="secondary" sx={{ border: '1px solid', borderColor: 'secondary.light' }} style={{ padding: "0 5px 0 5px", borderRadius: "8px"}} />
                        </Grid>
                        <Grid size="grow">
                            <Typography fontWeight={600} color="secondary" variant="subtitle2" gutterBottom>All Revenue</Typography>
                            <Typography fontWeight={600} variant="h4">$8,746.22</Typography>
                        </Grid>
                        <Grid size="auto" alignContent="end">
                            <Button variant="outlined" style={{ padding: "0px 4px", margin: "8px" }} disableElevation disableFocusRipple disableRipple disableTouchRipple color="inherit" size="small" startIcon={<ArrowOutwardIcon color="success" />}>
                                <Typography variant="body2">2.4%</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
        
        <Grid size={4}>
            <Card variant="outlined" sx={{borderRadius: '12px'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Grid container flexDirection="row" wrap="nowrap" spacing={3}>
                        <Grid size="auto">
                            <RemoveRedEyeOutlinedIcon fontSize="large" color="secondary" sx={{ border: '1px solid', borderColor: 'secondary.light' }} style={{ padding: "0 5px 0 5px", borderRadius: "8px"}} />
                        </Grid>
                        <Grid size="grow">
                            <Typography fontWeight={600} color="secondary" variant="subtitle2" gutterBottom>Page Views</Typography>
                            <Typography fontWeight={600} variant="h4">12440</Typography>
                        </Grid>
                        <Grid size="auto" alignContent="end">
                            <Button variant="outlined" style={{ padding: "0px 4px", margin: "8px" }} disableElevation disableFocusRipple disableRipple disableTouchRipple color="secondary" size="small" startIcon={<ArrowOutwardIcon color="success" />}>
                                <Typography variant="body2">6.2</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>

        <Grid size={4}>
            <Card variant="outlined" sx={{borderRadius: '12px'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Grid container flexDirection="row" wrap="nowrap" spacing={3}>
                        <Grid size="auto">
                            <AccountCircleOutlinedIcon fontSize="large" color="secondary" sx={{ border: '1px solid', borderColor: 'secondary.light' }} style={{ padding: "0 5px 0 5px", borderRadius: "8px"}} />
                        </Grid>
                        <Grid size="grow">
                            <Typography fontWeight={600} color="secondary" variant="subtitle2" gutterBottom>Active Now</Typography>
                            <Typography fontWeight={600} variant="h4">96</Typography>
                        </Grid>
                        <Grid size="auto" alignContent="end">
                            <Button variant="outlined" style={{ padding: "0px 4px", margin: "8px" }} disableElevation disableFocusRipple disableRipple disableTouchRipple color="inherit" size="small" startIcon={<ArrowOutwardIcon color="success" />}>
                                <Typography variant="body2">0.8%</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}