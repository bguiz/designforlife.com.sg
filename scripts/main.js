
var domainroot = "designforlife.com.sg";
var searchaction = [
  "https://www.google.com/search",
  "http://www.bing.com/",
  "http://search.yahoo.com/search"
];
var queryfieldname=["q","q","p"];

function switchaction(form, index)
{
  form.action=searchaction[index];
  document.getElementById("hiddenquery").name = queryfieldname[index];
}

function dflsitesearch(curobj)
{
  var the_form = document.getElementById('dflsearch');
  for (i = 0; i < the_form.engine.length; i++)
  {
    if (the_form.engine[i].checked) {
      switchaction(the_form, i);
    }
  }
  document.getElementById("hiddenquery").value = "site:"+domainroot+" "+curobj.qfront.value;
}

function display_text_for_copyright() {
  var one = '67 Clover Way Singapore 579123';
  var two = '+6597872769';
  var three_one = 'info';
  var three_two = 'designforlife';
  var three_three = 'com';
  var three_four = 'sg';
  var three = three_one+'@'+three_two+'.'+three_three+'.'+three_four;
  return [one, two,three].join(' ');
}

function main_page_loaded() {
  document.getElementById("copyright_under").innerHTML = display_text_for_copyright();
}
