const coupleShowMore = document.querySelector('#coupleShowMore');
const addictionShowMore = document.querySelector('#addictionShowMore');
const weightShowMore = document.querySelector('#weightShowMore');
const anxShowMore = document.querySelector('#anxShowMore');


coupleShowMore.addEventListener('click', function(){
    document.querySelector('#coupleShowMoreP').classList = '';
    coupleShowMore.classList += ' hideBtn';
})

addictionShowMore.addEventListener('click', function(){
    document.querySelector('#addictionShowMoreP').classList = '';
    addictionShowMore.classList += ' hideBtn';
})

weightShowMore.addEventListener('click', function(){
    document.querySelector('#weightShowMoreP').classList = '';
    weightShowMore.classList += ' hideBtn';
})

anxShowMore.addEventListener('click', function(){
    document.querySelector('#anxShowMoreP').classList = '';
    anxShowMore.classList += ' hideBtn';
})



