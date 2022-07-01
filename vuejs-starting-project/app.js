const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "finish the course and learn Vue",
      courseGoalB: "finish the course and learn React",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outPutGoal() {
      const randomNumber = c;
      if (randomNumber > 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);
