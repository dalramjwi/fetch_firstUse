document.getElementById("fetchButton").addEventListener("click", function () {
  fetch("http://localhost:3000/data")
    .then((response) => response.json()) // 서버의 응답을 JSON 형태로 변환
    .then((data) => {
      // 데이터를 HTML 요소에 표시
      const output = document.getElementById("output");
      output.textContent = data.message;
    })
    .catch((error) => console.error("Error:", error)); // 오류가 발생하면 콘솔에 출력
});
