// import all js files under src/Objs/
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('./', true, /\.js$/));

