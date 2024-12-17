import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import CustomCheckbox1 from '../FormComponents/CheckBox1';
import { Button, IconButton, OutlinedInput, Pagination } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatars from '../UtilityComponents/Avatars';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const initialRows = [
  {name: 'Lily-Rose Chedjou', email: 'lilyrose@gmail.com', userId: 'lilyrose', date: new Date(2025, 1, 16), status: 'Paid', ammount: 100.14},
  {name: 'Caitlyn King', email: 'caitlynking@gmail.com', userId: 'caitlynking', date: new Date(2025, 1, 16), status: 'Paid', ammount: 96.32},
  {name: 'Fleur Cook', email: 'fleurcook@gmail.com', userId: 'fleur_cook', date: new Date(2025, 1, 15), status: 'Paid', ammount: 104.25},
  {name: 'Macro Kelly', email: 'kellymacro@gmail.com', userId: 'macro_kelly', date: new Date(2025, 1, 15), status: 'Paid', ammount: 88.4},
  {name: 'Lulu Meyers', email: 'lulu.meyers@gmail.com', userId: 'lulu_m', date: new Date(2025, 1, 14), status: 'Paid', ammount: 96.32},
  {name: 'Mikey Lawrence', email: 'm.lawrence@gmail.com', userId: 'mikeylawrence', date: new Date(2025, 1, 14), status: 'Paid', ammount: 107.10},
  {name: 'Freya Browning', email: 'hey.freya@gmail.com', userId: 'freya_b', date: new Date(2025, 1, 14), status: 'Paid', ammount: 82.04},
  {name: 'Lily-Rose Chedjou', email: 'lilyrose@gmail.com', userId: 'lilyrose', date: new Date(2025, 1, 16), status: 'Paid', ammount: 100.14},
  {name: 'Caitlyn King', email: 'caitlynking@gmail.com', userId: 'caitlynking', date: new Date(2025, 1, 16), status: 'Paid', ammount: 96.32},
  {name: 'Fleur Cook', email: 'fleurcook@gmail.com', userId: 'fleur_cook', date: new Date(2025, 1, 15), status: 'Paid', ammount: 104.25},
  {name: 'Macro Kelly', email: 'kellymacro@gmail.com', userId: 'macro_kelly', date: new Date(2025, 1, 15), status: 'Paid', ammount: 88.4},
  {name: 'Lulu Meyers', email: 'lulu.meyers@gmail.com', userId: 'lulu_m', date: new Date(2025, 1, 14), status: 'Paid', ammount: 96.32},
  {name: 'Mikey Lawrence', email: 'm.lawrence@gmail.com', userId: 'mikeylawrence', date: new Date(2025, 1, 14), status: 'Paid', ammount: 107.10},
  {name: 'Freya Browning', email: 'hey.freya@gmail.com', userId: 'freya_b', date: new Date(2025, 1, 14), status: 'Paid', ammount: 82.04},
  {name: 'Lily-Rose Chedjou', email: 'lilyrose@gmail.com', userId: 'lilyrose', date: new Date(2025, 1, 16), status: 'Paid', ammount: 100.14},
  {name: 'Caitlyn King', email: 'caitlynking@gmail.com', userId: 'caitlynking', date: new Date(2025, 1, 16), status: 'Paid', ammount: 96.32},
  {name: 'Fleur Cook', email: 'fleurcook@gmail.com', userId: 'fleur_cook', date: new Date(2025, 1, 15), status: 'Paid', ammount: 104.25},
  {name: 'Macro Kelly', email: 'kellymacro@gmail.com', userId: 'macro_kelly', date: new Date(2025, 1, 15), status: 'Paid', ammount: 88.4},
  {name: 'Lulu Meyers', email: 'lulu.meyers@gmail.com', userId: 'lulu_m', date: new Date(2025, 1, 14), status: 'Paid', ammount: 96.32},
  {name: 'Mikey Lawrence', email: 'm.lawrence@gmail.com', userId: 'mikeylawrence', date: new Date(2025, 1, 14), status: 'Paid', ammount: 107.10},
  {name: 'Freya Browning', email: 'hey.freya@gmail.com', userId: 'freya_b', date: new Date(2025, 1, 14), status: 'Paid', ammount: 82.04},
  {name: 'Lily-Rose Chedjou', email: 'lilyrose@gmail.com', userId: 'lilyrose', date: new Date(2025, 1, 16), status: 'Paid', ammount: 100.14},
  {name: 'Caitlyn King', email: 'caitlynking@gmail.com', userId: 'caitlynking', date: new Date(2025, 1, 16), status: 'Paid', ammount: 96.32},
  {name: 'Fleur Cook', email: 'fleurcook@gmail.com', userId: 'fleur_cook', date: new Date(2025, 1, 15), status: 'Paid', ammount: 104.25},
  {name: 'Macro Kelly', email: 'kellymacro@gmail.com', userId: 'macro_kelly', date: new Date(2025, 1, 15), status: 'Paid', ammount: 88.4},
  {name: 'Lulu Meyers', email: 'lulu.meyers@gmail.com', userId: 'lulu_m', date: new Date(2025, 1, 14), status: 'Paid', ammount: 96.32},
  {name: 'Mikey Lawrence', email: 'm.lawrence@gmail.com', userId: 'mikeylawrence', date: new Date(2025, 1, 14), status: 'Paid', ammount: 107.10},
  {name: 'Freya Browning', email: 'hey.freya@gmail.com', userId: 'freya_b', date: new Date(2025, 1, 14), status: 'Paid', ammount: 82.04},
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Customer',
    width: '35%',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
    width: '25%',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date',
    width: '15%',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
    width: '15%',
  },
  {
    id: 'ammount',
    numeric: true,
    disablePadding: false,
    label: 'Ammount',
    width: '15%',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <CustomCheckbox1
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            width={headCell.width}
            sx={{display: {xs: index === 0 ? 'table-cell' : 'none', md: 'table-cell'}}}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              IconComponent={() => <UnfoldMoreIcon color='action' fontSize='24px' />}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography color='secondary' variant="body2" fontSize={14}>{headCell.label}</Typography>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar() {
  return (
    <Toolbar
      sx={[ { pl: { sm: 2 }, pr: { xs: 1, sm: 1 }, }, ]}
    >
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          component="div"
          fontWeight={600}
        >
          Customers
        </Typography>
        <OutlinedInput size='small' placeholder="Search" startAdornment={<SearchOutlinedIcon color='secondary' />} />
    </Toolbar>
  );
}

export default function DashboardTable() {
  const [rows, setRows] = React.useState([...initialRows]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(7);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage-1);
  };

  const handleChangeNextPage = () => {
    setPage((prevPage) => prevPage+1);
  };

  const handleChangePrevPage = () => {
    setPage((prevPage) => prevPage-1);
  };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows],
  );

  const onDeleteRow = (index) => (e) => {
    e.stopPropagation();
    setRows((prevState) => {
        let tempState = [...prevState];
        tempState.splice(index, 1);
        return [...tempState]
    })
  }

  return (
    <Box sx={{ width: '100%', paddingBottom: '24px' }}>
      <Paper sx={{ width: '100%', mb: 2 }} elevation={0}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: {xs: '100%', md: '750px'} }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <CustomCheckbox1
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Grid container spacing={2} sx={{padding: '8px'}} direction="row">
                        <Grid><Avatars name={row.name} /></Grid>
                        <Grid>
                            <Typography variant="body1">{row.name}</Typography>
                            <Typography color='secondary' variant="body2">@{row.userId}</Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell sx={{display: {xs: 'none', md: 'table-cell'}}}><Typography color='secondary' variant="body2">{row.email}</Typography></TableCell>
                    <TableCell sx={{display: {xs: 'none', md: 'table-cell'}}}><Typography color='secondary' variant="body2">{row.date.toDateString()}</Typography></TableCell>
                    <TableCell sx={{display: {xs: 'none', md: 'table-cell'}}}>
                        <Button sx={{borderColor: 'secondary.light' }} variant="outlined" style={{ padding: "0px", textTransform: 'none' }} disableElevation disableFocusRipple disableRipple disableTouchRipple color="inherit" size="small" startIcon={<FiberManualRecordIcon fontSize="12px" color="success" />}>
                            <Typography color='secondary' variant="body2">{row.status}</Typography>
                        </Button>
                    </TableCell>
                    <TableCell sx={{display: {xs: 'none', md: 'table-cell'}}}><Typography color='secondary' variant="body2">${row.ammount}</Typography></TableCell>
                    <TableCell sx={{display: {xs: 'none', md: 'flex'}}}>
                        <IconButton size='small' onClick={onDeleteRow(index)}><DeleteOutlineRoundedIcon color='secondary' fontSize='small' /></IconButton>
                        <IconButton size='small'><EditOutlinedIcon color='secondary' fontSize='small' /></IconButton>
                    </TableCell>
                    <TableCell sx={{display: {md: 'none'}}}>
                        <IconButton size='small' color='secondary' ><MoreVertOutlinedIcon /></IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (53 * emptyRows), }} >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container justifyContent="space-between" sx={{paddingTop: '8px'}}>
            <Grid>
                <Button sx={{borderColor: 'secondary.light', borderRadius: '8px' }} onClick={handleChangePrevPage} disabled={page === 0} variant="outlined" disableFocusRipple disableRipple disableTouchRipple color="inherit" startIcon={<ArrowBackIcon fontSize="small" color="secondary" />}>
                    <Typography textTransform="none" color="secondary" variant="subtitle2">Previous</Typography>
                </Button>
            </Grid>
            <Grid><Pagination hideNextButton hidePrevButton count={Math.ceil(rows.length / rowsPerPage)} page={page+1} onChange={handleChangePage} /></Grid>
            <Grid>
                <Button sx={{borderColor: 'secondary.light', borderRadius: '8px' }} onClick={handleChangeNextPage} disabled={page+1 === Math.ceil(rows.length / rowsPerPage)} variant="outlined" disableFocusRipple disableRipple disableTouchRipple color="inherit" startIcon={<ArrowForwardIcon fontSize="small" color="secondary" />}>
                    <Typography textTransform="none" color="secondary" variant="subtitle2">Next</Typography>
                </Button>
            </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
