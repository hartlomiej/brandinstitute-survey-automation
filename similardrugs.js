var testnames = []
for(let i = 0; i < document.querySelectorAll("h2").length; i++)
    testnames[i] = document.querySelectorAll("h2")[i].innerHTML.replace(/ /g, "");
for(let i = 0; i < testnames.length; i++){
    window.open(`http://google.com/search?q=${testnames[i]}+drug`, '_blank');
    window.open(`http://google.com/search?q=${testnames[i]}+medicament`, '_blank');
}
localStorage.testnames = JSON.stringify(testnames);
