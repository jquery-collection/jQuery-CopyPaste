/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Mark O'Sullivan :: http://lussumo.com/
 Jeff Larson :: http://www.jeffothy.com/
 Mark Percival :: http://webchicanery.com/
 */
function copy(text2copy) {
  if (window.clipboardData) {
    window.clipboardData.setData("Text",text2copy);
  } else {
    var flashcopier = 'flashcopier';
    if(!document.getElementById(flashcopier)) {
      var divholder = document.createElement('div');
      divholder.id = flashcopier;
      document.body.appendChild(divholder);
    }
    document.getElementById(flashcopier).innerHTML = '';
    var divinfo = '<embed src="_clipboard.swf" FlashVars="clipboard='+escape(text2copy)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
    document.getElementById(flashcopier).innerHTML = divinfo;
  }
}
/*

<form name="form1" action="">
  <textarea name="results" cols="40" rows="6">All of the text here will be copied. Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum.</textarea>
  <br>
  <input type="button" value="Copy This" onclick="copy(document.form1.results.value);">
</form>

*/
