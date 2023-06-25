// tạo 1 mảng rỗng 2 chiều với phần tử là 1 mảng chứa các thông tin tương ứng của mỗi sinh viên
let studentList = [
  ["SV2000", "bui van vu", "vu@gmail.com", "0988178718", "Nam Dinh", "male"],
];
let action = "create";
// Lấy dữ liệu từ form -> table: Read
function renderData() {
  // truy cập đến tbody
  let tbody = document.getElementById("student-info");
  // đặt giá trị ban đầu tbody = "", để tránh dữ liệu cũ còn tồn tại
  tbody.innerHTML = "";
  for (let i = 0; i < studentList.length; i++) {
    // truyền vào tbody dưới dạng String Template
    tbody.innerHTML += `<tr>
                          <td>${i + 1}</td>
                          <td>${studentList[i][0]}</td>
                          <td>${studentList[i][1]}</td>
                          <td>${studentList[i][2]}</td>
                          <td>${studentList[i][3]}</td>
                          <td>${studentList[i][4]}</td>
                          <td>${studentList[i][5]}</td>                        
                          <td>
                              <button onclick="editData('${
                                studentList[i][0]
                              }')" class="btn-edit">edit</button>
                              <button onclick="deleteData('${
                                studentList[i][1]
                              }')" class="btn-delete">delete</button>
                          </td>
                    </tr>`;
  }
}
// Khi trình duyệt load thì sẽ load dữ liệu student và hiển thị trên table
document.onload = renderData();

// query element (create gol)
const studentId = document.querySelector("#student-id");
const studentName = document.querySelector("#student-name");
const studentEmail = document.querySelector("#student-email");
const studentPhoneNumber = document.querySelector("#student-phone_number");
const studentAddress = document.querySelector("#student-address");
const studentGender = document.querySelector("input[name='gender']:checked");

const errorElement = document.querySelectorAll(".error");

const btnSubmit = document.querySelector(".btn-submit");

// Validate: xác thực khi thêm create hoặc update
// function check validate each <input>
function validateForm() {
  // Lấy dữ liệu từ Form và Thực hiện validate từng input, nếu thỏa -> true, không thỏa -> báo lỗi (false)
  let idValidate = false;
  let nameValidate = false;
  let emailValidate = false;
  let phoneValidate = false;
  let addressValidate = false;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex pattern: mẫu quy định
  let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  // check validate studentId
  if (studentId.value.length == 0) {
    errorElement[0].textContent = "* Please type your ID";
    errorElement[0].classList.add("display-error");
  } else if (studentId.value.length < 6 || studentId.value.length > 20) {
    errorElement[0].textContent = "* Your ID must be 6 - 20 characters";
    errorElement[0].classList.add("display-error");
  } else {
    errorElement[0].classList.remove("display-error");
    idValidate = true;
  }

  // check validate studentName
  if (studentName.value == "") {
    errorElement[1].textContent = "* Please type your name";
    errorElement[1].classList.add("display-error");
  } else {
    errorElement[1].classList.remove("display-error");
    nameValidate = true;
  }

  // check validate studentEmail
  if (studentEmail.value.length == "") {
    errorElement[2].textContent = "* Please type your email";
    errorElement[2].classList.add("display-error");
  } else if (!studentEmail.value.match(emailPattern)) {
    errorElement[2].textContent = "* You have entered email invalid";
    errorElement[2].classList.add("display-error");
  } else {
    errorElement[2].classList.remove("display-error");
    emailValidate = true;
  }

  // check validate studentPhoneNumber
  if (studentPhoneNumber.value.length == "") {
    errorElement[3].textContent = "* Please type your phone number";
    errorElement[3].classList.add("display-error");
  } else if (!studentPhoneNumber.value.match(phonePattern)) {
    errorElement[3].textContent = "* You have entered phone number invalid";
    errorElement[3].classList.add("display-error");
  } else {
    errorElement[3].classList.remove("display-error");
    phoneValidate = true;
  }

  // check validate studentAddress
  if (studentAddress.value.length == "") {
    errorElement[4].textContent = "* Please type your address";
    errorElement[4].classList.add("display-error");
  } else {
    errorElement[4].classList.remove("display-error");
    addressValidate = true;
  }

  // check validate each input as True or False
  if (
    idValidate &&
    nameValidate &&
    emailValidate &&
    phoneValidate &&
    addressValidate
  ) {
    return true;
  }
  return false;
}

// Lấy dữ liệu từ Form sau khi submit, tạo table và insert studentList
// create new student from FORM and take to value studentList, insert to table
function createData() {
  // tạo mảng gồm các thông tin của học sinh - create array have element as student info
  const newStudent = [
    studentId.value,
    studentName.value,
    studentEmail.value,
    studentPhoneNumber.value,
    studentAddress.value,
    studentGender.value,
  ];
  studentList.push(newStudent);
  renderData();
  resetForm(); // clear form after submit
}

// reset form after submit or update, create newStudent to table
function resetForm() {
  studentId.value = "";
  studentName.value = "";
  studentEmail.value = "";
  studentPhoneNumber.value = "";
  studentAddress.value = "";
  document.getElementById("male").checked = true;
}

// create event for btn-submit
// event : e
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault(); // after click button submit, prevent "FORM" re-load
  const checkValidForm = validateForm();
  if (checkValidForm) {
    if (action == "create") {
      // push dữ liệu vào table
      createData();
    } else {
      // Thực hiện update sinh viên
      updateFormStudent();
    }
  }
});
// lấy thông tin học sinh thông qua studentID
// 1. Duyệt qua studentList để lấy studentID
function getStudentId(studentId) {
  for (let index = 0; index < studentList.length; index++) {
    if (studentId == studentList[index][0]) return index;
  }
  return -1;
}
// 2.
function editData(studentID) {
  // 1. lấy chỉ số sinh viên trong mảng
  let index = getStudentId(studentID);
  if (index >= 0) {
    // 2. fill thông tin sinh viên qua form
    studentId.value = studentList[index][0];
    studentName.value = studentList[index][1];
    studentEmail.value = studentList[index][2];
    studentPhoneNumber.value = studentList[index][3];
    studentAddress.value = studentList[index][4];
    if (studentList[index][5] == "male") {
      document.getElementById("male").checked = true;
    } else {
      document.getElementById("female").checked = true;
    }
    // sau khi edit, thay giá trị action
    action = "edit";
    studentId.readOnly = true;
    studentId.style.outline = "none";
    studentId.style.cursor = "unset";
    studentId.style.caretColor = "transparent";
  }
}
// Update
function updateFormStudent() {
  const studentUpdate = [
    studentId.value,
    studentName.value,
    studentEmail.value,
    studentPhoneNumber.value,
    studentAddress.value,
    studentGender.value,
  ];

  //find Index dua ma code cua sinh vien
  const indexStudent = getStudentId(studentId.value);

  studentList[indexStudent] = studentUpdate;
  renderData();
  action = "create";
  resetForm();
  studentId.readOnly = false;
  studentId.style.cursor = "text";
  studentId.style.caretColor = "black";
}

function deleteData(studentID) {
  let isCheckRemove = confirm("Bạn có muốn xóa hay không?");
  if (isCheckRemove) {
    const indexDeleteStudent = getStudentId(studentID);
    studentList.splice(indexDeleteStudent, 1);
    renderData();
    resetForm();
  }
}
