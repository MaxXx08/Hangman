const words = [
    {
        word: "Happy",
        definition: "feeling or showing pleasure or contentment."
    },
    {
        word: "Smile",
        definition: "form one's features into a pleased, kind, or amused expression."
    },
    {
        word: "Sunny",
        definition: "having a lot of bright sunlight."
    },
    {
        word: "Funny",
        definition: "causing laughter or amusement; humorous."
    },
    {
        word: "Quick",
        definition: "moving fast or doing something in a short time."
    },
    {
        word: "Apple",
        definition: "the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh."
    },
    {
        word: "Table",
        definition: "a piece of furniture with a flat top and one or more legs, providing a level surface for eating, writing, or working at."
    },
    {
        word: "Water",
        definition: "a colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms."
    },
    {
        word: "Simple",
        definition: "easily understood or done; presenting no difficulty."
    },
    {
        word: "Yellow",
        definition: "of the color between green and orange in the spectrum, a primary subtractive color complementary to blue; colored like ripe lemons or egg yolks."
    },
    {
        word: "Garden",
        definition: "a piece of ground, often near a house, used for growing flowers, fruit, or vegetables."
    },
    {
        word: "Breeze",
        definition: "a gentle wind."
    },
    {
        word: "Pretty",
        definition: "attractive in a delicate way without being truly beautiful or handsome."
    },
    {
        word: "Friend",
        definition: "a person with whom one has a bond of mutual affection, typically one exclusive of sexual or family relations."
    },
    {
        word: "Summer",
        definition: "the warmest season of the year, in the northern hemisphere from June to August and in the southern hemisphere from December to February."
    },
    {
        word: "Acumen",
        definition: "the ability to make good judgments and quick decisions, typically in a particular domain."
    },
    {
        word: "Allure",
        definition: "the quality of being powerfully and mysteriously attractive or fascinating."
    },
    {
        word: "Frugal",
        definition: "sparing or economical with regard to money or food."
    },
    {
        word: "Eloquent",
        definition: "fluent or persuasive in speaking or writing."
    },
    {
        word: "Hapless",
        definition: "unfortunate; unlucky."
    },
    {
        word: "Lethargy",
        definition: "a lack of energy and enthusiasm."
    },
    {
        word: "Brevity",
        definition: "concise and exact use of words in writing or speech."
    },
    {
        word: "Nefarious",
        definition: "wicked, villainous, or criminal."
    },
    {
        word: "Juxtapose",
        definition: "to place or deal with close together for contrasting effect."
    },
    {
        word: "Incessant",
        definition: "continuing without pause or interruption."
    },
    {
        word: "Gargantuan",
        definition: "enormous; gigantic."
    },
    {
        word: "Debilitate",
        definition: "make (someone) weak and infirm."
    },
    {
        word: "Obsolete",
        definition: "no longer in general use; out of date."
    },
    {
        word: "Vicarious",
        definition: "experienced in the imagination through the feelings or actions of another person."
    },
    {
        word: "Ubiquitous",
        definition: "present, appearing, or found everywhere."
    },
    {
        word: "Serene",
        definition: "calm, peaceful, and untroubled; tranquil."
    },
    {
        word: "Enthusiasm",
        definition: "intense and eager enjoyment, interest, or approval."
    },
    {
        word: "Brilliant",
        definition: "exceptionally clever or talented; exceptionally bright or radiant."
    },
    {
        word: "Delicate",
        definition: "very fine in texture or structure; easily broken or damaged; requiring sensitive or careful handling."
    },
    {
        word: "Vivid",
        definition: "producing powerful feelings or strong, clear images in the mind."
    },
    {
        word: "Sincere",
        definition: "free from pretense or deceit; genuine; honest."
    },
    {
        word: "Harmony",
        definition: "the quality of forming a pleasing and consistent whole."
    },
    {
        word: "Wisdom",
        definition: "the quality of having experience, knowledge, and good judgment; the soundness of an action or decision with regard to the application of experience, knowledge, and good judgment."
    },
    {
        word: "Efficient",
        definition: "achieving maximum productivity with minimum wasted effort or expense."
    },
    {
        word: "Diligent",
        definition: "having or showing care and conscientiousness in one's work or duties."
    },
    {
        word: "Majestic",
        definition: "having or showing impressive beauty or dignity; grand."
    },
    {
        word: "Resilient",
        definition: "able to withstand or recover quickly from difficult conditions."
    },
    {
        word: "Tranquil",
        definition: "free from disturbance; calm."
    },
    {
        word: "Exuberant",
        definition: "filled with or characterized by a lively energy and excitement."
    },
    {
        word: "Radiant",
        definition: "emitting or reflecting light; shining."
    },
    {
        word: "Luminous",
        definition: "full of or shedding light; bright or shining, especially in the dark."
    },
    {
        word: "Effervescent",
        definition: "giving off bubbles; fizzy; vivacious and enthusiastic."
    },
    {
        word: "Melodic",
        definition: "having a pleasing sound; tuneful."
    },
    {
        word: "Gentle",
        definition: "having a mild, kind, or tender temperament or character."
    },
    {
        word: "Vibrant",
        definition: "full of energy and enthusiasm; lively."
    }
];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let letterSelection = [];
let wordPicked;
let definitionPicked;
let streak = 0;
function letterGenerator(){
    let word = words[Math.floor(Math.random() * words.length)];
    wordPicked = word.word;
    definitionPicked = word.definition;
    for(let i = 0;i<word.word.length;i++){
        let doesExist = false;
        letterSelection.forEach(e => {
            if(e == word.word[i].toLowerCase()){
                doesExist = true;
            }
        })
        if(!doesExist){
            letterSelection.push(word.word[i].toLowerCase())
        }
    }
    for(let x = letterSelection.length;x<20;x++){
       breakLoop:while(true){
            doesLetterExist = false;
            let randLetter = letters[Math.floor(Math.random() * letters.length)];
            letterSelection.forEach(e => {
                if(randLetter == e){
                    doesLetterExist = true;
                }
            })
            if(!doesLetterExist){
                letterSelection.push(randLetter);
                break breakLoop;
            }
        }
    }
    letterSelection = shuffle(letterSelection);
    generateElements(letterSelection)
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
function generateElements(array){
    let blanks = document.querySelector(".blanks");
    let definition = document.querySelector(".definition");
    let scrambled = document.querySelector(".scrambled-letter");
    for(let i = 0;i<wordPicked.length;i++){
        let div = document.createElement("p");
        div.setAttribute("class","blank "+wordPicked[i].toLowerCase());
        div.textContent = wordPicked[i].toLowerCase();
        blanks.appendChild(div)
    }
    let p = document.createElement("p");
    p.textContent = definitionPicked;
    definition.appendChild(p);
    for(let i = 0;i<array.length;i++){
        let button = document.createElement("button");
        button.setAttribute("class", "scrambled");
        button.textContent = array[i];
        button.setAttribute("onclick", "checkIfCorrect(this)");
        scrambled.appendChild(button)
    }
}

function checkIfCorrect(e){
    let doesExist = false;
    for(let i = 0;i<wordPicked.length;i++){
        if(wordPicked[i].toLowerCase() == e.textContent){
            doesExist = true;
        }
    }
    if(doesExist){
        
        let contents = document.getElementsByClassName(`${e.textContent}`);
        for(let i = 0;contents.length;i++){
            contents[i].style.color = "black";
            e.style.backgroundColor = "rgb(0, 200, 0)";
        }
        
    }else{
        streak++;
        e.disabled = true;
        document.querySelector(".hangman-display").style.backgroundImage = `url(images/${streak}.png)`
        if(streak == 7){
            alert("Game Over");
        }
    }
}
function checkAnswer(){
    let answer = document.querySelector(".answer").value;
    if(answer == wordPicked.toLowerCase()){
        alert("Correct")
    }
}
letterGenerator();