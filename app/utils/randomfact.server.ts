const randomFacts = [
    {
        title: "What is Debert?",
        fact: "Debert (/dəˈbɜːrt/) is a farming community located in Colchester County, Canada (coincidence 😳?)",
    },
    {
        title: "This thing",
        fact: "This personal website is initially made for the Codedex #30NitesOfCode challenge 😮",
    },
    {
        title: "Me and Math",
        fact: "Math is undoubtedly challenging, and that's what makes it interesting 🧐",
    },
    {
        title: "A Life Perk",
        fact: "You'll never have a mid-life crisis if your life is THE crisis 😀",
    },
];

export function randomFact() {
    return randomFacts[Math.floor(Math.random() * randomFacts.length)];
}