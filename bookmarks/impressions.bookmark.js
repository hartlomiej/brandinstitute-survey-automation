javascript:(function()%7BArray.prototype.random %3D function () %7Breturn this%5BMath.floor((Math.random()*this.length))%5D%3B%7D%3Bvar positive_impressions %3D %5B"very catchy!"%2C "very easy to pronounce"%2C "easy to remember"%5D%3Bvar negative_impressions %3D %5B"sounds weird"%2C "sounds more like an illness"%2C "hard to pronounce"%5D%3Bvar name%2C response%3Bvar textboxes %3D document.querySelectorAll('%5Bid%24%3D"why"%5D')%3Bfor(let i %3D 0%3B i < textboxes.length%3B i%2B%2B)textboxes%5Bi%5D.value %3D ""%3Bvar elements %3D document.querySelectorAll('input%5Bvalue%3D"2"%5D')%3Bfor (var i %3D 0%2C len %3D elements.length%3B i < len%3B i%2B%2B)elements%5Bi%5D.click()%3Bvar checkboxes %3D document.getElementsByClassName("ui-checkboxradio ui-helper-hidden-accessible")%3Bfor(let i %3D 0%3B i < textboxes.length%3B i%2B%2B)%7Bname %3D textboxes%5Bi%5D.parentElement.parentElement.firstChild.innerText%3Bif(Math.random() > 0.85 %26%26 name.length > 8)%7Bresponse %3D "too long and complicated"%3Btextboxes%5Bi%5D.value %3D response%3Bcheckboxes%5Bi*3%2B2%5D.click()%3Bcontinue%3B%7Dif(Math.random() < 0.2 %26%26 negative_impressions.length > 0)%7Bresponse %3D negative_impressions.random()%3Btextboxes%5Bi%5D.value %3D response%3Bnegative_impressions.splice(negative_impressions.indexOf(response)%2C 1)%3Bcheckboxes%5Bi*3%2B2%5D.click()%3Bcontinue%3B%7Dif(Math.random() < 0.2 %26%26 positive_impressions.length > 0)%7Bresponse %3D positive_impressions.random()%3Btextboxes%5Bi%5D.value %3D response%3Bpositive_impressions.splice(positive_impressions.indexOf(response)%2C 1)%3Bcheckboxes%5Bi*3%2B0%5D.click()%3Bcontinue%3B%7D%7D%7D)()
