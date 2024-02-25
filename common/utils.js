const utils = {};

utils.styles = {
  car: { color: "gray", text: "🚗" },
  fish: { color: "orange", text: "🐡" },
  house: { color: "red", text: "🏠" },
  tree: { color: "green", text: "🌳" },
  bicycle: { color: "purple", text: "🚲" },
  guitar: { color: "blue", text: "🎸" },
  pencil: { color: "brown", text: "✏️" },
  clock: { color: "black", text: "⏰" },
};

utils.formatPercent = (n) => {
  return (n * 100).toFixed(2) + "%";
};

utils.printProgress = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  const percent = utils.formatPercent(count / max);
  process.stdout.write(count + "/" + max + " (" + percent + ")");
};

utils.groupBy = (objArray, groupMethod) => {
  return Object.groupBy(objArray, groupMethod);
};

if (typeof module !== "undefined") {
  module.exports = utils;
}
