import fs from "fs";
import path from "path";

const componentsDir = path.resolve("cypress/src/components");
const registryFile = path.resolve("cypress/src/componentRegistry.js");

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith(".js"));

let content = `// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.\n`;
content += `// Generated from ${componentsDir}\n\n`;

files.forEach(f => {
  const base = f.replace(".js", "");
  content += `import { ${base} } from './components/${f}';\n`;
});

content += `\nexport const componentRegistry = {\n`;
files.forEach(f => {
  const base = f.replace(".js", "");
  content += `  "${base}": ${base},\n`;
});
content += `};\n`;

fs.writeFileSync(registryFile, content);
console.log(`✅ componentRegistry.js generated with ${files.length} components`);