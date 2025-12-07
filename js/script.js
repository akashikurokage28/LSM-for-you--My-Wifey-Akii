// Slideshow effect
const images = [
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg"
];

let slideIndex = 0;
const image = document.getElementById("image");
const transitionDuration = 1000;
const slideInterval = 5000;

function nextSlide(){
    image.classList.add("change-img");

    setTimeout(() => {
        slideIndex = (slideIndex + 1) % images.length;
        const nextImage = images[slideIndex];
        image.src = nextImage;
        image.classList.remove("change-img");
    }, transitionDuration);

    setTimeout(nextSlide, slideInterval + transitionDuration);
}

image.src = images[0];

setTimeout(nextSlide, slideInterval);



// Letter

const letterArr = [
    "",
    "",
    "By the way Akii. Before you read my Long Sweet Message",
    "I just want you to enjoy the background music first.",
    "",
    "",
    "",
    "",
    "I hope you enjoy my background music I created",
    "My Wifey Akii.",
    "",
    "",
    "",
    "",
    "Dear Joyce Cagang Saraza,",
    "",
    "This is my 4th Long Sweet Message I wrote for you.",
    "My reason I wrote this letter is not just because of the bet",
    "we make deal of it.",
    "My real intention why I wrote this letter is because",
    "I want to tell you,",
    "To express,",
    "And to feel you that I really serious to our relationship Akii.",
    "",
    "Uhm, How’s your day akii?",
    "I know you’re very tired and drained.",
    "Please, don’t forget to take a rest akii ha?",
    "Okay?",
    "",
    "Uhm…",
    "Ehhhh…",
    "Ahhhh…",
    "Let’s start sa moment na nagbababad na tayo sa isa’t isa.",
    "",
    "At that moment,",
    "Despite na I can’t express my emotions properly,",
    "I believe that I start to pursue you,",
    "To love you,",
    "To make you mine,",
    "I will be able to express and know what I really feel.",
    "",
    "",
    "You know?",
    "The sparks,",
    "The feeling of butterflies in our stomachs was too much for",
    "me to handle",
    "That I didn’t even know why the effect was too strong that I",
    "can even deny Akii.",
    "",
    "",
    "There are so many memories we built to each other.",
    "Remember?",
    "The moment you invite me having a conversation to Telegram.",
    "Honestly, I didn’t expect to build our very first private",
    "conversation on Telegram.",
    "We shared our feelings, daily life, and even embarrassing moment",
    "we laugh together.",
    "",
    "I didn’t waste any second just to reply to our chats.",
    "Because,",
    "You became the light of my Life.",
    "",
    "",
    "Akii. Did you realize?",
    "Just because of one memorable Sleep call on Telegram,",
    "We started to build a purely, unfiltered, and deep",
    "conversation.",
    "We even know that we have mutual feelings and,",
    "We even confessed our feelings to each other.",
    "",
    "Time flies fast, right?",
    "",
    "We even made a boundary which limits our relationship but,",
    "We realized that it was too weak to stop our relationship",
    "from blooming.",
    "In short…",
    "",
    "We become official lovers at September 28, 2025.",
    "",
    "",
    "Memories?",
    "Damn like how do I forget you during the sunny and stormy",
    "days we enjoyed and survived?",
    "Our first storm in the middle of our very first monthsary.",
    "That’s the time I fully understand who you really are,",
    "Although we experience a roller coaster feeling.",
    "",
    "WE STILL HOLD AND CHOOSE TO EACH OTHER AKII.",
    "",
    "The fights and misunderstanding we fought?",
    "I was my first time I experience the real feeling of pain",
    "and sadness.",
    "I’m always asking,",
    "Why we do such a thing that na di naman natin kailangan",
    "pag-awayan?",
    "",
    "",
    "I don’t even know about it until I realized that we didn’t",
    "only fight to each other.",
    "We fight because…",
    "",
    "WE CARED TO EACH OTHER.",
    "WE LOVED AND EVEN EMBRACED OUR EACH OTHER’S FLAWS AND LACKNESS.",
    "",
    "",
    "Why did I’m recall these moments to you?",
    "It’s because I want you to know that every fight we made",
    "like our yesterday’s storm,",
    "I will try to choose to understand, and feel your emotions",
    "as much as I can because,",
    "It’s not all about Me Vs You.",
    "",
    "It’s all about how we handle our mind and emotions on how to",
    "understand each other.",
    "",
    "",
    "I will be real to you.",
    "If there are days that you can’t hear me,",
    "See me,",
    "And feel me,",
    "",
    "I will always choose you to stay and remind you that,",
    "MY SCREAMS OF MY HEART IS ALWAYS YOU AND ONLY YOU.",
    "",
    "",
    "Joyce Cagang Saraza.",
    "My Cute and Wifey Akii.",
    "",
    "I want you to tell you that even I didn’t have much",
    "experience about love,",
    "I want you to know that I’m so fucking falling in love so",
    "madly that I can’t already imagine",
    "The things I go though with you by my side.",
    "",
    "At laging mong itatak sa isip mo na kahit sobrang bata ko pa",
    "para sayo,",
    "I’m always choose to love and stay with you, no matter how",
    "hard the situations will be.",
    "",
    "I don’t care kung sabihin man nila na sobrang bata pa ako",
    "para mahalin ka.",
    "WALA NA SILANG PAKI DOON.",
    "ALL I WANT TO KNOW IS I REALLY REALLY LOVE YOU AKII.",
    "",
    "I always wiling to learn how to love you,",
    "EVERY. FUCKING. SINGLE. DAY.",
    "Because I see my future with you akii.",
    "",
    "If one day mawawalan kana ng feelings sa relationship natin",
    "akii,",
    "Please remember all the memories we shared and experience",
    "akii.",
    "I DON’T HAVE ANY REASONS TO GIVE UP JUST BECAUSE OF THE STORMS",
    "AND MISUNDERSTANDING WE FIGHT.",
    "",
    "I REALLY REALLY REAAAAAAALLY",
    "MADLY IN LOVE WITH YOU AKII.",
    "",
    "",
    "I’m sorry if I can’t handle some of the things as your",
    "boyfriend and partner.",
    "I will do my best to learn how to become your best boyfriend",
    "you’d ever choose na makasama mo,",
    "HABANGBUHAY.",
    "",
    "",
    "MRS. JOYCE CAGANG SARAZA,",
    "",
    "MAHAL NA MAHAL AT HIGIT PA SA MAHAL KITA ANG PAGMAMAHAL KO",
    "SAYO.",
    "",
    "IF MY IPAPROMISE MAN AKO SAYO TODAY.",
    "",
    "GIVE ME A 6 – 12 MONTHS,",
    "AND YOU WILL SEE HOW REALLY, I AM IN PERSONAL.",
    "AND IF PAPALARIN,",
    "MAKAPAGSTART NARIN TAYO MAGBUKOD SA IISANG BUBONG.",
    "",
    "",
    "AKII.",
    "HONESTLY.",
    "SABIK NA SABIK NAKO SA YAKAP AND LAMBING MO SA PERSONAL AKII.",
    "AND REALLY WANT TO PURSUE MY DREAMS WITH YOU DAHIL,",
    "AYOKONG MAGKITA,",
    "MAG-AAWAY,",
    "MAGBABATI,",
    "MATUTULOG AT MAGIGISING NG SABAY.",
    "AT MAGCHICHIKAHAN LANG SA PHONE SCREEN .",
    "",
    "I WANT YOU TO KNOW THAT I’M SERIOUS ABOUT YOU.",
    "GAGAWIN KO ANG LAHAT PARA MAGKITA TAYO IN PERSONAL.",
    "",
    "I WANT HUG HUG YOU,",
    "KISS YOU,",
    "SLEEP WITH YOU,",
    "AND TALK WITH YOU IN PERSON.",
    "",
    "",
    "Akii. Just sit tight, relax, and wait until I knock your",
    "door.",
    "",
    "I LOVE YOU SO MUCH,",
    "MRS. MADATEL",
    "MY CUTIE WIFEY AKII.",
    "",
    "",
    "From your Handsome and clingy Akii,",
    "",
    "Abdulaziz Madatel."
];

const textPlaceholder = document.querySelector(".text-placeholder");

// Function to show each line with fade-in and fade-out, with delay based on string length
function showLetterLines(arr, placeholder) {
	let idx = 0;
	function showNext() {
		if (idx >= arr.length) return;
		placeholder.textContent = arr[idx];
		placeholder.classList.remove("fade-out");
		placeholder.classList.add("fade-in");

		// Calculate delay: base + (length * factor) in ms
		const base = 1000; // 1s base
		const perChar = 50; // 50ms per character
		const delay = base + arr[idx].length * perChar;

		setTimeout(() => {
			placeholder.classList.remove("fade-in");
			placeholder.classList.add("fade-out");
			setTimeout(() => {
				idx++;
				showNext();
			}, 1000); // match fade-out duration in CSS
		}, delay);
	}
	showNext();
}


// start automatically when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => showLetterLines(letterArr, textPlaceholder));
} else {
    showLetterLines(letterArr, textPlaceholder);
}