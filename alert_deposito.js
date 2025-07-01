
document.addEventListener("DOMContentLoaded", function () {
  const alertBox = document.createElement("div");
  alertBox.style.background = "#e0f7fa";
  alertBox.style.border = "1px solid #00838f";
  alertBox.style.padding = "15px";
  alertBox.style.marginTop = "20px";
  alertBox.style.fontWeight = "bold";
  alertBox.style.color = "#004d40";
  alertBox.innerHTML = `
    🛞 <b>Avviso da PippoGomme</b><br><br>
    Ti ricordiamo che i tuoi pneumatici invernali sono al sicuro nel nostro magazzino.<br>
    📅 Fissa subito un appuntamento per il <b>16.10.25</b> per il cambio gomme stagionale.<br><br>
    👉 Per ottimizzare l'usura e migliorare la tenuta:<br>
    Si consiglia un <b>controllo dell’assetto veicolo</b>.<br><br>
    <button id="sendEmail">📧 Invia promemoria via email</button>
  `;
  document.body.appendChild(alertBox);

  document.getElementById("sendEmail").addEventListener("click", function () {
    alert("Email demo inviata al cliente (pneumatici a deposito).");
  });
});
