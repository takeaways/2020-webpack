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


### 버퍼와 스트림
<pre>
<code>
                        buffer 다차면 전달 (버퍼링)
완전 큰 데이터 -------->[ 조금씩 버퍼에 담는다 ] ------> 전달 * 

스트림 : 버퍼를 전달 하는 행위
 [  ] -------> [   ] ------>


const data = []
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



</code>
</pre>















</code>
</pre>