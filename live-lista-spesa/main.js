const shoppingListElement = document.querySelector('.shopping .list')

const shoppingList = ['pane', 'latte', 'gelato','pizza']

let i=0

while (i < shoppingList.length){
    
    const product = shoppingList[i]

    const liElement = document.createElement ('li')
    liElement.append(product)
    shoppingListElement.append(liElement)

    i++
}