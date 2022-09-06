const quotes = [
  "For every minute you remain angry, you give up sixty seconds of peace of mind.",
  "I am infinitely loved.",
  "My body is full of energy.",
  "Prove yourself to yourself, not to others.",
  "Good food nourishes me.",
  "A good day starts with a good mindset",
  "Taking care of myself is a responsibility",
  "To love is nothing. To be loved is something. But to be loved by the person you love is everything.",
  "No matter how good or bad your life is, wake up each morning and be thankful that you still have one.",
  "Never stop trying. Never stop believing. Never give up. Your day will come.",
  "Life is a nonstop journey. Be proud of how far you've come and get excited for how much further you'll go.",
];

const quote = document.querySelector("#quote span:first-child");

quote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
