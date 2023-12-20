import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { SetStateAction, useMemo } from "react";
import { CustomTable } from "../../../../components/CustomTable/CustomTable";
import { DetailsForm } from "./components/DetailsForm";
import { Form, Formik } from "formik";

function createData(
  name: string,
  index: number,
  base: number | null,
  VAT: number | null,
  boldTitle?: boolean,
  editable?: boolean,
  onChangeHandler?: React.Dispatch<SetStateAction<number>>
) {
  return { name, index, base, VAT, boldTitle, editable, onChangeHandler };
}
export const Tab1 = () => {
  const tableData = useMemo(() => {
    const rows11 = [
      createData(
        "Промет добара и услуга који је ослобођен ПДВ са правом на одбитак претходног пореза",
        1,
        159,
        null
      ),
      createData(
        "Промет добара и услуга који је ослобођен без права на одбитак претходног пореза",
        2,
        12,
        null
      ),
      createData("Промет добара и услуга по општој стопи", 3, 262, 16.0),
      createData(
        "Појединачна евиденција ПДВ – испорука – промет",
        4,
        262,
        16.0
      ),
      createData("ЗБИР (1+2+3+4)", 5, 262, 16.0, true),
    ];
    const rows12 = [
      createData("Претходни порез плаћен приликом увоза", 6, 159, 12),
      createData("ПДВ надокнада плаћена пољопривреднику", 7, null, 237),
      createData(
        "Претходни порез, осим претходног пореза са ред. бр. 6. и 7.",
        8,
        262,
        16.0
      ),
      createData("ЗБИР (6+7+8)", 9, 262, 16.0, true),
    ];
    const rows21 = [
      createData("Износ ПДВ у пореском периоду (5-9)", 10, null, 12, true),
    ];

    return {
      columnNames: ["Износ накнаде без ПДВ", "ПДВ (у динарима без децимала)"],
      sections: [
        {
          subSections: [
            { title: "ПРОМЕТ ДОБАРА И УСЛУГА", boldTitle: true, data: rows11 },
            { title: "ПРЕТХОДНИ ПОРЕЗ", boldTitle: true, data: rows12 },
            { title: "ПОРЕСКА ОБАВЕЗА", boldTitle: true, data: rows21 },
          ],
        },
      ],
    };
  }, []);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <Form>
        <div style={{ paddingTop: "5px" }}>
          <Typography
            align="left"
            padding={"1rem 0.5rem"}
            paddingLeft={0}
            fontWeight={"bold"}
          >
            МИНИСТАРСТВО ФИНАНСИЈА, ПОРЕСКА УПРАВА
          </Typography>

          <DetailsForm />
          <CustomTable data={tableData} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "8px",
            }}
          >
            <TextField
              label="Повраћај"
              sx={{ width: "40%", marginY: "0.5rem" }}
              // sx={{
              //   width: "40%",
              // }}
              value={""}
            />
            <Button type="submit" variant="outlined" sx={{ margin: "1rem" }}>
              Save changes
            </Button>
          </Box>
        </div>
      </Form>
    </Formik>
  );
};
