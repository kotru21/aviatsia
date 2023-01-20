function HidePanel() {
  const elem = document.getElementById("panel");
  let buttonvalue = document.getElementById("btn-display").value;
  console.log(buttonvalue);
  switch (buttonvalue) {
    case "1":
      document.getElementById("btn-display").value = "0";
      elem.className = "panel-transition";
      console.log("11");
      break;

    case "0":
      document.getElementById("btn-display").value = "1";
      elem.className = "panel";
      break;
  }
}
