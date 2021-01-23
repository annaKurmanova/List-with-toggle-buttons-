const toggleBtns = document.querySelectorAll('.faq-toggle');
const addFaqContainer = document.getElementById('add-faq');
const faqTitleInput = document.getElementById('faq-title-input');
const askInput = document.getElementById('ask-input');
const askBtn = document.querySelector('.ask');
const faqContainer = document.querySelector ('.faq-container');
const faqs = document.querySelectorAll('.faq');
// const faqTitle = document.getElementById('faq-title');

 

askBtn.addEventListener('click',  addFaqs);

function addFaqs() {
  // create faq
  let faq = document.createElement('div');
  faq.className = 'faq active'; 
  // create title
  let faqTitle = document.createElement('h3');
  // add class
  faqTitle.className = 'faq-title';
  // put input value into title
  faqTitle.appendChild(document.createTextNode(faqTitleInput.value));
  // create question text
  let questionText = document.createElement('p');
  // add class
  questionText.className = 'faq-text';
  // put input value into text
  questionText.innerText = askInput.value;

  // create toggle buttons
  let toggleButton = document.createElement('button');
  toggleButton.className = 'faq-toggle';
  toggleButton.innerHTML = '<i class="fas fa-times"></i>';
    // add toggle effect
    toggleButton.addEventListener('click', () => {
      toggleButton.parentNode.classList.toggle('active');  
       // change toggle button icon
       if(faq.classList.contains('active')) {
        toggleButton.innerHTML = '<i class="fas fa-times"></i>';
      } else  {
        toggleButton.innerHTML = '<i class="fas fa-chevron-down"></i>';    
      }
    });

  // append all to faq
  faq.append(faqTitle, questionText,toggleButton);
  // append to container
  faqContainer.append(faq);

    // clear input
    askInput.value = '';
    faqTitleInput.value = '';
}


