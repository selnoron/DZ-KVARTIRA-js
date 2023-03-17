// 1
const mosh_alina = document.querySelectorAll('.mini_list > li')
console.log(mosh_alina[1].innerHTML)

// 2
const god_artem = document.querySelectorAll('.list > li')
let super_god_artem_text = god_artem[5].innerHTML
let sgat = super_god_artem_text.split(" ")

const super_artem = document.createElement('li')
const el1 = document.createElement('span')
el1.innerHTML = `<span style="font-size: 25px;">${sgat[0]}  </span>`
const el2 = document.createElement('span')
el2.innerHTML = `<span style="text-decoration: underline; font-style: italic;">${sgat[1]}</span>`
super_artem.append(el1)
super_artem.append(el2)

god_artem[5].remove()
const god_artem2 = document.querySelectorAll('.list')
god_artem2[1].append(super_artem)

// 3
const children = document.createElement("ul")
children.innerHTML = '<li>Михаил</li> <li>Генадий</li>'
god_artem[4].innerHTML += " дети:"
god_artem[4].append(children)

// 4
god_artem[1].innerHTML = "Корчевский София Ивановна"

// 5
mosh_alina[3].innerHTML += " Владимировна"