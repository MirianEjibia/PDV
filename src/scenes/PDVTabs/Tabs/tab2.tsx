import { TextField, Typography } from "@mui/material";
import { CustomTable } from "../../../components/CustomTable/CustomTable";
import { SetStateAction, useMemo, useState } from "react";

function createData(
  name: string,
  index: number,
  base: number | null,
  VAT: number,
  editable?: boolean,
  onChangeHandler?: React.Dispatch<SetStateAction<string | number | undefined>>
) {
  return { name, index, base, VAT, editable, onChangeHandler };
}

export function Tab2() {
  const [val1, setVal1] = useState<string | number>(1);
  const [val2, setVal2] = useState<string | number>(2);

  const tableData = useMemo(() => {
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
        "електронска фактура – документ о повећању - пореска категорија С",
        1.3,
        262,
        16.0
      ),
      createData(
        "Појединачна евиденција ПДВ – испорука – промет",
        1.4,
        262,
        16.0
      ),
      createData(
        "Појединачна евиденција ПДВ – испорука – документ о повећању",
        1.5,
        262,
        16.0
      ),
      createData(
        "Појединачна евиденција ПДВ – испорука – аванс",
        1.6,
        null,
        16.0
      ),
      createData("Збирна евиденција ПДВ  - промет уз накнаду", 1.7, 262, 16.0),
      createData("Збирна евиденција ПДВ  - промет без накнаде", 1.8, 262, 16.0),
      createData("Збирна евиденција ПДВ  - аванс.", 1.9, null, 16.0),
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
        "електронска фактура – документ о повећању - пореска категорија С",
        2.3,
        262,
        16.0
      ),
      createData(
        "Појединачна евиденција ПДВ – испорука – промет",
        2.4,
        262,
        16.0
      ),
      createData(
        "Појединачна евиденција ПДВ – испорука – документ о повећању",
        2.5,
        262,
        16.0
      ),
      createData(
        "Појединачна евиденција ПДВ – испорука – аванс;",
        2.6,
        null,
        16.0
      ),
      createData("Збирна евиденција ПДВ  - промет уз накнаду", 2.7, 262, 16.0),
      createData(
        "Збирна евиденција ПДВ  - промет без накнаде;",
        2.8,
        262,
        16.0
      ),
      createData("Збирна евиденција ПДВ  - аванс.", 2.9, null, 16.0),
    ];
    const rows21 = [
      createData(
        "Појединачна евиденција ПДВ – набавка – интерни рачун за промет страног лица - промет",
        1.1,
        null,
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
        null,
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
        2.2,
        null,
        262
      ),
      createData(
        "Појединачна евиденција ПДВ – набавка – други интерни рачун - промет",
        2.3,
        305,
        3.7
      ),
      createData(
        "Појединачна евиденција ПДВ – набавка – други интерни рачун – аванс.",
        2.4,
        null,
        356
      ),
    ];

    const row31 = [
      createData(
        "Збирна евиденција ПДВ  - повећање (збирно по обе пореске стопе)",
        1,
        null,
        val1,
        true,
        setVal1
      ),
      createData(
        "Збирна евиденција ПДВ  - смањење (збирно по обе пореске стопе).",
        2,
        null,
        val2,
        true,
        setVal2
      ),
    ];

    return {
      columnNames: ["Osnovica", "PDV"],
      sections: [
        {
          title:
            "Обрачунати ПДВ за који је испоручилац порески дужник у складу са ЗПДВ",
          subSections: [
            { title: "По општој стопи ПДВ од 20%", data: rows11 },
            { title: "По посебној стопи ПДВ од 10%", data: rows12 },
          ],
        },
        {
          title:
            "Обрачунати ПДВ за који је прималац порески дужник у складу са ЗПДВ",
          subSections: [
            { title: "По општој стопи ПДВ од 20%", data: rows21 },
            { title: "По посебној стопи ПДВ од 10%", data: rows22 },
          ],
        },
        {
          title: "Корекције",
          subSections: [{ title: "", data: row31 }],
          includesForm: true,
        },
      ],
    };
  }, []);
  return (
    <div style={{ paddingTop: "5px" }}>
      <Typography
        align="left"
        padding={"1rem 0.5rem"}
        paddingLeft={0}
        fontWeight={"bold"}
      >
        ПОДАЦИ О ИЗНОСУ ОСНОВИЦЕ И ОБРАЧУНАТОМ ПДВ - ИЗВОР СЕФ
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("values", val1, val2);
        }}
      >
        <CustomTable data={tableData} />
      </form>
    </div>
  );
}
