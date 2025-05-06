document.addEventListener("DOMContentLoaded", function () {
  const scienceQuotes = [
    '"Science is a way of thinking much more than it is a body of knowledge." — Carl Sagan',
    '"The important thing is not to stop questioning. Curiosity has its own reason for existing." — Albert Einstein',
    '"I’m sure the universe is full of intelligent life. It’s just been too intelligent to come here." — Arthur C. Clarke',
    '"The universe is under no obligation to make sense to you." — Neil deGrasse Tyson',
    '"Somewhere, something incredible is waiting to be known." — Carl Sagan',
    '"Equipped with his five senses, man explores the universe around him and calls the adventure Science." — Edwin Hubble',
    '"The good thing about science is that it’s true whether or not you believe in it." — Neil deGrasse Tyson',
    '"Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world." — Louis Pasteur',
    '"Science is not only a disciple of reason, but, also, one of romance and passion." — Stephen Hawking',
    '"Research is what I’m doing when I don’t know what I’m doing." — Wernher von Braun',
  ];
  const techQuotes = [
    '"It has become appallingly obvious that our technology has exceeded our humanity." — Albert Einstein',
    '"Innovation distinguishes between a leader and a follower." — Steve Jobs',
    '"Technology is best when it brings people together." — Matt Mullenweg',
    '"The science of today is the technology of tomorrow." — Edward Teller',
    '"The real problem is not whether machines think but whether men do." — B.F. Skinner',
    '"Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important." — Bill Gates',
    '"Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke',
    '"The advance of technology is based on making it fit in so that you don’t really even notice it." — Bill Gates',
    '"The great growling engine of change—technology." — Alvin Toffler',
    '"Computers are useless. They can only give you answers." — Pablo Picasso',
  ];

  const loveQuotes = [
    '"If I know what love is, it is because of you." — Hermann Hesse',
    "“I need you like a heart needs a beat.” – One Republic",
    '"To love and be loved is to feel the sun from both sides." — David Viscott',
    '"In all the world, there is no heart for me like yours." — Maya Angelou',
    '"We are most alive when we’re in love." — John Updike',
    '"Love doesn’t make the world go ’round. Love is what makes the ride worthwhile." — Franklin P. Jones',
    '"Every love story is beautiful, but ours is my favorite." — Unknown',
    '"I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow." — Leo Christopher',
  ];
  const motivationalQuotes = [
    '"The only way to do great work is to love what you do." — Steve Jobs',
    '"Don’t watch the clock; do what it does. Keep going." — Sam Levenson',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." — Winston Churchill',
    '"Hardships often prepare ordinary people for an extraordinary destiny." — C.S. Lewis',
    '"Believe you can and you’re halfway there." — Theodore Roosevelt',
    '"Push yourself, because no one else is going to do it for you." — Unknown',
    '"Opportunities don’t happen, you create them." — Chris Grosser',
    '"The harder you work for something, the greater you’ll feel when you achieve it." — Unknown',
  ];

  const body = document.body;
  const darkButton = document.getElementById("darkButton");

  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    body.classList.add("dark");
    darkButton.innerHTML = "Light Mode";
  } else {
    body.classList.add("light");
    darkButton.innerHTML = "Dark Mode";
  }

  function darkMode() {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("mode", "dark");
      darkButton.innerHTML = "Light Mode";
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("mode", "light");
      darkButton.innerHTML = "Dark Mode";
    }
  }

  darkButton.addEventListener("click", darkMode);

  var categoryDropdown = document.getElementById("category");
  var quoteDisplay = document.getElementById("quoteDisplay");

  var arr = [];
  var currentIndex = -1;

  //Random quote function:
  function getRandomQuote() {
    var allQuotes = scienceQuotes
      .concat(loveQuotes)
      .concat(techQuotes)
      .concat(motivationalQuotes);
    var randomIndex = Math.floor(Math.random() * allQuotes.length);
    return allQuotes[randomIndex];
  }
  document
    .getElementById("randomButton")
    .addEventListener("click", function () {
      const quote = getRandomQuote();
      quoteDisplay.textContent = quote;
    });

  //New quote function:
  function newQuote() {
    var selectedCategory = categoryDropdown.value.trim(); // Trim spaces
    var selectedQuote;
    var selectedArray;

    if (selectedCategory === "") {
      selectedQuote = getRandomQuote();
    } else if (selectedCategory === "science") {
      selectedArray = scienceQuotes;
    } else if (selectedCategory === "motivational") {
      selectedArray = motivationalQuotes;
    } else if (selectedCategory === "love") {
      selectedArray = loveQuotes;
    } else if (selectedCategory === "tech") {
      selectedArray = techQuotes;
    }

    if (selectedArray) {
      var randomIndex = Math.floor(Math.random() * selectedArray.length);
      selectedQuote = selectedArray[randomIndex];
    }

    console.log("Selected Quote:", selectedQuote);

    if (selectedQuote) {
      currentIndex++;
      arr[currentIndex] = selectedQuote;
      quoteDisplay.textContent = selectedQuote;
    } else {
      quoteDisplay.textContent = "No quote found!";
    }
  }
  document.getElementById("newButton").addEventListener("click", newQuote);
});
