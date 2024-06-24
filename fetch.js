fetch("http://localhost:3000/data")
  .then((response) => response.json()) // 서버의 응답을 JSON 형태로 변환
  .then((data) => console.log(data)) // 데이터를 콘솔에 출력
  .catch((error) => console.error("Error:", error));
