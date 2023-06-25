// tạo divLeft
let divLeft = document.createElement("div");
divLeft.setAttribute("class", "block_1");
divLeft.style.border = "1px solid gray";
divLeft.style.width = "350px";
divLeft.style.height = "400px";
divLeft.style.top = "15px";
divLeft.style.left = "15px";
divLeft.style.position = "absolute";
document.body.appendChild(divLeft);
let h2Tittle1 = document.createElement("h2");
h2Tittle1.innerHTML = "Thông tin học viên";
h2Tittle1.style.textAlign = "center";
divLeft.appendChild(h2Tittle1);
let form = document.createElement("form");
form.style.marginLeft = "10px";
form.setAttribute("action", "#");
form.setAttribute("class", "form-student");
// tạo label & input ID
let labelId = document.createElement("label");
form.appendChild(labelId);
labelId.innerHTML = "ID";
let id = document.createElement("input");
form.appendChild(id);
id.setAttribute("placeholder", "vui lòng nhập ID");
id.style.marginLeft = "81px";
id.setAttribute("class", "input-id");

divLeft.appendChild(form);
// tạo label và input Name
let name = document.createElement("label");
form.appendChild(name);
name.innerHTML = "<br><br>Họ và Tên";
name.setAttribute("for", "name");
let inputName = document.createElement("input");
form.appendChild(inputName);
inputName.style.marginLeft = "31px";
inputName.style.height = "25px";
inputName.setAttribute("type", "text");
inputName.setAttribute("id", "name");
inputName.setAttribute("class", "input-name");
inputName.setAttribute("placeholder", "vui lòng nhập tên");
inputName.style.width = "170px";
inputName.style.fontSize = "12px";

// tạo label và input Email
let email = document.createElement("label");
form.appendChild(email);
email.setAttribute("for", "email");
email.innerHTML = "<br><br>Email";
let inputEmail = document.createElement("input");
form.appendChild(inputEmail);
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("class", "input-email");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("placeholder", "vui lòng nhập emai");
inputEmail.style.marginLeft = "60px";
inputEmail.style.height = "25px";
inputEmail.style.width = "170px";
inputEmail.style.fontSize = "12px";

// tạo label và input phoneNumber
let phone = document.createElement("label");
form.appendChild(phone);
phone.setAttribute("for", "number");
phone.innerHTML = "<br><br>Số điện thoại";
let inputPhone = document.createElement("input");
form.appendChild(inputPhone);
inputPhone.setAttribute("placeholder", "vui lòng nhập số điện thoại");
inputPhone.setAttribute("id", "number");
inputPhone.setAttribute("class", "input-number");
inputPhone.setAttribute("type", "number");
inputPhone.style.marginLeft = "14px";
inputPhone.style.height = "25px";
inputPhone.style.width = "170px";
inputPhone.style.fontSize = "12px";

// tạo label và input Quê quán
let homeTown = document.createElement("label");
form.appendChild(homeTown);
homeTown.setAttribute("for", "address");
homeTown.innerHTML = "<br><br>Quê quán";
let inputHomeTown = document.createElement("input");
form.appendChild(inputHomeTown);
inputHomeTown.setAttribute("id", "address");
inputHomeTown.setAttribute("class", "input-address");
inputHomeTown.setAttribute("type", "text");
inputHomeTown.setAttribute("placeholder", "vui lòng nhập địa chỉ quê quán");
inputHomeTown.style.marginLeft = "36px";
inputHomeTown.style.height = "25px";
inputHomeTown.style.width = "170px";
inputHomeTown.style.fontSize = "12px";

// tạo label và input radio Gender
let gender = document.createElement("label");
form.appendChild(gender);
gender.innerHTML = "<br><br>Giới tính";
gender.setAttribute("class", "input-gender");
// male
let inputGender1 = document.createElement("input");
form.appendChild(inputGender1);
inputGender1.style.marginLeft = "40px";
inputGender1.setAttribute("type", "radio");
inputGender1.setAttribute("id", "male");
inputGender1.setAttribute("class", "input-gender");
inputGender1.setAttribute("name", "gender");
inputGender1.setAttribute("checked", "default");
let male = document.createElement("label");
form.appendChild(male);
male.innerHTML = "Nam";
male.setAttribute("for", "male");
// female
let inputGender2 = document.createElement("input");
form.appendChild(inputGender2);
inputGender2.style.marginLeft = "20px";
inputGender2.setAttribute("type", "radio");
inputGender2.setAttribute("id", "female");
inputGender2.setAttribute("class", "input-gender");
inputGender2.setAttribute("name", "gender");
let female = document.createElement("label");
form.appendChild(female);
female.innerHTML = "Nữ";
female.setAttribute("for", "female");

