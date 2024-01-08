// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді корис
let userId = new URL(location.href).searchParams.get("id")
console.log(userId)

fetch("http://jsonplaceholder.typicode.com/users?id=" + userId)
    .then(value => value.json())
    .then(value => {
        let user = value[0]
        console.log(user)
        // let div2 = document.createElement("div")
        for (const userKey in user) {
            if (typeof user[userKey] === "object") {
                for (const userKeyKey in user[userKey]) {
                    if (typeof user[userKey][userKeyKey] === "object") {
                        let geo = user[userKey][userKeyKey]
                        for (const geoKey in geo) {
                            let div3 = document.createElement("div")
                            div3.innerHTML= geoKey + " " + geo[geoKey]
                            document.body.append(div3)
                            console.log(geoKey + " " + geo[geoKey])
                        }
                    } else {
                        let div2 = document.createElement("div")
                        div2.innerHTML= userKeyKey + " " + user[userKey][userKeyKey]
                        document.body.append(div2)
                        console.log(userKeyKey + " " + user[userKey][userKeyKey])
                    }
                }
            } else {
                let div1 = document.createElement("div")
                div1.innerHTML= userKey + " " + user[userKey]
                document.body.append(div1)
                console.log(userKey + " " + user[userKey])
            }
        }
    })