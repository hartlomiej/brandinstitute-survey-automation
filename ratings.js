checkboxes = document.getElementsByClassName("ui-checkboxradio ui-helper-hidden-accessible")
for(let x = 1; x < 10; x++){
    for(let i = 0; i < checkboxes.length; i++)
        if(Math.random() > 0.8) //not all options have equal chance to be picked & don't care
            checkboxes[i].click() 
}
