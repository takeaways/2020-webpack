const cluster = require("cluster");
const http = require("http");
const os = require("os");
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  // 관리
  console.log("관리자 아이디 : ", process.pid);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); //새로운 워커 만들기
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log("death", worker.process.pid);
    //cluster.fork();
  });
} else {
  //worker
  http
    .createServer((req, res) => {
      res.end("http server");
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    })
    .listen(8080);
  console.log(process.pid, "워커 실행");
}
