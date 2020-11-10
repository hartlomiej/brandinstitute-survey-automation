Array.prototype.random = function() {
  return this[Math.floor((Math.random() * this.length))];
};
var positive_impressions = ["very catchy!", "very easy to pronounce", "easy to remember"];
var negative_impressions = ["sounds weird", "sounds more like an illness", "hard to pronounce"];
var name, response;
var textboxes = document.querySelectorAll('[id$="why"]');
for (let i = 0; i < textboxes.length; i++)
  textboxes[i].value = "";
var elements = document.querySelectorAll('input[value="2"]');
for (var i = 0, len = elements.length; i < len; i++)
  elements[i].click();
var checkboxes = document.getElementsByClassName("ui-checkboxradio ui-helper-hidden-accessible");
while(positive_impressions[0] + negative_impressions[0]){
  for (let i = 0; i < textboxes.length; i++) {
    name = textboxes[i].parentElement.parentElement.firstChild.innerText;
    if (Math.random() > 0.85 && name.length > 8) { //negative impression
      response = "too long and complicated";
      textboxes[i].value = response;
      checkboxes[i * 3 + 2].click();
      continue;
    }
    if (Math.random() < 0.2 && negative_impressions.length > 0) { //another negative impression
      response = negative_impressions.random();
      textboxes[i].value = response;
      negative_impressions.splice(negative_impressions.indexOf(response), 1);
      checkboxes[i * 3 + 2].click();
      continue;
    }
    if (Math.random() < 0.2 && positive_impressions.length > 0) { //positive impression
      response = positive_impressions.random();
      textboxes[i].value = response;
      positive_impressions.splice(positive_impressions.indexOf(response), 1);
      checkboxes[i * 3 + 0].click();
      continue;
    }
  }
}
