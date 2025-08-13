// autotime.js

module.exports.config = {
  name: "autotime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rebuild by You",
  description: "Send scheduled messages based on time",
  commandCategory: "System",
  usages: "[auto]",
  cooldowns: 5
};

const schedule = [
  { time: "5:00:00 AM", message: "🌄 ফজরের সময় হয়েছে! সবাই নামাজ পড়ে নিও ইনশাআল্লাহ 🤲" },
  { time: "12:00:00 PM", message: "☀️ এখন দুপুর ১২টা! যোহরের নামাজ পড়তে ভুল না করো ✨" },
  { time: "3:00:00 PM", message: "🌤️ এখন আসরের সময়! সবাই নামাজে দাঁড়িয়ে পড়ো 💖" },
  { time: "6:00:00 PM", message: "🌇 এখন মাগরিবের সময়! সবাই নামাজ পড়ে নাও 🕌" },
  { time: "8:00:00 PM", message: "🌙 এখন এশার সময় হয়েছে! পড়া শেষ করে নামাজ পড়ো 🌌" },
];

module.exports.onLoad = async ({ api }) => {
  setInterval(async () => {
    const now = new Date().toLocaleTimeString('en-US', { hour12: true });
    const match = schedule.find(entry => entry.time === now);
    if (match) {
      const allThreads = global.data.allThreadID || [];
      for (const threadID of allThreads) {
        api.sendMessage(match.message, threadID);
      }
    }
  }, 1000); // Check every second
};

module.exports.run = async () => {};
