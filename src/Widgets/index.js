// import all js files under src/Widgets/
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('./', true, /\.js$/));
