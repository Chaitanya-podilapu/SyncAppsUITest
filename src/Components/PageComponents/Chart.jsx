import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { LineChart } from '@mui/x-charts/LineChart';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const dataset = [
    { date: new Date(1990, 0, 1), fr: 32129, dl: 26189 }, 
    { date: new Date(1991, 1, 1), fr: 48294, dl: 46189 },
    { date: new Date(1992, 2, 2), fr: 58619, dl: 55790 },
    { date: new Date(1993, 3, 3), fr: 48336, dl: 26349 },
    { date: new Date(1994, 4, 4), fr: 58907, dl: 27277 },
    { date: new Date(1995, 5, 5), fr: 29418, dl: 27861 },
    { date: new Date(1996, 6, 6), fr: 39736, dl: 38472 },
    { date: new Date(1997, 7, 7), fr: 40341, dl: 39259 },
    { date: new Date(1998, 8, 8), fr: 31323, dl: 30077 },
    { date: new Date(1999, 9, 9), fr: 52284, dl: 40932 },
    { date: new Date(2000, 10, 10), fr: 33409, dl: 31946 },
    { date: new Date(2001, 11, 11), fr: 44152, dl: 33271 },
];

export default function Chart() {
  return (
    <Box sx={{paddingBottom: '24px'}}>
        <Grid container flexDirection="row" justifyContent="space-between" spacing={2}>
            <Grid size="auto">
                <div style={{display: 'flex', alignItems: 'flex-start'}}>
                    <Typography component="span" fontWeight={600} color="secondary" variant="subtitle2" gutterBottom>All Revenue</Typography>
                    <KeyboardArrowDownOutlinedIcon color='action' />
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography fontWeight={600} component="span" variant="h5">$8,746.22</Typography>
                    <Button variant="outlined" style={{ padding: "0px 4px", margin: "8px" }} disableElevation disableFocusRipple disableRipple disableTouchRipple color="inherit" size="small" startIcon={<ArrowOutwardIcon color="success" />}>
                        <Typography variant="body2">2.4%</Typography>
                    </Button>
                </div>
            </Grid>
            <Grid size="auto" alignContent="end">
                <Grid container flexDirection="row" wrap="nowrap" className='chart-filter-tabs'>
                    <Grid><Typography variant="body2" color="secondary" className={`chart-filter-tab active`}>12 months</Typography></Grid>
                    <Grid><Typography variant="body2" color="secondary" className={`chart-filter-tab`}>30 days</Typography></Grid>
                    <Grid><Typography variant="body2" color="secondary" className={`chart-filter-tab`}>7 days</Typography></Grid>
                    <Grid><Typography variant="body2" color="secondary" className={`chart-filter-tab`}>24 Hours</Typography></Grid>
                </Grid>
            </Grid>
        </Grid>
        <LineChart
            dataset={dataset}
            xAxis={[
                {
                id: 'Months',
                dataKey: 'date',
                scaleType: 'band',
                valueFormatter: (date) => {
                    return date.toLocaleString('default', { month: 'short' })
                },
                },
            ]}
            series={[
                {
                    id: 'France',
                    dataKey: 'fr',
                    stack: 'total',
                    showMark: false,
                    // curve: "linear",
                    color: '#9E77ED',
                },
                {
                    id: 'Germany',
                    dataKey: 'dl',
                    stack: 'total',
                    showMark: false,
                    // curve: "linear",
                    color: '#9E77ED',
                },
            ]}
            
            //   width={600}
            height={300}
            margin={{ top: 30, bottom: 30 }}
            grid={{ horizontal: true }}
        />
    </Box>
  );
}
