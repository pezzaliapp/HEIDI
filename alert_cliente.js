
document.addEventListener("DOMContentLoaded", function () {
  const alertBox = document.createElement("div");
  alertBox.style.background = "#fff3e0";
  alertBox.style.border = "1px solid #ef6c00";
  alertBox.style.padding = "15px";
  alertBox.style.marginTop = "20px";
  alertBox.style.fontWeight = "bold";
  alertBox.style.color = "#e65100";
  alertBox.innerHTML = `
    🛞 <b>Avviso da PippoGomme</b><br><br>
    All'ultimo cambio gomme hai portato con te i tuoi pneumatici invernali.<br>
    📊 Lo stato attuale di usura indica che <b>per questo inverno vanno ancora bene</b>.<br><br>
    👉 Per continuare a viaggiare in sicurezza e ottimizzare l’usura:<br>
    – Ti consigliamo un <b>controllo dell’assetto</b><br>
    – E il <b>rimontaggio delle gomme invernali</b> per la stagione in arrivo<br><br>
    📅 Fissa subito un appuntamento da PippoGomme entro il <b>16.10.25</b><br><br>
    <button id="sendEmail">📧 Invia promemoria via email</button>
  `;
  document.body.appendChild(alertBox);

  document.getElementById("sendEmail").addEventListener("click", function () {
    alert("Email demo inviata al cliente (gomme in possesso + invito appuntamento).");
  });
});
