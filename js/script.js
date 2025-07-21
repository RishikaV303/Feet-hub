// banner carousel
$(document).ready(function () {
  let carousel = $("header .wrapper #banner .carousel");
  let currentIndex = 0;
  let carouselLength = carousel.length;
  carousel.first().addClass("active");
  function shownItem(currInd) {
    carousel.removeClass("active");
    carousel.eq(currInd).addClass("active");
  }
  function autoplay() {
    currentIndex = (currentIndex + 1) % carouselLength;
    shownItem(currentIndex);
  }
  setInterval(autoplay, 5000);
});
// navs and tabs
$(document).ready(function () {
  $("#featured-categories .wrapper .navs a").click(function (e) {
    e.preventDefault();
    $("#featured-categories .navs a").removeClass("active");
    $(this).addClass("active");
    let targetId = $(this).attr("href");
    $("#featured-categories .cards").removeClass("active");
    $(targetId).addClass("active");
  });
});
// modal
$(document).ready(function () {
  $("#open").click(function (e) {
    e.preventDefault();
    $("#modal").css({ display: "flex" }).fadeIn(300);
  });
  $("#confrim").click(function () {
    $("#modal").fadeOut(300);
  });
  $("#close").click(function () {
    $("#modal").fadeOut(300);
  });
});

// form validation
    const districtData = {
      "Tamil Nadu": ["Madurai", "Chennai", "Coimbatore", "Salem", "Tirunelveli"],
      "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
      "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubli"],
      "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Nellore"]
    };

    function populateDistricts() {
      const stateSelect = document.getElementById("state");
      const districtSelect = document.getElementById("district");
      const selectedState = stateSelect.value;
      districtSelect.innerHTML = '<option value="">Select District</option>';
      if (districtData[selectedState]) {
        districtData[selectedState].forEach(district => {
          const option = document.createElement("option");
          option.value = district;
          option.text = district;
          districtSelect.appendChild(option);
        });
      }
    }

let forName = () => {
    let inputs = document.querySelectorAll('#user_name');
    let spans = document.querySelectorAll('#name_err');
    let namePatt = /^[a-zA-Z]{3,}(\s[a-zA-Z]+)?$/;

    let valid = true;
    inputs.forEach((input, index) => {
        let val = input.value.trim();
        if (val.length === 0) {
            spans[index].innerHTML = "Name cannot be empty";
            valid = false;
        } else if (!val.match(namePatt)) {
            spans[index].innerHTML = "Enter a valid name (min 3 letters)";
            valid = false;
        } else {
            spans[index].innerHTML = "<i class='bi bi-check-square'></i>";
        }
    });
    return valid;
};
let forLastName = () => {
    let inputs = document.querySelectorAll('#last_name');
    let spans = document.querySelectorAll('#last_err');
    let namePatt = /^[a-zA-Z]{1,}(\s[a-zA-Z]+)?$/;

    let valid = true;
    inputs.forEach((input, index) => {
        let val = input.value.trim();
        if (val.length === 0) {
            spans[index].innerHTML = "Name cannot be empty";
            valid = false;
        } else if (!val.match(namePatt)) {
            spans[index].innerHTML = "Enter a valid name (min 3 letters)";
            valid = false;
        } else {
            spans[index].innerHTML = "<i class='bi bi-check-square'></i>";
        }
    });
    return valid;
};

let foraddress = () => {
    let addr = document.getElementById("address").value.trim();
    let err = document.getElementById("address_err");
    if (addr.length < 10) {
        err.innerHTML = "Address must be at least 10 characters";
        return false;
    }
    err.innerHTML = "<i class='bi bi-check-square'></i>";
    return true;
};

let forlandmark = () => {
    let landmark = document.getElementById("landmark").value.trim();
    let err = document.getElementById("landmark_err");
    if (landmark === "") {
        err.innerHTML = "Please enter a landmark";
        return false;
    }
    err.innerHTML = "<i class='bi bi-check-square'></i>";
    return true;
};

let forNum = () => {
    let unum = document.getElementById("userNum").value.trim();
    let phoneErr = document.getElementById("num_err");

    if (unum.length === 0 || unum === " ") {
        phoneErr.innerHTML = "Enter your phone number";
        return false;
    }

    if (isNaN(unum)) {
        phoneErr.innerHTML = "Only numbers allowed";
        return false;
    }

    let numPatt = /^[6-9][0-9]{9}$/;
    if (!unum.match(numPatt)) {
        phoneErr.innerHTML = "Must be a valid 10-digit number";
        return false;
    }

    phoneErr.innerHTML = "<i class='bi bi-check-square'></i>";
    return true;
};

let forState = () => {
    let state = document.getElementById("state").value;
    let err = document.getElementById("state_err");
    if (state === "") {
        err.innerHTML = "Select your state";
        return false;
    }
    err.innerHTML = "<i class='bi bi-check-square'></i>";
    return true;
};

let forPayment = () => {
    let selected = document.querySelector('input[name="payment"]:checked');
    if (!selected) {
        alert("Please select a payment method");
        return false;
    }
    return true;
};

let finalSubmit = () => {
    if (!forName() || !foraddress() || !forlandmark() || !forNum() || !forState() || !forPayment()) {
        alert("Please Fill the form");
        return false;
    }

    alert("Form submitted successfully!");
    document.querySelector("form").submit();
};