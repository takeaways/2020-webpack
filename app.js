const { name } = require("./node_module");
const path = require("path");

console.log(name);

// console.log(__filename); //파일 경로
// console.log(__dirname); // 파일의 폴더 경로

console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));

console.log(path.join(__dirname, "..", ".."));
console.log(path.resolve(__dirname, "..", "..")); //절대경로 인식
