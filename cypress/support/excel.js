// const XLSX = require("xlsx");
// const fs = require("fs");

// export class Excel{
//   readExcel(fileName, generatedFileName)
//   {
//     try {
//       const workBook = XLSX.readFile("./cypress/fixtures/"+fileName+".xlsx");
//       const sheetName = workBook.SheetNames[0];
//       const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
//       console.log(jsonData);
//       fs.writeFileSync(
//         "./cypress/fixtures/"+generatedFileName+".json",
//         JSON.stringify(jsonData, null, 4),
//         "utf-8"
//       );
//     } catch (e) {
//       throw Error(e);
//     }
//   }
// }


    // try {
    //   const workBook = XLSX.readFile("./cypress/fixtures/credentials.xlsx");
    //   const sheetName = workBook.SheetNames[0];
    //   const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
    //   console.log(jsonData);
    //   fs.writeFileSync(
    //     "./cypress/fixtures/"+"generatedFileName"+".json",
    //     JSON.stringify(jsonData, null, 4),
    //     "utf-8"
    //   );
    // } catch (e) {
    //   throw Error(e);
    // }