import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function DashboardHeader() {

  return (
    <div className="dashboard-header" style={{paddingBottom: '24px'}}>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid size={{sm: 12, md: "auto"}}>
            <Typography fontWeight={600} variant="h5">My Dashboard</Typography>
        </Grid>
        <Grid size={{sm: 12, md: "auto"}}>
            <Grid container flexDirection="row" wrap="nowrap" spacing={3}>
                <Grid>
                    <Button sx={{borderColor: 'secondary.light', borderRadius: '8px' }} variant="outlined" disableFocusRipple disableRipple disableTouchRipple color="inherit" startIcon={<FiberManualRecordIcon fontSize="12px" color="success" />}>
                        <Typography textTransform="none" fontWeight={600} color="secondary" variant="subtitle2">{`What's new?`}</Typography>
                    </Button>
                </Grid>
                <Grid>
                    <Button sx={{borderColor: 'secondary.light', borderRadius: '8px' }} variant="outlined" disableFocusRipple disableRipple disableTouchRipple color="inherit" startIcon={<ContentCopyIcon fontSize="small" color="secondary" />}>
                        <Typography textTransform="none" fontWeight={600} color="secondary" variant="subtitle2">Copy link</Typography>
                    </Button>
                </Grid>
                <Grid>
                    <Button sx={{borderColor: 'secondary.light', borderRadius: '8px' }} variant="outlined" disableFocusRipple disableRipple disableTouchRipple color="inherit" endIcon={<OpenInNewIcon fontSize="small" color="secondary" />}>
                        <Typography textTransform="none" fontWeight={600} color="secondary" variant="subtitle2">Visit store</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}