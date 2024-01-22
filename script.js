function generateWords() {
    // struggles
    const wordList1 = ["no support system",
    "a child on the way",
    "lupus",
    "severe allergies to like everything",
    "chronic depression",
    "newly diagnosed type 2 diabetes",
    "incontinence",
    "post-partum depression",
    "a failing relationship",
    "disapproving parents",
    "poor body image",
    "an alcohol addiction",
    "social anxiety",
    "rejection",
    "a dying loved one",
    "a cat that pees on their bed",
    "an absent father",
    "poor job prospects",
    "PTSD",
    "student loans",
    "imposter syndrome",
    "glaucoma",
    "a rebellious teenager",
    "a non communicative partner",
    "a severe injury",
    "recurring migraines",
    "a lot of bug bites",
    "a bad credit score",
    "eczema",
    "arthritis",
    "facial scarring",
    "a history of abuse",
    "a toxic friend"];
    
    // circumstances
    const wordList2 = ["late to catch the bus",
    "pushing a stroller",
    "carrying a spoiled dog on a walk",
    "cooking breakfast",
    "on a very long conference call",
    "trying not to wake their roommate",
    "shopping at the grocery store",
    "stuck in bumper-to-bumper traffic",
    "backpacking through Europe",
    "lifting at the gym",
    "getting ready to go clubbing",
    "making sourdough",
    "cheering at a basketball game",
    "on a morning run by the river",
    "hiding from their boss in the bathroom",
    "watching anime with their friend",
    "on a blind date",
    "packed like a sardine on a NY subway",
    "building legos with their niece",
    "solving puzzles with their grandpa",
    "on a cleaning rampage",
    "at a holiday party trying to make conversation with strangers",
    "endlessly scrolling on their phone",
    "waiting for a pregnancy test",
    "working on college applications"];

    // Array of recipient qualities
    const wordList3 = ["nostalgic",
    "pure unadulterated rage",
    "grief",
    "self-reflective",
    "bored to death",
    "existential",
    "butterflies",
    "anxious about their future",
    "inspired",
    "a sense of relief",
    "scatter-brained",
    "fulfilled",
    "nervous but excited",
    "annoyed",
    "stressed and pressed",
    "horribly unprepared",
    "unclear",
    "indulgent",
    "impulsive",
    "loved",
    "conflicted",
    "peace",
    "rediscovered",
    "gaslit",
    "finally free",
    "a desire for more in life",
    "disappointed in themselves",
    "worried about what others think",
    "stagnated",
    "grateful for a second chance",
    "out of control",
    "bitter",
    "on a roll",
    "embarassed",
    "paranoid",
    "overwhelmed",
    "unworthy of love",
    "lost"];

    // Function to pick a random word from each list
    function getRandomWord(wordArray) {
        const randomIndex = Math.floor(Math.random() * wordArray.length);
        return wordArray[randomIndex];
    }

    // Generate three random words
    const word1 = getRandomWord(wordList1);
    const word2 = getRandomWord(wordList2);
    const word3 = getRandomWord(wordList3);

    // Display the generated words
    const generatedWordsElement = document.getElementById("generatedWords");
    generatedWordsElement.textContent = `A person with ${word1} who is ${word2} and feeling ${word3}`;
}
