/*
    We store HTML elements in JavaScript variables
    so that we can operate on these elements programmatically

    If you need to do ANYTHING to an HTML element via JavaScript
    you should store that HTML element in a variable

    Exmaple if you need to append or add a list item to a list element (ul/ol)
    then you need to both create and alement as a variable, and,
    since you are adding something to the list element, you should store that list
    element in a variable as well.
*/

// 1. Create a List Item for a fruit, and append it to list-1

// const list1 = document.querySelector('#list-1')
// let li = document.createElement('li')
// li.className = "li"
// li.textContent = "germs"
// list1.append(li)

// 2. Create a list item for a vegetable, and append it to the list with id list-1

// li = document.createElement('li')
// li.textContent = "zucchini"
// list1.append(li)

// li = document.createElement('li')
// li.textContent = "accordion"
// list1.append(li)



const fruitsArray = ["Kiwi", "Pumpkin", "Viola da Gamba"]
fruitsArray.map((element, index) => {
        const list1 = document.querySelector('#list-1') 
        const li = document.createElement('li')
    li.textContent = element
    list1.append(li)
})

// 4. Create a clickable button. When the
// button is clicked, it will change the
// text of the paragraph element with
// id para to say "Button was clicked!"
// btn itself says click me!

let button = document.createElement('button')
button.textContent = 'Click me!'
document.body.append(button)
button.addEventListener('click', () => {
    let p = document.getElementById('para')
    p.textContent = 'Button was clicked!'
})

// 5. Create an input element that accepts text input
// create a button that says sybmit. input ID = text-input
// button id text-input-btn

let input = document.createElement('input')
input.setAttribute("type", "text")
input.setAttribute('id', 'text-input')
let button2 = document.createElement('button')
button2.setAttribute('id', 'text-input-btn')
document.body.append(input, button2)
button2.textContent = "SUBMIT"
let htmlInput = document.createElement('input')
document.body.append(htmlInput)

// 6. When the submit button is clicked, 

button2.addEventListener('click', () => {
    let userInput = input.value
    let newElement = document.createElement(userInput)
    let userHtml = htmlInput.value
    newElement.innerHTML = userHtml
    document.body.append(newElement)
})

// 7 input field ID html content







