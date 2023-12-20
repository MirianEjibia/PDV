import { Form, Formik } from "formik";
import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import "./styles.css";
import { CustomTextField } from "../../../../../components/CustomTextField/CustomTextField";
import FormControl from "@mui/material/FormControl";

export const DetailsForm = () => {
  return (
    <TableContainer component={Paper} sx={{ paddingTop: "5px" }}>
    <Table
      sx={{ minWidth: 650, padding: 0 }}
      aria-label="simple table"
      size="small"
      stickyHeader
    >
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="tab2-table-body">
        <TableRow sx={{ backgroundColor: "#b7e6eb" }}>
          <TableCell colSpan={4}>
            <Typography>ПОДАЦИ О ПРИЈАВИ</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4}>
            <Table>
              <TableRow sx={{ border: "none" }}>
                <TableCell
                  colSpan={2}
                  sx={{ padding: 0, border: "none" }}
                >
                  <Typography sx={{ padding: 0 }}>
                    {" "}
                    Порески период
                  </Typography>
                </TableCell>
                <TableCell
                  colSpan={2}
                  sx={{ border: "none", paddingY: 0 }}
                >
                  <Typography>
                    <FormControlLabel
                      // value="start"
                      control={<Checkbox />}
                      label="Измена пријаве"
                      labelPlacement="end"
                    />
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{ paddingTop: "0.5rem", paddingLeft: 0, border: 'none' }}
                >
                  <Grid container>
                    <Grid item xs={5} sx={{ paddingRight: "1rem" }}>
                      <TextField
                        fullWidth
                        label={
                          <Typography fontSize={20} fontWeight={"bold"}>
                            {" "}
                            from{" "}
                          </Typography>
                        }
                        value={"11/11/2011"}
                        // size="small"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        label={
                          <Typography fontSize={20} fontWeight={"bold"}>
                            {" "}
                            to{" "}
                          </Typography>
                        }
                        value={"12/12/2012"}
                        // size="small"
                      />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  colSpan={2}
                  sx={{ border: "none", paddingTop: "0.5rem" }}
                >
                  <TextField
                    label={
                      <div>Идентификациони број пријаве која се мења</div>
                    }
                    sx={{
                      width: "100%",
                    }}
                    value={""}
                  />
                </TableCell>
              </TableRow>
            </Table>
          </TableCell>
        </TableRow>
        <TableRow sx={{ backgroundColor: "#b7e6eb" }}>
          <TableCell colSpan={4}>
            <Typography>ПОДАЦИ О ПОДНОСИОЦУ:</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4} sx={{paddingBottom: '24px'}}>
            <Box sx={{ display: "flex" }}>
              {/* <Grid item xs={3}> */}
              <FormControl
                fullWidth
                sx={{ m: 1, minWidth: 120, marginLeft: 0 }}
              >
                <InputLabel
                  id="demo-simple-select-helper-label"
                  // sx={{ fontWeight: "bold", fontSize: 20 }}
                >
                  Тип подносиоца
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={""}
                  label="Тип подносиоца"
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              {/* </Grid> */}
              {/* <Grid item xs={3}> */}
              <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                <InputLabel
                  id="demo-simple-select-helper-label"
                  // sx={{ fontWeight: "bold", fontSize: 20 }}
                >
                  Ознака пореског периода
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={""}
                  label="Ознака пореског периода"
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              {/* </Grid> */}
              {/* <Grid item xs={3}> */}
              <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                <TextField
                  label={<div>Порески идентификациони бро</div>}
                  sx={{
                    width: "100%",
                  }}
                  value={""}
                />
              </FormControl>
              {/* </Grid> */}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <FormControl sx={{width: '40%', marginTop: '8px'}}>
                <TextField
                  label="Назив, односно име и презиме и адреса"
                  sx={{
                    // width: "40%",
                    marginRight: "16px",
                  }}
                  value={""}
                />
              </FormControl>
              <FormControl sx={{width: '40%', marginTop: '8px'}}>
                <TextField
                  label="Електронска пошта"
                  // sx={{
                  //   width: "40%",
                  // }}
                  value={""}
                />
              </FormControl>
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
    // <Formik
    //   initialValues={{
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //   }}
    //   onSubmit={async (values) => {
    //     console.log(values);
    //   }}
    // >
    //   <Form>
    //     <TableContainer component={Paper} sx={{ paddingTop: "5px" }}>
    //       <Table
    //         sx={{ minWidth: 650, padding: 0 }}
    //         aria-label="simple table"
    //         size="small"
    //         stickyHeader
    //       >
    //         <TableHead>
    //           <TableRow>
    //             <TableCell></TableCell>
    //             <TableCell></TableCell>
    //             <TableCell></TableCell>
    //             <TableCell></TableCell>
    //           </TableRow>
    //         </TableHead>
    //         <TableBody className="tab2-table-body">
    //           <TableRow sx={{ backgroundColor: "#b7e6eb" }}>
    //             <TableCell colSpan={4}>
    //               <Typography>ПОДАЦИ О ПРИЈАВИ</Typography>
    //             </TableCell>
    //           </TableRow>
    //           <TableRow>
    //             <TableCell colSpan={4}>
    //               <Table>
    //                 <TableRow sx={{ border: "none" }}>
    //                   <TableCell
    //                     colSpan={2}
    //                     sx={{ padding: 0, border: "none" }}
    //                   >
    //                     <Typography sx={{ padding: 0 }}>
    //                       {" "}
    //                       Порески период
    //                     </Typography>
    //                   </TableCell>
    //                   <TableCell
    //                     colSpan={2}
    //                     sx={{ border: "none", paddingY: 0 }}
    //                   >
    //                     <Typography>
    //                       <FormControlLabel
    //                         // value="start"
    //                         control={<Checkbox />}
    //                         label="Измена пријаве"
    //                         labelPlacement="end"
    //                       />
    //                     </Typography>
    //                   </TableCell>
    //                 </TableRow>
    //                 <TableRow>
    //                   <TableCell
    //                     colSpan={2}
    //                     sx={{ paddingTop: "0.5rem", paddingLeft: 0, border: 'none' }}
    //                   >
    //                     <Grid container>
    //                       <Grid item xs={5} sx={{ paddingRight: "1rem" }}>
    //                         <TextField
    //                           fullWidth
    //                           label={
    //                             <Typography fontSize={20} fontWeight={"bold"}>
    //                               {" "}
    //                               from{" "}
    //                             </Typography>
    //                           }
    //                           value={"11/11/2011"}
    //                           // size="small"
    //                         />
    //                       </Grid>
    //                       <Grid item xs={5}>
    //                         <TextField
    //                           fullWidth
    //                           label={
    //                             <Typography fontSize={20} fontWeight={"bold"}>
    //                               {" "}
    //                               to{" "}
    //                             </Typography>
    //                           }
    //                           value={"12/12/2012"}
    //                           // size="small"
    //                         />
    //                       </Grid>
    //                     </Grid>
    //                   </TableCell>
    //                   <TableCell
    //                     colSpan={2}
    //                     sx={{ border: "none", paddingTop: "0.5rem" }}
    //                   >
    //                     <TextField
    //                       label={
    //                         <div>Идентификациони број пријаве која се мења</div>
    //                       }
    //                       sx={{
    //                         width: "100%",
    //                       }}
    //                       value={""}
    //                     />
    //                   </TableCell>
    //                 </TableRow>
    //               </Table>
    //             </TableCell>
    //           </TableRow>
    //           <TableRow sx={{ backgroundColor: "#b7e6eb" }}>
    //             <TableCell colSpan={4}>
    //               <Typography>ПОДАЦИ О ПОДНОСИОЦУ:</Typography>
    //             </TableCell>
    //           </TableRow>
    //           <TableRow>
    //             <TableCell colSpan={4} sx={{paddingBottom: '24px'}}>
    //               <Box sx={{ display: "flex" }}>
    //                 {/* <Grid item xs={3}> */}
    //                 <FormControl
    //                   fullWidth
    //                   sx={{ m: 1, minWidth: 120, marginLeft: 0 }}
    //                 >
    //                   <InputLabel
    //                     id="demo-simple-select-helper-label"
    //                     // sx={{ fontWeight: "bold", fontSize: 20 }}
    //                   >
    //                     Тип подносиоца
    //                   </InputLabel>
    //                   <Select
    //                     fullWidth
    //                     labelId="demo-simple-select-helper-label"
    //                     id="demo-simple-select-helper"
    //                     value={""}
    //                     label="Тип подносиоца"
    //                     // onChange={handleChange}
    //                   >
    //                     <MenuItem value="">
    //                       <em>None</em>
    //                     </MenuItem>
    //                     <MenuItem value={10}>Ten</MenuItem>
    //                     <MenuItem value={20}>Twenty</MenuItem>
    //                     <MenuItem value={30}>Thirty</MenuItem>
    //                   </Select>
    //                 </FormControl>
    //                 {/* </Grid> */}
    //                 {/* <Grid item xs={3}> */}
    //                 <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
    //                   <InputLabel
    //                     id="demo-simple-select-helper-label"
    //                     // sx={{ fontWeight: "bold", fontSize: 20 }}
    //                   >
    //                     Ознака пореског периода
    //                   </InputLabel>
    //                   <Select
    //                     fullWidth
    //                     labelId="demo-simple-select-helper-label"
    //                     id="demo-simple-select-helper"
    //                     value={""}
    //                     label="Ознака пореског периода"
    //                     // onChange={handleChange}
    //                   >
    //                     <MenuItem value="">
    //                       <em>None</em>
    //                     </MenuItem>
    //                     <MenuItem value={10}>Ten</MenuItem>
    //                     <MenuItem value={20}>Twenty</MenuItem>
    //                     <MenuItem value={30}>Thirty</MenuItem>
    //                   </Select>
    //                 </FormControl>
    //                 {/* </Grid> */}
    //                 {/* <Grid item xs={3}> */}
    //                 <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
    //                   <TextField
    //                     label={<div>Порески идентификациони бро</div>}
    //                     sx={{
    //                       width: "100%",
    //                     }}
    //                     value={""}
    //                   />
    //                 </FormControl>
    //                 {/* </Grid> */}
    //               </Box>
    //               <Box sx={{ display: "flex", flexDirection: "row" }}>
    //                 <FormControl sx={{width: '40%', marginTop: '8px'}}>
    //                   <TextField
    //                     label="Назив, односно име и презиме и адреса"
    //                     sx={{
    //                       // width: "40%",
    //                       marginRight: "16px",
    //                     }}
    //                     value={""}
    //                   />
    //                 </FormControl>
    //                 <FormControl sx={{width: '40%', marginTop: '8px'}}>
    //                   <TextField
    //                     label="Електронска пошта"
    //                     // sx={{
    //                     //   width: "40%",
    //                     // }}
    //                     value={""}
    //                   />
    //                 </FormControl>
    //               </Box>
    //             </TableCell>
    //           </TableRow>
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </Form>
    // </Formik>
  );
};
