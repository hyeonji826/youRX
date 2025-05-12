function selectType(type) {
  document.getElementById("userType").value = type;
  document
    .getElementById("btn-user")
    .classList.toggle("active", type === "user");
  document.getElementById("btn-org").classList.toggle("active", type === "org");
  document.getElementById("user-fields").style.display =
    type === "user" ? "block" : "none";
  document.getElementById("org-fields").style.display =
    type === "org" ? "block" : "none";
}

function submitSignup(event) {
  event.preventDefault();
  const form = event.target;
  const userType = form.userType.value;

  const data = {
    userType,
    email: form.email.value,
    password: form.password.value,
  };

  if (userType === "user") {
    data.name = form.name.value;
    data.phone = form.phone.value;
    data.gender = form.gender.value;
  } else {
    data.license = form.license.value;
    data.biznum = form.biznum.value;
    data.bizfile = form.bizfile.files[0]?.name || "없음";
    data.zipcode = form.zipcode.value;
    data.address1 = form.address1.value;
    data.address2 = form.address2.value;
  }

  console.log("가입 정보:", data);
  alert(
    `${userType === "user" ? "일반 회원" : "기관 회원"}으로 가입되었습니다.`
  );
  window.location.href = "login.html";
}

function sample6_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      var addr =
        data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;
      document.getElementById("sample6_postcode").value = data.zonecode;
      document.getElementById("sample6_address").value = addr;
      document.getElementById("sample6_detailAddress").focus();
    },
  }).open();
}
