const emoji = document.querySelector(".emoji");

const emojis = [
  "😬",
  "🤯",
  "😮",
  "🙃",
  "🥱",
  "😪",
  "🤩",
  "😍",
  "😗",
  "😶‍🌫️",
  "🫡",
  "🥲",
  "😎",
  "😂",
  "😃",
  "😁",
  "Hey !",
  "Good Morning",
]

emoji.addEventListener("mouseover",()=>{
  emoji.innerHTML= emojis[Math.floor(Math.random()*emojis.length)];
})
