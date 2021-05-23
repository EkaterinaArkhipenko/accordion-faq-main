this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".accordion__question")

    questions.forEach((accordion__question) => accordion__question.addEventListener("click", () =>{
    accordion__question.nextElementSibling.classList.toggle("collapse")
      if(accordion__question.nextElementSibling.classList.contains("collapse")){
          accordion__question.classList.add("open")

           questions.forEach(accordion__question => accordion__question.nextElementSibling.classList.add("collapse"));
           questions.forEach(accordion__question => accordion__question.classList.remove("open"));

           if(accordion__question.classList.contains('open')){
               console.log('toggle button');
               accordion__question.nextElementSibling.classList='accordion__collapse collapsing';

           setTimeout(() => {
                 console.log('open acc content');
                 accordion__question.nextElementSibling.classList='accordion__collapse open'},300);
               }
               else{
                 accordion__question.nextElementSibling.classList='accordion__collapse collapsing'
                 setTimeout(() => {
                   console.log('open acc content');
                   accordion__question.nextElementSibling.classList='accordion__collapse collapse'},300 );
                 }
        } else {
console.log('else')
questions.forEach(accordion__question => accordion__question.nextElementSibling.classList.add("collapse"))
accordion__question.nextElementSibling.classList.remove("collapse")
questions.forEach(accordion__question => accordion__question.classList.remove("open"))
accordion__question.classList.toggle("open")
        }
    }))
});
