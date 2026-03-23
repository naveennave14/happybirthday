/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Preethika",
  photo: "./img/irene.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "Happy birthday!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎊",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your 27th birthday!! ",
    },
    {
      type: "chatbox",
      message:
        "Happy birthday! May your day be filled with laughter, your heart with joy, and the year ahead with everything you’ve been dreaming of.",
      type: "countdown",
      from: 16,
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "Another beautiful year of you.",
        "So grateful to celebrate this day",
        "You deserve all the happiness in the world",
        "Enjoy every single moment...",
        "That you experience today",
        "Fill it with your most beautiful smile",
        "And make it the best memory..",
        "Thanks for the friendship we made",
        "Lastly...",
        "I'd like to wish you one more time",
        "Happy Birthday Preethika<span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
      author: "Oprah Winfrey",
    },
    {
      type: "stars",
      count: 60,
    },
    {
      type: "balloons",
      count: 20,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday Preethika!",
      wishText: " I am always be with you by friends! ;)",
    },
    {
      type: "fireworks",
      count: 40,
    },
    {
      type: "confetti",
      count: 23,
    },
    {
      type: "closing",
      text: "Okay, now come back and tell me if you liked it.",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
