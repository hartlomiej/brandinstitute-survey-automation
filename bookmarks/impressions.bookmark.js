javascript:(function()%7BArray.prototype.random%20%3D%20function()%20%7Breturn%20this%5BMath.floor((Math.random()%20*%20this.length))%5D%3B%7D%3Bvar%20positive_impressions%20%3D%20%5B%22very%20catchy!%22%2C%20%22very%20easy%20to%20pronounce%22%2C%20%22easy%20to%20remember%22%5D%3Bvar%20negative_impressions%20%3D%20%5B%22sounds%20weird%22%2C%20%22sounds%20more%20like%20an%20illness%22%2C%20%22hard%20to%20pronounce%22%5D%3Bvar%20name%2C%20response%3Bvar%20textboxes%20%3D%20document.querySelectorAll('%5Bid%24%3D%22why%22%5D')%3Bfor%20(let%20i%20%3D%200%3B%20i%20%3C%20textboxes.length%3B%20i%2B%2B)textboxes%5Bi%5D.value%20%3D%20%22%22%3Bvar%20elements%20%3D%20document.querySelectorAll('input%5Bvalue%3D%222%22%5D')%3Bfor%20(var%20i%20%3D%200%2C%20len%20%3D%20elements.length%3B%20i%20%3C%20len%3B%20i%2B%2B)elements%5Bi%5D.click()%3Bvar%20checkboxes%20%3D%20document.getElementsByClassName(%22ui-checkboxradio%20ui-helper-hidden-accessible%22)%3Bwhile(positive_impressions%5B0%5D%20%2B%20negative_impressions%5B0%5D)%7Bfor%20(let%20i%20%3D%200%3B%20i%20%3C%20textboxes.length%3B%20i%2B%2B)%20%7Bname%20%3D%20textboxes%5Bi%5D.parentElement.parentElement.firstChild.innerText%3Bif%20(Math.random()%20%3E%200.85%20%26%26%20name.length%20%3E%208)%20%7Bresponse%20%3D%20%22too%20long%20and%20complicated%22%3Btextboxes%5Bi%5D.value%20%3D%20response%3Bcheckboxes%5Bi%20*%203%20%2B%202%5D.click()%3Bcontinue%3B%7Dif%20(Math.random()%20%3C%200.2%20%26%26%20negative_impressions.length%20%3E%200)%20%7Bresponse%20%3D%20negative_impressions.random()%3Btextboxes%5Bi%5D.value%20%3D%20response%3Bnegative_impressions.splice(negative_impressions.indexOf(response)%2C%201)%3Bcheckboxes%5Bi%20*%203%20%2B%202%5D.click()%3Bcontinue%3B%7Dif%20(Math.random()%20%3C%200.2%20%26%26%20positive_impressions.length%20%3E%200)%20%7Bresponse%20%3D%20positive_impressions.random()%3Btextboxes%5Bi%5D.value%20%3D%20response%3Bpositive_impressions.splice(positive_impressions.indexOf(response)%2C%201)%3Bcheckboxes%5Bi%20*%203%20%2B%200%5D.click()%3Bcontinue%3B%7D%7D%7D%7D)()
