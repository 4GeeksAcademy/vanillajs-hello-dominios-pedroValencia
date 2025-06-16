let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.org', '.net'];


pronoun.forEach(p => {
    adj.forEach(a => {
        noun.forEach(n => {
            extensions.forEach(e => {
                console.log(p+a+n+e)
            })
        })
    })
})