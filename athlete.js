const athleteCards = document.querySelectorAll('.athlete-card')
const athleteContainer = document.querySelector('.athlete-cards')

athleteCards.forEach(function(card) {
    card.addEventListener('click', function() {
        const isActive = card.classList.contains('active')

        athleteCards.forEach(function(c) {
            c.classList.remove('active')
        })

        if (!isActive) {
            card.classList.add('active')
            athleteContainer.classList.add('has-active')
        } else {
            athleteContainer.classList.remove('has-active')
        }
    })
})
