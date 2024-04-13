const randomFacts = [
    {
        title: "Debert",
        fact: "Debert (/dəˈbɜːrt/) is a farming community located in the central-western part of Colchester County, Nova Scotia, Canada.",
    },
    {
        title: "This thing",
        fact: "This website is initially made for two reasons: Codedex challenge and because I'm bored 😮",
    },
    {
        title: "Friends AND Enemies",
        fact: "Likes math, hates math, enjoys math, despises math, but needs math in my life 🙃",
    },
    {
        title: "A Life Perk",
        fact: "You'll never have a mid-life crisis if your life is THE crisis 😀",
    },
];

export function randomFact() {
    return randomFacts[Math.floor(Math.random() * randomFacts.length)];
}