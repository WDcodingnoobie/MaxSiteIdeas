document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    updateDynamicText();
  }
});

function updateDynamicText() {
  var a = ['macchiavellian', 'mad', 'magic', 'magical', 'magisterial', 'magnetic', 'magnificent', 'majestic', 'major', 'managed', 'managerial', 'manic', 'manifested', 'manoeuvrable', 'marxist', 'masterful', 'masturbatory', 'maternal', 'matriarchal', 'maximalist', 'meandering', 'meaningful', 'meditative', 'mellow', 'melodic', 'melodious', 'membranous', 'menacing', 'mental', 'mercurial', 'merrymaking', 'mesmerizing', 'messianic', 'metalogical', 'metamodernist', 'metamorphic', 'methodic', 'methodological', 'meticulous', 'metropolitan', 'microcircuit for', 'microclimate of', 'microcosm of', 'microgenerative', 'micromanaged', 'militant', 'modern', 'modernist', 'modernizing', 'molenbeek', 'monstrous', 'multimedial', 'multimodal', 'multimorphic', 'mycelial'];

  var b = ['abstract', 'academic', 'accidental', 'activist', 'administrative', 'administrators of', 'aesthetic', 'agents of', 'aggregated', 'alliance of', 'amazing', 'ambient', 'analytic', 'architects of', 'architectural', 'art', 'artistic'];

  var c = ['excellence', 'exclusives', 'exclusivity', 'excursion', 'executive', 'executives', 'exercise', 'exhibition', 'existence', 'expansion', 'expedition', 'experience', 'explosion', 'extacy', 'extatics', 'extraction', 'extravagance', 'extravaganza', 'extraverts', 'exuberance', 'xenophiles', 'xylophone music'];

  var dynamicTextElement = document.getElementById("dynamicText");

  var firstWordA = a[Math.floor(Math.random() * a.length)];
  var boldFirstLetterA = "<strong>" + firstWordA.charAt(0) + "</strong>" + firstWordA.slice(1);

  var firstWordB = b[Math.floor(Math.random() * b.length)];
  var boldFirstLetterB = "<strong>" + firstWordB.charAt(0) + "</strong>" + firstWordB.slice(1);

  var modifiedC = c.map(word => word.replace(/x/g, '<strong>x</strong>'));

  dynamicTextElement.innerHTML = boldFirstLetterA + " " +
                                 boldFirstLetterB + " " +
                                 modifiedC[Math.floor(Math.random() * modifiedC.length)];
}
