export default function Dashboard() {
  const button = document.querySelector("#show-chart");

  button.addEventListener("click", showChart);
}

async function showChart() {
  const { default: renderChart } = await import("./chart");

  renderChart();
}
