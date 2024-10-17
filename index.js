// const q = document.querySelector(".q")
// const ans = document.querySelectorAll(".answer")
// const q = document.querySelector(".q")
const botton = document.querySelector('.botton')
let shuffledQuestions, currentQuestionIndex, score = 0, userName = ''


// fetch questions
async function callQ (){
    try{
        const res = await fetch('q.json')
        const allq =  await res.json()
        console.log(allq)

        const q = document.createElement('div')
        const ans = document.createElement('div')
        botton.append(q)
        q.innerHTML = allq.quesion
        q.classList.add('q')


        // ans.forEach( (a)=>{
        //     a.innerHTML = allq.answers
        // })

    }catch (error){
        console.error("error getting questions",error)
        alert('failed to load quetions')
    }

}
callQ()


