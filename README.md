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