import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./styles.css";
import { SetStateAction } from "react";

interface tableProps {
  data: {
    columnNames: string[];
    sections: {
      title?: string;
      includesForm?: boolean;
      subSections: {
        title: string;
        data: {
          name: string;
          index: number;
          base: number | null;
          VAT: number | null;
          editable?: boolean;
          onChangeHandler?: React.Dispatch<
            SetStateAction<string | number | undefined>
          >;
        }[];
      }[];
    }[];
  };
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CustomTable = ({ data }: tableProps) => {
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
            {data.columnNames.map((name, i) => (
              <TableCell align="center" key={i}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="tab2-table-body">
          {data.sections.map((item, i) => {
            return (
              <>
                {item.title && (
                  <TableRow key={i}>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {i + 1}
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Typography fontWeight={"bold"}>{item.title}</Typography>{" "}
                    </TableCell>
                  </TableRow>
                )}

                {item.subSections.map((subSection, j) => {
                  return (
                    <>
                      {!item.includesForm && (
                        <TableRow
                          style={{ backgroundColor: "#b7e6eb" }}
                          key={j}
                        >
                          <TableCell>({j+1})</TableCell>
                          <TableCell colSpan={3}>
                            <Typography> {subSection.title}</Typography>{" "}
                          </TableCell>
                        </TableRow>
                      )}

                      {subSection.data.map((row, i) => (
                        <StyledTableRow key={row.name}>
                          <TableCell> ({row.index}) </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ fontWeight: row.editable ? "bold" : "" }}
                            colSpan={!row.base ? 2 : 0}
                          >
                            {row.name}
                          </TableCell>
                          {row.base && (
                            <TableCell align="right">
                              <TextField
                                id="outlined-basic"
                                variant="outlined"
                                value={row.base}
                                disabled={!row.editable}
                                size="small"
                              />
                            </TableCell>
                          )}
                          <TableCell align="right">
                            {row.VAT && (
                              <TextField
                                id="outlined-basic"
                                variant="outlined"
                                value={row.VAT}
                                disabled={!row.editable}
                                size="small"
                                onChange={(e) =>
                                  row.onChangeHandler &&
                                  row.onChangeHandler(e.target.value)
                                }
                              />
                            )}
                          </TableCell>
                        </StyledTableRow>
                      ))}
                    </>
                  );
                  {
                  }
                })}
                {item.includesForm && (
                  <TableRow key={i}>
                    <TableCell colSpan={4} align="right">
                      <Button
                        type="submit"
                        variant="outlined"
                        sx={{ margin: "1rem" }}
                      >
                        Save changes
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
