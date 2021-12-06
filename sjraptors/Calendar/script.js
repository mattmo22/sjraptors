const eventData = [
  {
    Date: "12/8/2021",
    Arena: "Away",
    OpponentTeam: "Giants",
    Logo: "../giants.svg",
    Time: "12:00 - 3:00"
  },
  {
    Date: "12/9/2021",
    Arena: "Away",
    OpponentTeam: "Giants",
    Logo: "../giants.svg",
    Time: "12:00 - 3:00"
  },
  {
    Date: "12/10/2021",
    Arena: "Away",
    OpponentTeam: "Giants",
    Logo: "../giants.svg",
    Time: "12:00 - 3:00"
  },
  {
    Date: "12/12/2021",
    Arena: "Home",
    OpponentTeam: "Dodgers",
    Logo: "../dodgers.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "12/13/2021",
    Arena: "Home",
    OpponentTeam: "Dodgers",
    Logo: "../dodgers.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "12/14/2021",
    Arena: "Home",
    OpponentTeam: "Dodgers",
    Logo: "../dodgers.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "12/15/2021",
    Arena: "Home",
    OpponentTeam: "Dodgers",
    Logo: "../dodgers.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "12/16/2021",
    Arena: "Home",
    OpponentTeam: "Dodgers",
    Logo: "../dodgers.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "12/17/2021",
    Arena: "Home",
    OpponentTeam: "Dodgers",
    Logo: "../dodgers.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "12/19/2021",
    Arena: "Away",
    OpponentTeam: "Padres",
    Logo: "../padres.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "12/20/2021",
    Arena: "Away",
    OpponentTeam: "Padres",
    Logo: "../padres.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "12/21/2021",
    Arena: "Away",
    OpponentTeam: "Padres",
    Logo: "../padres.svg",
    Time: "TBD"
  },
  {
    Date: "12/22/2021",
    Arena: "Away",
    OpponentTeam: "Padres",
    Logo: "../padres.svg",
    Time: "TBD"
  },
  {
    Date: "12/23/2021",
    Arena: "Away",
    OpponentTeam: "Padres",
    Logo: "../padres.svg",
    Time: "TBD"
  },
  {
    Date: "1/23/2021",
    Arena: "Away",
    OpponentTeam: "Rockies",
    Logo: "https://www.mlbstatic.com/team-logos/109.svg",
    Time: "TBD"
  },
  {
  Date: "1/8/2021",
    Arena: "Away",
    OpponentTeam: "Diamondbacks",
    Logo: "https://www.mlbstatic.com/team-logos/109.svg",
    Time: "12:00 - 3:00"
  },
  {
    Date: "1/9/2021",
    Arena: "Away",
    OpponentTeam: "Diamondbacks",
    Logo: "https://www.mlbstatic.com/team-logos/109.svg",
    Time: "12:00 - 3:00"
  },
  {
    Date: "1/10/2021",
    Arena: "Away",
    OpponentTeam: "Rockies",
    Logo: "../rockies.svg",
    Time: "12:00 - 3:00"
  },
  {
    Date: "1/12/2021",
    Arena: "Home",
    OpponentTeam: "Rockies",
    Logo: "../rockies.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "1/13/2021",
    Arena: "Home",
    OpponentTeam: "Rockies",
    Logo: "../rockies.svg",
    Time: "3:00 - 6:00"
  },
  {
    Date: "1/14/2021",
    Arena: "Home",
    OpponentTeam: "Rockies",
    Logo: "../rockies.svg",
    Time: "3:00 - 6:00"
  },
]

const date = new Date()

const renderCalendar = () => {
  date.setDate(1)
  const monthDays = document.querySelector(".days")

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

  const firstDayIndex = date.getDay()

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay()

  const nextDays = 7 - lastDayIndex - 1

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  document.querySelector(".date h1").innerHTML = months[date.getMonth()]

  document.querySelector(".date p").innerHTML = new Date().toDateString()

  let days = ""

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }

  for (let i = 1; i <= lastDay; i++) {
    let currentMonth = date.getMonth() + 1
    let currentDate = currentMonth + "/" + i + "/" + "2021"
    let matchedEventObj = eventData.find((obj) => obj.Date === currentDate)

    // If current date exists in eventData, create event view.
    // Else display only the day
    if (matchedEventObj) {
      let opponentLabel =
        matchedEventObj.Arena === "Away"
          ? "@ " + matchedEventObj.OpponentTeam
          : "vs " + matchedEventObj.OpponentTeam
      let eventCss = matchedEventObj.Arena === "Away" ? "away" : "home"
      let content = `<div class="${eventCss} day">
            <div class="left-column">
              ${i}
            </div>
            <div class="right-column">
              <img src="${matchedEventObj.Logo}" class="logo" alt="Team Logo"/>
              <div>${opponentLabel}</div>
              <div>${matchedEventObj.Time}</div>
            </div>
         </div>`
      days += content
    } else {
      days += `<div class="day">${i}</div>`
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days
  }
}

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1)
  renderCalendar()
})

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1)
  renderCalendar()
})

let divs = document.querySelectorAll(".days")
divs.forEach((el) =>
  el.addEventListener("click", (event) => {
    console.log(event.target.innerHTML)
    console.log(date.getMonth() + 1)
  })
)

renderCalendar()
