const sidebar = document.querySelector('.sidebar')
const menu = document.querySelector('.menu1')
const closeBtn = document.querySelector('.closeBtn')

const arrow = document.querySelector('.arrow')
const arrow2 = document.querySelector('.arrow2')
const arrow3 = document.querySelector('.arrow3')

const question = document.querySelector('.container-question')
const question2 = document.querySelector('.container-question2')
const question3 = document.querySelector('.container-question3')
/*
const products = async () => {
    const response = await fetch('assets.json')
    const data = await response.json()
    
    const response1 = await fetch('customer-review.json')
    const data1 =  await response1.json()


    data.forEach((item) => {
        
        placeHolder.innerHTML +=
        `<div class="burger1">
            <img src=${item.image} class="burger_1">
                <h1>${item.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <h2>$${item.price}</h2> 
                     
        </div>`

        console.log(item.image)
    })


    data1.forEach((item) => {
        customerReview.innerHTML += `  
        <div class="customer">
                <img src=${item.Profile} class="profile">
                <p class="when">${item.When}</p>
                <p class="message">${item.Message}</p>             
                <h2>${item.Name}</h2>
                <img src=${item.Rating} class="rating">      
        </div>`
    })
    
}
products()
*/
menu.addEventListener('click', ()=> {

    if(sidebar.classList.contains('toggle')){
        sidebar.classList.toggle('toggle1')
    }else{
        sidebar.classList.toggle('toggle')
    }

})

closeBtn.addEventListener('click', () => sidebar.classList.toggle('toggle1'))


arrow.addEventListener('click', () => {
    question.classList.toggle('question-toggle')
})

arrow2.addEventListener('click', () => {
    question2.classList.toggle('question-toggle')
})

arrow3.addEventListener('click', () => {
    question3.classList.toggle('question-toggle')
})

