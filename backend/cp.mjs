//mjs damit man import machen kann, da in js nur require
// node backend/cp.mjs Spain ==> wird PageSpan automatisch erstellt
// npm run build ==> dist erstellt
import fs from "fs";

const name = process.argv[2];

if (name === undefined) {
  console.log("SCRIPT: cp");
  console.log("NAME: create page");
  console.log("--------------");
  console.log("EXAMPLE: npm run cp Info");
  console.log("RESULT: creates page /src/components/PageInfo.tsx");
  process.exit();
} else {
  const content = `export const Page${name} =()=>{
        return (
            <>
            <p>welcome to the ${name} page</p>
            </>
        );
    }
    `;
  (async () => {
    fs.writeFile(`./src/components/Page${name}.tsx`, content.trim(), () => {});
  })();
}
