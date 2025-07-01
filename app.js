
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("graficoProfondita").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Ant. Sx", "Ant. Dx", "Post. Sx", "Post. Dx"],
      datasets: [{
        label: "Profondità battistrada (mm)",
        data: [2.1, 1.8, 2.3, 2.0],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 5
        }
      }
    }
  });
});
