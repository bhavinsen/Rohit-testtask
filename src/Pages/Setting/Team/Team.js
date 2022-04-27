import React from "react";
import PropTypes from "prop-types";
import {
   Box,
   Typography,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TablePagination,
   TableHead,
   TableRow,
   TableSortLabel,
   Avatar,
   Paper,
   Checkbox
} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from "@mui/icons-material/Add";
import { visuallyHidden } from "@mui/utils";
import Girl from '../../../Assets/Image/Girl.png'
import { TeamStyle } from "./Style";

function createData(name, calories, fat, carbs, protein) {
   return {
      name,
      calories,
      fat,
      carbs,
      protein,
   };
}

const rows = [
   createData("Cupcake", 305, 3.7, 67, 4.3),
   createData("Donut", 452, 25.0, 51, 4.9),
   createData("Eclair", 262, 16.0, 24, 6.0),
   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
   createData("Gingerbread", 356, 16.0, 49, 3.9),
   createData("Honeycomb", 408, 3.2, 87, 6.5),
   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
   createData("Jelly Bean", 375, 0.0, 94, 0.0),
   createData("KitKat", 518, 26.0, 65, 7.0),
   createData("Lollipop", 392, 0.2, 98, 0.0),
   createData("Marshmallow", 318, 0, 81, 2.0),
   createData("Nougat", 360, 19.0, 9, 37.0),
   createData("Oreo", 437, 18.0, 63, 4.0),
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
   return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
   const stabilizedThis = array.map((el, index) => [el, index]);
   stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
         return order;
      }
      return a[1] - b[1];
   });
   return stabilizedThis.map((el) => el[0]);
}

const headCells = [
   {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Name",
   },
   {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "Status",
   },
   {
      id: "email",
      numeric: true,
      disablePadding: false,
      label: "Email address",
   },
   {
      id: "teams",
      numeric: true,
      disablePadding: false,
      label: "Teams",
   },
   {
      id: "action",
      numeric: true,
      disablePadding: false,
      label: "",
   },
];

function EnhancedTableHead(props) {
   const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
   } = props;
   const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
   };

   return (
      <TableHead>
         <TableRow>
            <TableCell padding="checkbox">
               <Checkbox
                  color="primary"
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                  inputProps={{
                     "aria-label": "select all desserts",
                  }}
               />
            </TableCell>
            {headCells.map((headCell) => (
               <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? "right" : "left"}
                  padding={headCell.disablePadding ? "none" : "normal"}
                  sortDirection={orderBy === headCell.id ? order : false}
               >
                  <TableSortLabel
                     active={orderBy === headCell.id}
                     direction={orderBy === headCell.id ? order : "asc"}
                     onClick={createSortHandler(headCell.id)}
                  >
                     {headCell.label}
                     {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                           {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                        </Box>
                     ) : null}
                  </TableSortLabel>
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   );
}

EnhancedTableHead.propTypes = {
   numSelected: PropTypes.number.isRequired,
   onRequestSort: PropTypes.func.isRequired,
   onSelectAllClick: PropTypes.func.isRequired,
   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
   orderBy: PropTypes.string.isRequired,
   rowCount: PropTypes.number.isRequired,
};

const Team = () => {
   const [order, setOrder] = React.useState("asc");
   const [orderBy, setOrderBy] = React.useState("calories");
   const [selected, setSelected] = React.useState([]);
   const [page, setPage] = React.useState(0);
   const [dense, setDense] = React.useState(false);
   const [rowsPerPage, setRowsPerPage] = React.useState(5);

   const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
   };

   const handleSelectAllClick = (event) => {
      if (event.target.checked) {
         const newSelecteds = rows.map((n) => n.name);
         setSelected(newSelecteds);
         return;
      }
      setSelected([]);
   };

   const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
         newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
         newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
         newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
         newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1)
         );
      }

      setSelected(newSelected);
   };

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   const handleChangeDense = (event) => {
      setDense(event.target.checked);
   };

   const isSelected = (name) => selected.indexOf(name) !== -1;

   const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
   return (
      <TeamStyle>
         <Box className="TeamMain">
            <Box className="teamHeader">
               <Box className="teamTitle">
                  <Typography variant="h6">Team members</Typography>
                  <Typography>48 users</Typography>
               </Box>
               <Box className="downloadBtn">
                  <button>
                     <CloudDownloadIcon />
                     Download CSV
                  </button>
                  <button className="btnUser">
                     <AddIcon />
                     Add user
                  </button>
               </Box>
            </Box>
            <Box className="memberdetails">
               <Box sx={{ width: "100%" }}>
                  <Paper sx={{ width: "100%", mb: 2 }}>
                     <TableContainer>
                        <Table
                           sx={{ minWidth: 750 }}
                           aria-labelledby="tableTitle"
                           size={dense ? "small" : "medium"}
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
                              {stableSort(rows, getComparator(order, orderBy))
                                 .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                 )
                                 .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                       <TableRow
                                          hover
                                          onClick={(event) =>
                                             handleClick(event, row.name)
                                          }
                                          role="checkbox"
                                          aria-checked={isItemSelected}
                                          tabIndex={-1}
                                          key={row.name}
                                          selected={isItemSelected}
                                       >
                                          <TableCell padding="checkbox">
                                             <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                   "aria-labelledby": labelId,
                                                }}
                                             />
                                          </TableCell>
                                          <TableCell
                                             component="th"
                                             id={labelId}
                                             scope="row"
                                             padding="none"
                                          >
                                            <Box className="nameData">
                                                <Avatar alt="Remy Sharp" src={Girl} />
                                                <Box sx={{pl:2}}>
                                                    <Typography variant="h4">Olivia Rhye</Typography>
                                                    <Typography variant="h6">@olivia</Typography>
                                                </Box>          
                                            </Box>
                                          </TableCell>
                                          <TableCell align="left">
                                            <Box className="statusData">
                                                <Typography>Active</Typography>
                                            </Box>
                                          </TableCell>
                                            <TableCell align="left">
                                                <Box className="nameData">
                                                    <Typography variant="h6">Olivia@untitledui.com</Typography>
                                                </Box>
                                          </TableCell>
                                          <TableCell align="left">
                                            <Box className="teamData">
                                                <Typography>Design</Typography>
                                                <Typography className="bgBlue" sx={{ml:1}}>Product</Typography>
                                            </Box>
                                          </TableCell>
                                          <TableCell align="left">
                                            <Box className="actionData">
                                                <DeleteIcon/>
                                                    <EditIcon sx={{ ml: 2 }}/>
                                            </Box>
                                          </TableCell>
                                       </TableRow>
                                    );
                                 })}
                              {emptyRows > 0 && (
                                 <TableRow
                                    style={{
                                       height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                 >
                                    <TableCell colSpan={6} />
                                 </TableRow>
                              )}
                           </TableBody>
                        </Table>
                     </TableContainer>
                     <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                     />
                  </Paper>
               </Box>
            </Box>
         </Box>
      </TeamStyle>
   );
};

export default Team;
