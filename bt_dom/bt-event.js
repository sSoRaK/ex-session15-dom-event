// khai bảo 1 mảng 2 chiều, mỗi sinh viên là 1 mảng tương ứng
let studentList = [
  ["SV003", "Phạm Văn A", "abc@gmail.com", "0355914029", "Đà Nẵng", "nam"],
];
// render dữ liệu từ studentList ra table
function renderData() {
  // truy cập đến phần tử để render data
  let tbody = document.getElementsByClassName("tbody-table");
  // đặt tbody chưa chứa dữ liệu mỗi khi render, để tránh những data cũ bị render lặp lại
  tbody.innerHTML = "";
  for (let i = 0; i < studentList.length; i++) {
    // render từng dữ liệu tương ứng của tr trong tbody
    // dưới đây là cách viết string template
    tbody.innerHTML += `<tr>
                          <td>${i + 1}</td>
                          <td>${studentList[i][0]}</td>
                          <td>${studentList[i][1]}</td>
                          <td>${studentList[i][2]}</td>
                          <td>${studentList[i][3]}</td>
                          <td>${studentList[i][4]}</td>
                          <td>${studentList[i][5]}</td>
                          <td>
                              <button onclick="funcClick()"> edit </button>
                              <button onclick="funcClick()"> delete </button>
                          </td>
                        </tr>
    `;
  }
}
// khi trình duyệt load thì load dữ liệu sinh viên và hiển thị trên table
document.onload = renderData();
