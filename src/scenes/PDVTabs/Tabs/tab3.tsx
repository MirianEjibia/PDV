import { TextField, Typography } from "@mui/material";
import { CustomTable } from "../../../components/CustomTable/CustomTable";


function createData(
  name: string,
  index: number,
  base: number | null,
  VAT: number
) {
  return { name, index, base, VAT };
}


const rows11 = [
  createData(
    "електронска фактура – фактура – пореска категорија С",
    1.1,
    159,
    12
  ),
  createData(
    "електронска фактура – авансна фактура - пореска категорија С",
    1.2,
    null,
    237
  ),
  createData(
    "електронска фактура – документ о повећању - пореска категорија С.",
    1.3,
    262,
    16.0
  ),
];
const rows12 = [
  createData(
    "електронска фактура – фактура – пореска категорија С",
    2.1,
    159,
    12
  ),
  createData(
    "електронска фактура – авансна фактура - пореска категорија С",
    2.2,
    null,
    237
  ),
  createData(
    "електронска фактура – документ о повећању - пореска категорија С.",
    2.3,
    262,
    16.0
  ),
];
const rows21 = [
  createData(
    "Појединачна евиденција ПДВ – набавка – интерни рачун за промет страног лица - промет",
    1.1,
    159,
    12
  ),
  createData(
    "Појединачна евиденција ПДВ – набавка – интерни рачун за промет страног лица - аванс",
    1.2,
    null,
    237
  ),
  createData(
    "Појединачна евиденција ПДВ – набавка – други интерни рачун - промет",
    1.3,
    262,
    16.0
  ),
  createData(
    "Појединачна евиденција ПДВ – набавка – други интерни рачун – аванс.",
    1.4,
    null,
    305
  ),
];
const rows22 = [
  createData(
    "Појединачна евиденција ПДВ – набавка – интерни рачун за промет страног лица - промет",
    2.1,
    159,
    22
  ),
  createData(
    "Појединачна евиденција ПДВ – набавка – интерни рачун за промет страног лица - аванс;",
    2.3,
    null,
    262
  ),
  createData(
    "Појединачна евиденција ПДВ – набавка – други интерни рачун - промет",
    2.4,
    305,
    3.7
  ),
  createData(
    "Појединачна евиденција ПДВ – набавка – други интерни рачун – аванс.",
    2.5,
    null,
    356
  ),
];

const tableData = {
  columnNames: ["Osnovica", "PDV"],
  sections: [
    {
      title: "ПДВ исказан у електронској фактури добављача",
      subSections: [
        { title: "По општој стопи ПДВ од 20%", data: rows11 },
        { title: "По посебној стопи ПДВ од 10%", data: rows12 },
      ],
    },
    {
      title: "ПДВ из интерних рачуна (прималац – порески дужник)",
      subSections: [
        { title: "По општој стопи ПДВ од 20%", data: rows21 },
        { title: "По посебној стопи ПДВ од 10%", data: rows22 },
      ],
    },
  ],
};
export function Tab3() {
  return (
    <div style={{ paddingTop: "5px" }}>
      <Typography
        align="left"
        padding={"1rem 0.5rem"}
        paddingLeft={0}
        fontWeight={"bold"}
      >
        ПОДАЦИ О ПОТЕНЦИЈАЛНОМ ПРЕТХОДНОМ ПДВ - ИЗВОР СЕФ
      </Typography>
      <CustomTable data={tableData}/>
    </div>
  );
}
