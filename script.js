const password = document.getElementById("password");
      const message = document.getElementById("message");
      const strength = document.getElementById("strength");
      const button = document.getElementById("btn");

      password.addEventListener("input", () => {
        let passValue = password.value;
        let passLength = passValue.length;

        if (passLength > 0) {
          message.style.display = "block";
        } else {
          message.style.display = "none";
        }

        if (passLength < 4) {
          strength.innerHTML = "weak";
          password.style.borderColor = "#ff5925";
          message.style.color = "#ff5925";
        } else if (passLength >= 4 && passLength < 8) {
          strength.innerHTML = "medium";
          password.style.borderColor = "yellow";
          message.style.color = "yellow";
        } else if (passLength >= 8) {
          strength.innerHTML = "strong";
          password.style.borderColor = "#26d730";
          message.style.color = "#26d730";
        }

      });

      button.addEventListener("click", function () {
        let passValue = password.value;
        const specialCharacters =
          "! @ # $ % ^ & * - + _ ~ = | \ \ / : ; \" ' < > , . ?";
        if (!passValue.match(/[^A-Za-z0-9]/)) {
          // Password does not contain special characters
          alert("Must contain: " + specialCharacters);
        } else {
          alert("correct");
        }
      });