"# nodejs-module" 

### 모듈로 만드는 방법
<pre>
<code>
  module 자체가 객체이면서
  exports를 가지고 있기 때문에

  1) module.exports = {} ---> const {key1,key2} require '경로'
  2) exports.key = "값" --->      "" 동일
  3) module.exports = 값 --->  const key require '경로' 로 사용가능
</code>
</pre>

### __filename , __dirname, process
<pre>
<code>
console.log(__dirname); 파일 폴더이름
console.log(__filename); 파일 경로
console.log(process); 
</code>
</pre>

### path
<pre>
<code>
const path = require('path');
path.sep // \\역슬래쉬 두 번 home\\user\\
path.delimiter // ; 세미 환경 변수의 [구분자] 프로그램의 변수가 환경 변수에 등록
path.dirname(__filename);
path.extname(__filename);
path.basename(__filename):

****
현 폴더 한 칸 위의 /user 폴더로
console.log(path.join(__dirname, "..", "/user")); 
현 폴더 한 칸 위로 갔다가! C:// 에 있는 user로 
console.log(path.resolve(__dirname, "..", "/user")); //절대경로 인식
</code>
</pre>


### url
<pre>
<code>
----------------------------href-------------------------------------
protocal ----------------host-----------------path--search-------
-------------------------hostname-----port-----------------------
-------------origin-------------------------
http://username:password@www.naver.com:8080/a/b/c/?query=string/#hash
</code>
</pre>

### crypto 단방향 암호화 ( 해시 ) 복호화 불가능
<pre>
<code>
const crpyro = require('crypto');
crypto.createHash('sha512').update("password").digest('base64');

crypto.randomBytes(64, (err, buff) =>{
  const salt = buff.toString('base64');
  crypto.pbkdf2("password", salt, 193872, 64, 'sha512', (err,key)=>{
    console.log(key.toString('base64');
  })
})
</code>
</pre>

### util.promisify(콜백 있는함수 )
그러면 프로미스로 바뀐다!

### fs
<pre>
<code>
const fs = require('fs');

//파일 읽기.
fs.readFile('./readme.txt', (err, data)=>{
  if(err) throw err;
  console.log(data) // 버퍼 : 컴퓨터가 알아 듣는 코드
  console.log(data.toString());
})

fs.writeFile('./writeme.txt', 내용을 적어주세요,(err,data)=>{
  if(err) throw err;
});
</code>
</pre>

### 버퍼와 스트림
<pre>
<code>
                        buffer 다차면 전달 (버퍼링)
완전 큰 데이터 -------->[ 조금씩 버퍼에 담는다 ] ------> 전달 * 

스트림 : 버퍼를 전달 하는 행위
 [  ] -------> [   ] ------>


const data = []
const writeStream = fs.createWriteStream("쓸파일경로");
writeStream.write("asdA");
writeStream.write("asoioijoij6198194716");
writeStream.end();
writeStream.on("finish",()=>{
  console.log("쓰기종료");
})

const readStream =  fs.createReadStream('./write.txt', {highWaterMark:16}) 16 byte씩 옴긴다.
readStream.on('data', (chuck) => {
  // 16바이트가 차서왔다 하면 이벤트 발생.
  data.push(chuck) // 16byte씩 오면 데이터 쌓기.
});


readStream.on('end', ()=>{
console.log("끝")
// global 객체 버퍼(Buffer)
console.log(Buffer.concat(data).toString())
});

readStream.on('error', (err) => {
  console.log(err)
}

//복사
1 ) readStream.pip(writeStream);
2 ) fs.copyFile("d이거","이거로", (err)=>{})

</code>
</pre>

### event 모듈
<pre>
<code>
const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.addListener('방문', () => {
  console.log('방문 떙쿠);
})

myEvent.on('방문', () => {
  console.log("방문 땡쿠 별명이야 똑같앙");
})

myEvent.on('종료', () => {
  console.log("빠이");
});

myEvent.once("한번만실행", () => {
  console.log("한 번만 실행 하지");
}); 

myEvent.emit("방문");
myEvent.emit("종료");
myEvent.emit("한번만실행");

myEvent.removeListener("방문");
myEvent.removeListeners("방문");


</code>
</pre>

### 예외처리
<pre>
<code>

function(){
  try{
    throw new Error("Dead");
  }catch(e){
    console.error(e)
  }
}

or

process.on('uncaughtException', (err)=>{})

</code>
</pre>


### http, localhost, port
<pre>
<code>
const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    fs.readFile("./write.txt", (error, data) => {
      res.end(data);
    });
    // res.write("<h1>hello world</h1>");
    // res.end();
  })
  .listen(8080, () => console.log(8080));

server.on("listening", () => {
  console.log("li");
});

server.on("error", e => {
  console.error(e);
});
8080, () => console.log(8080));


[cookie]
expires
httponly
path

</code>
</pre>

### https, http2
<pre>
<code>
const https = require("https");
https.listen(443);
발급 인증서 필요
letsencrypt

https.createServer({
  cert:fs.readFileSync('도메인 인증서 경로')
  key:fs.readFileSync('도메인 비밀키 경로');
  ca:[
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ]
})


</code>
</pre>

### 클러스터로 멀티 프로세싱 하기
코어가 4개 달린 싱글 쓰레드인 노드를 쓰면..?? 돈이 아깝네
1) 클러스터링 노는 코어 다쓰기! main.js
<pre>
<code>
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
    cluster.fork();
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


</code>
</pre>


### npm 패키지 
1) npm outdate, npm search, npm info , npm whomi

### express !! 시작해보기
1) npm i -g express-gernerator
2) express 폴더 --view=pug || = ejs
3) package.json 내부 scripts에 명령
<pre>
<code>
try{
}catch(e){
  next(e) ====>> (err, req, res) =>{ 이쪽으로 바로 넘어 오게 된다.}
                  error 파라미터가 있으면 에러 처리 미들웨어로 판단 한다
}
</code>
</pre>

### mongodb
1) 무한히 늘어 날것이다 컬렉션으로 만들기 ( 관계형 처럼)
2) 관계는 따로 없다
<pre>
<code>

Collection 만들기

const {Schema}= mongoose;
const {Types: ObjectId} = Schema;
const commentSchema = new Schema({
  commenter: {
    type:ObjectId,
    require:true,
    ref:'User'
  }
});

module.exports = mongoose.model('Comment', commentSchema);

연결점 구성
const mongoose = require('mongoose');

module.exports = () => {

  const connect = () => {
    mongoose.connect('mongodb://id@pw@localhost:123/admin',{
      dbName:'nodejs'
    }, (error) => {
      if(error) return console.error('connection error : " ,error);
      console.log('connected');
    });
  }

  connect();
  mongoose.connection.on('error' , (e) => console.log(e));
  mongoose.connection.on('disconnected', () => {
    console.log('연결 끊김');
    connect()// 재연결 시도
  }

  require('./comment') // 스크마 추가
}

연결시도 app.js
const connect = require('./schema')
connect();

</code>
</pre>

### mongo 명령어
1) find : 모두 찾기
2) findOne: 하나만 찾기
3) new 스키마.save 생성
4) update: 수정 하기
5) remove: 제거 하기