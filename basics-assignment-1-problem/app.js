const app = Vue.createApp({
  data() {
    return {
      myName: "Tamiris Cristine",
      myAge: 29,
      imgLink:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
    };
  },
  methods: {
    ageFIveYears() {
      return this.myAge + 5;
    },
    favoriteNum() {
      const randomNum = Math.random().toFixed(2);
      if (randomNum <= 1) {
        return `my favorite number is ${randomNum}`;
      } else {
        return `the number is to big`;
      }
    },
  },
});

app.mount("#assignment");
