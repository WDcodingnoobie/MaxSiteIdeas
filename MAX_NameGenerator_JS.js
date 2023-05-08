document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    updateDynamicText();
  }
});

function updateDynamicText() {
  var a = ['Macchiavellian', 'Mad', 'Magic', 'Magical', 'Magisterial',
  'Magnetic', 'Magnificent', 'Majestic', 'Major', 'Managed', 'Managerial', 'Manic', 'Manifested', 
  'Manoeuvrable', 'Marxist', 'Masterful', 'Masturbatory', 'Maternal', 'Matriarchal',
   'Maximalist', 'Meandering', 'Meaningful', 'Meditative', 'Mellow', 'Melodic', 
   'Melodious', 'Membranous', 'Menacing', 'Mental', 'Mercurial',
    'Merrymaking', 'Mesmerizing', 'Messianic', 'Metalogical', 'Metamodernist', 'Metamorphic', 'Methodic', 'Methodological', 'Meticulous', 'Metropolitan', 'Microcircuit for', 'Microclimate of', 'Microcosm of', 'Microgenerative', 'Micromanaged', 'Militant', 'Modern', 'Modernist', 'Modernizing', 'Molenbeek', 'Monstrous', 
    'Multimedial', 'Multimodal', 'Multimorphic', 'Mycelial'];

  var b = ['Abstract', 'Academic', 'Accidental', 'Activist', 'Administrative', 'Administrators of', 'Aesthetic', 'Agents of', 'Aggregated', 'Alliance of', 'Amazing', 'Ambient', 'Analytic', 'Architects of', 'Architectural', 'Art', 'Artistic'];

  var c = ['excellence', 'exclusives', 'exclusivity', 'excursion', 'executive', 'executives', 'exercise', 'exhibition', 'existence', 'expansion', 'expedition', 'experience', 'explosion', 'extacy', 'extatics', 'extraction', 'extravagance', 'extravaganza', 'extraverts', 'exuberance', 'xenophiles', 'xylophone music'];
  
  var dynamicTextElement = document.getElementById("dynamicText");
  dynamicTextElement.textContent = a[Math.floor(Math.random() * a.length)] + " " +
                                   b[Math.floor(Math.random() * b.length)] + " " +
                                   c[Math.floor(Math.random() * c.length)];
}

/* To do's: 
make the M, the A, and X bold, and the x upper or lower case bold as well, rest of the letters non-bold
insert the connection with the three content-boxes in the footer
insert the calendar plug-in
think about the nodal graph data for MAX and all of its connections
 */