// tạo input[submit]
let divButton = document.createElement("div");
form.appendChild(divButton);

let inputSubmit = document.createElement("input");
divButton.appendChild(inputSubmit);
inputSubmit.setAttribute("type", "submit");
inputSubmit.setAttribute("value", "Lưu lại");
inputSubmit.setAttribute("class", "submit-btn");
divButton.style.textAlign = "center";
inputSubmit.style.marginTop = "20px";
inputSubmit.style.marginLeft = "20px";
inputSubmit.style.width = "165px";
inputSubmit.style.height = "35px";

// tạo divRight
let divRight = document.createElement("div");
document.body.appendChild(divRight);
divRight.setAttribute("class", "block_2");
divRight.style.position = "absolute";
divRight.style.border = "1px solid gray";

// tạo h2
let h2Tittle2 = document.createElement("h2");
divRight.appendChild(h2Tittle2);
h2Tittle2.style.textAlign = "center";
h2Tittle2.innerHTML = "Danh sách học viên";

// tạo form
let formSearch = document.createElement("form");
divRight.appendChild(formSearch);
formSearch.setAttribute("action", "#");
formSearch.style.marginLeft = "10px";

// tạo label tìm kiếm tên học viên
let search = document.createElement("label");
formSearch.appendChild(search);
search.innerHTML = "Tìm kiếm tên học viên:";
search.setAttribute("for", "search-student");

// tạo input search
let inputSearch = document.createElement("input");
formSearch.appendChild(inputSearch);
inputSearch.setAttribute("id", "search-student");
inputSearch.style.marginLeft = "5px";
inputSearch.style.marginRight = "5px";
inputSearch.style.height = "20px";
inputSearch.style.width = "200px";

// tạo button search
let buttonSearch = document.createElement("input");
formSearch.appendChild(buttonSearch);
buttonSearch.setAttribute("type", "submit");
buttonSearch.setAttribute("value", "search");
buttonSearch.style.height = "26px";

// tạo table
let table = document.createElement("table");
table.setAttribute("class", "divTable");
divRight.appendChild(table);
table.style.border = "1px solid gray";
table.style.marginLeft = "10px";
table.style.marginTop = "15px";
table.style.height = "110px";
table.style.textAlign = "center";

// thead td
let thead = document.createElement("thead");
table.appendChild(thead);
thead.style.height = "35px";

let tr1 = document.createElement("tr");
thead.appendChild(tr1);

let tr1td1 = document.createElement("td");
tr1.appendChild(tr1td1);
tr1td1.innerHTML = "#";
tr1td1.style.border = "1px solid gray";

let tr1td2 = document.createElement("td");
tr1.appendChild(tr1td2);
tr1td2.innerHTML = "Họ tên";
tr1td2.style.border = "1px solid gray";

let tr1td3 = document.createElement("td");
tr1.appendChild(tr1td3);
tr1td3.innerHTML = "Email";
tr1td3.style.border = "1px solid gray";

let tr1td4 = document.createElement("td");
tr1.appendChild(tr1td4);
tr1td4.innerHTML = "Điện thoại";
tr1td4.style.border = "1px solid gray";

let tr1td5 = document.createElement("td");
tr1.appendChild(tr1td5);
tr1td5.innerHTML = "Địa chỉ";
tr1td5.style.border = "1px solid gray";

let tr1td6 = document.createElement("td");
tr1.appendChild(tr1td6);
tr1td6.innerHTML = "Gender";
tr1td6.style.border = "1px solid gray";

let tr1td7 = document.createElement("td");
tr1.appendChild(tr1td7);
tr1td7.innerHTML = "Hành động";
tr1td7.style.border = "1px solid gray";

let tr1td8 = document.createElement("td");
tr1.appendChild(tr1td8);
tr1td8.style.border = "1px solid gray";

