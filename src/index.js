/**
 * Investiga un poco como usar el método replace con expresiones regulares https://www.w3schools.com/jsref/jsref_replace.asp
 */

/**
 * Recuerda: si te han gustado las expresiones regulares, puedes aprender técnicas mucho más poderosas en https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method
 */

/**
 * Usa ahora el método replace adeuadamente para censurar los insultos de este texto. Por decoro, diremos que todas las palabras que empiezan por "gili" son un insulto. Censura las palabras enteras poniendo unos diez asteríscos **********
 */

let texto =
  "Estoy harto de decirte que esa persona es una gilicebolla. Por mucho que tu me digas que no, no para de hacer giliflautadas. No insistias en defenderla, a veces eres tan gilipepino como ella...";

let textoSinPalabrotas = texto.replace(/gili[a-z]+/g, "****");
console.log(textoSinPalabrotas);

/**
 * BONUS-DIFIÍIL: Investiga bien como usar replace de manera más profunda en W3school, y substituye por * solo la parte que no contiene "gili"
 *
 * Estoy harto de decirte que esa persona es una gili****. Por mucho que tu me digas que no, no para de hacer gili****. No insistias en defenderla, a veces eres tan gili***** como ella...
 */
let textoSinPalabrotasBonus = texto.replace(/gili[a-z]+/gi, function (x) {
  return x.toUpperCase();
});

console.log(textoSinPalabrotasBonus);
