function createRow(container, studentName, samples) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  const rowLabel = document.createElement("div");
  rowLabel.innerHTML = studentName;
  rowLabel.classList.add("row-label");
  row.appendChild(rowLabel);
  samples.forEach(({ id, label, student_id }) => {
    const sampleContainer = document.createElement("div");
    sampleContainer.id = "sample_" + id;
    sampleContainer.onclick = () => handleClick(samples, false);
    sampleContainer.classList.add("sample-container");

    const sampleLabel = document.createElement("div");
    sampleLabel.innerHTML = label;
    sampleContainer.appendChild(sampleLabel);
    const img = document.createElement("img");
    img.src = constants.IMG_DIR + "/" + id + ".png";
    img.loading = "lazy";
    img.classList.add("thumb");
    sampleContainer.appendChild(img);
    row.appendChild(sampleContainer);
  });
}

function handleClick(sample, doScroll = true) {
  [...document.querySelectorAll(".emphasize")].forEach((e) =>
    e.classList.remove("emphasize")
  );
  const el = document.getElementById("sample_" + sample.id);
  el.classList.add("emphasize");
  if (doScroll) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  chart.selectSample(sample);
}
