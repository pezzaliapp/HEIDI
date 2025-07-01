
document.addEventListener("DOMContentLoaded", function () {
  const alertBox = document.createElement("div");
  alertBox.style.background = "#ffcccc";
  alertBox.style.border = "1px solid #cc0000";
  alertBox.style.padding = "15px";
  alertBox.style.marginTop = "20px";
  alertBox.style.fontWeight = "bold";
  alertBox.style.color = "#660000";
  alertBox.innerHTML = `
    🚨 <b>Avviso tecnico:</b><br>
    Il sistema ha rilevato che il veicolo analizzato monta pneumatici 4 Stagioni in estate.<br><br>
    👉 Si consiglia:<br>
    – Il <b>cambio gomme stagionale</b><br>
    – Il <b>controllo assetto ruote</b> per ridurre usura, consumi ed emissioni CO₂<br><br>
    <button id="sendEmail">📧 Invia email demo al cliente</button>
  `;
  document.body.appendChild(alertBox);

  document.getElementById("sendEmail").addEventListener("click", function () {
    alert("Email inviata con successo (demo). Verifica il backend SMTP per implementazione reale.");
  });
});
