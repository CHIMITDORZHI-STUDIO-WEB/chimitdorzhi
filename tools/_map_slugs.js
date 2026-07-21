const fs = require("fs");
const data = fs.readFileSync(__dirname + "/blog-data.js", "utf8");
const slugs = fs.readFileSync("C:/tmp/conv_sales.txt", "utf8").split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
const reqMap = {};
const reqRe = /const (\w+) = require\('(\.\/[^']+)'\)/g;
let m;
while ((m = reqRe.exec(data))) reqMap[m[1]] = m[2];

for (const slug of slugs) {
  const idx = data.indexOf(`slug: '${slug}'`);
  if (idx === -1) { console.log(slug + " => NOT FOUND"); continue; }
  const chunk = data.slice(idx, idx + 6000);
  const cm = chunk.match(/contentHtml:\s*([^\n,]+)/);
  if (!cm) { console.log(slug + " => NO contentHtml field found nearby"); continue; }
  let val = cm[1].trim();
  if (reqMap[val]) {
    console.log(slug + " => VAR " + val + " => " + reqMap[val]);
  } else if (val.startsWith("`")) {
    console.log(slug + " => INLINE template literal in blog-data.js");
  } else {
    console.log(slug + " => UNKNOWN val: " + val);
  }
}
