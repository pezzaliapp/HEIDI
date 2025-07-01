
document.addEventListener("DOMContentLoaded", function () {
  const alertBox = document.createElement("div");
  alertBox.style.background = "#ffcccc";
  alertBox.style.border = "1px solid #cc0000";
  alertBox.style.padding = "15px";
  alertBox.style.marginTop = "20px";
  alertBox.style.fontWeight = "bold";
  alertBox.style.color = "#660000";
  alertBox.innerHTML = `
    🚨 <b>Avviso tecnico personalizzato – PippoGomme</b><br><br>
    PippoGomme ti ricorda che hai i tuoi <b>pneumatici invernali</b> a nostro magazzino.<br>
    📅 <b>Fissa subito un appuntamento per il 16.10.25</b><br><br>
    Oppure, se all'ultimo cambio gomme <b>li hai portati via con te</b>, questo è lo <b>stato di usura rilevato</b>.<br><br>
    ✔️ Per questo inverno <b>vanno ancora bene</b>, ma il report indica che sono <b>consumate in modo omogeneo</b>.<br><br>
    👉 Per continuare ad ottimizzare ti consiglio di fare un <b>assetto veicolo</b> in modo da sfruttarle fino al limite.<br><br>
    <button id="sendEmail">📧 Invia email demo al cliente</button>
  `;
  document.body.appendChild(alertBox);

  document.getElementById("sendEmail").addEventListener("click", function () {
    alert("Email inviata con successo (demo). Verifica il backend SMTP per implementazione reale.");
  });
});
