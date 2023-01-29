function showPopup() {
    var popup = document.createElement("div");
    popup.style.background = "rgba(0,0,0,0.5)";
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.right = "0";
    popup.style.bottom = "0";
    popup.style.display = "flex";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
    popup.style.zIndex = "9999";
  
    var message = document.createElement("div");
    message.style.background = "white";
    message.style.padding = "20px";
    message.style.borderRadius = "10px";
    message.innerHTML = "Haz click aquí para entrar a mi currículum";
  
    popup.appendChild(message);
    document.body.appendChild(popup);
  
    message.addEventListener("click", function() {
      popup.style.display = "none";
    });
  }
  
  window.onload = showPopup;
  
  
  