let tr1td8Button = document.createElement("input");
tr1td8.appendChild(tr1td8Button);
tr1td8Button.setAttribute("type", "button");
tr1td8Button.setAttribute("value", "sắp xếp (alpha b)");
tr1td8Button.style.width = "95%";
tr1td8Button.style.height = "100%";

// tbody td
let tbody = document.createElement("tbody");
table.appendChild(tbody);
tbody.setAttribute("class", "tbody-table");
// tr2
let tr2 = document.createElement("tr");
tbody.appendChild(tr2);

let tr2td1 = document.createElement("td");
tr2.appendChild(tr2td1);
tr2td1.innerHTML = "1";
tr2td1.style.border = "1px solid gray";

let tr2td2 = document.createElement("td");
tr2.appendChild(tr2td2);
tr2td2.innerHTML = "rikkei";
tr2td2.style.border = "1px solid gray";

let tr2td3 = document.createElement("td");
tr2.appendChild(tr2td3);
tr2td3.innerHTML = "rikkei@gmail.com";
tr2td3.style.border = "1px solid gray";

let tr2td4 = document.createElement("td");
tr2.appendChild(tr2td4);
tr2td4.innerHTML = "0823868888";
tr2td4.style.border = "1px solid gray";

let tr2td5 = document.createElement("td");
tr2.appendChild(tr2td5);
tr2td5.innerHTML = "hà nội";
tr2td5.style.border = "1px solid gray";

let tr2td6 = document.createElement("td");
tr2.appendChild(tr2td6);
tr2td6.innerHTML = "nam";
tr2td6.style.border = "1px solid gray";

let tr2td7 = document.createElement("td");
tr2.appendChild(tr2td7);
tr2td7.style.border = "1px solid gray";

// tạo 2 thẻ a "edit" & "delete"
let tr2td7Edit = document.createElement("button");
tr2td7.appendChild(tr2td7Edit);
tr2td7Edit.innerHTML = "edit";
tr2td7Edit.style.marginRight = "10px";
tr2td7Edit.style.paddingRight = "10px";
tr2td7Edit.setAttribute("onclick", "funcClick()");

let tr2td7Delete = document.createElement("button");
tr2td7.appendChild(tr2td7Delete);
tr2td7Delete.innerHTML = "delete";
tr2td7Delete.setAttribute("onclick", "funcClick()");

// tr3
let tr3 = document.createElement("tr");
tbody.appendChild(tr3);

let tr3td1 = document.createElement("td");
tr3.appendChild(tr3td1);
tr3td1.innerHTML = "2";
tr3td1.style.border = "1px solid gray";

let tr3td2 = document.createElement("td");
tr3.appendChild(tr3td2);
tr3td2.innerHTML = "academy";
tr3td2.style.border = "1px solid gray";

let tr3td3 = document.createElement("td");
tr3.appendChild(tr3td3);
tr3td3.innerHTML = "academy@gmail.com";
tr3td3.style.border = "1px solid gray";

let tr3td4 = document.createElement("td");
tr3.appendChild(tr3td4);
tr3td4.innerHTML = "0828638888";
tr3td4.style.border = "1px solid gray";

let tr3td5 = document.createElement("td");
tr3.appendChild(tr3td5);
tr3td5.innerHTML = "HCM";
tr3td5.style.border = "1px solid gray";

let tr3td6 = document.createElement("td");
tr3.appendChild(tr3td6);
tr3td6.innerHTML = "nu";
tr3td6.style.border = "1px solid gray";

let tr3td7 = document.createElement("td");
tr3.appendChild(tr3td7);
tr3td7.style.border = "1px solid gray";

// tạo 2 thẻ a "edit" & "delete"
let tr3td7Edit = document.createElement("button");
tr3td7.appendChild(tr3td7Edit);
tr3td7Edit.innerHTML = "edit";
tr3td7Edit.style.marginRight = "10px";
tr3td7Edit.style.paddingRight = "10px";
tr3td7Edit.setAttribute("onclick", "funcClick()");

let tr3td7Delete = document.createElement("button");
tr3td7.appendChild(tr3td7Delete);
tr3td7Delete.innerHTML = "delete";
tr3td7Delete.setAttribute("onclick", "funcClick()");
