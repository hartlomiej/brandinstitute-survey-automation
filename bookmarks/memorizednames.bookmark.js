javascript:(function()%7Bmemory %3D JSON.parse(localStorage.testnames)%3Bmemory %3D memory.sort(() %3D> Math.random() - Math.random()).slice(0%2C memory.length%2F2%2B1)%3Binputs %3D document.querySelectorAll('input%5Btype%3Dtext%5D')%3Bfor(let i %3D 0%3B i<memory.length%3B i%2B%2B)inputs%5Bi%5D.value %3D memory%5Bi%5D.toLowerCase()%7D)()
