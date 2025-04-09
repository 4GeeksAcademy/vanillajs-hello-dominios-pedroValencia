let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.org', '.net'];
/**
for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let e = 0; e < extensions.length; e++) {
                console.log(pronoun[p] + adj[a] + noun[n] + extensions[e]);
            }
        }
    }
}
**/

pronoun.forEach(p => {
    adj.forEach(a => {
        noun.forEach(n => {
            extensions.forEach(e => {
                console.log(p + a + n + e);
            });
        });
    });
});