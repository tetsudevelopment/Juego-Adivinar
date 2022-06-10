var app = new Vue({
  el: "#app",
  data() {
    return {
      dataYear: ["2002", "2000", "1999", "2022"],
      dataUser: [
        {
          id: 1,
          nameUser: "Brayan",
          punctuation: 100,
        },
        {
          id: 2,
          nameUser: "Brayan",
          punctuation: 80,
        },
      ],

      main: 0,
      watchUser: 0,
      id: 0,
      nameUser: "",
      attempts: 7,
      year: "",
      random: "",
      finish: "",
      clue: "",
      difference:0,
      punctuation:100,
    };
  },
  methods: {
    start: function () {
      this.id++;
      var dataYear = this.dataYear;
      var rand = Math.floor(Math.random() * dataYear.length);
      var ramdomYear = dataYear[rand];
      this.random = ramdomYear;
      if (this.nameUser === "") {
        alert('Escriba su nombre para empezar')
      } else {
        this.main = 1;
       console.log(this.random); 
      }
    },
    guess: function () {
      if (this.year==="") {
        alert('Digite el año a adivinar')
      } else if (this.year.length<4 || this.year.length >=5) {
        alert('Escriba solo 4 digitos')
      }
      else if (this.year===this.random) {
        this.punctuation = this.punctuation / 7;
        console.log(this.punctuation);
         this.punctuation = this.punctuation * this.attempts;
         var punctuation = this.punctuation;
         console.log(punctuation);
         punctuation = Math.round(this.punctuation);
         console.log(punctuation);
         this.dataUser.push({
           id: this.id,
           nameUser: this.nameUser,
           punctuation: punctuation,
         });
        return (this.main = 2), (this.finish = "Has ganado");
      } else {
        this.attempts--
        this.watchUser = 1;
        const random= parseInt(this.random)
        this.difference = this.year - random
        console.log('diferencia'+ this.difference);
        if (this.attempts === 0) {
          this.punctuation =this.punctuation/ 7;
          this.punctuation = this.punctuation * this.attempts;
          var punctuation = this.punctuation;
          console.log(punctuation);
          punctuation = Math.round(this.punctuation);
          console.log(punctuation);
          this.dataUser.push({
            id: this.id,
            nameUser: this.nameUser,
            punctuation: punctuation,
          });
          console.log(this.attempts);
          return this.main = 2, this.finish = "Game over";
          
        } else {
          if (this.difference >= 10) {
            return (this.clue =
              "Estas frio diferencia mayor o igual a 10 años del número a adivinar");
          } else if (this.difference < 10 && this.difference >= 5) {
            return (this.clue =
              "Estas tibio diferencia mayor o igual a 5 años del número a adivinar ");
          } else if (this.difference < 5 && this.difference >= 1) {
            return (this.clue =
              "Estas tibio diferencia mayor o igual a 2 años del número a adivinar ");
          } else if (this.difference <=-10) {
            return (this.clue =
              "Estas frio diferencia menor o igual a 10 años del número a adivinar");
          } else if (this.difference > -10 && this.difference <= -5) {
            return (this.clue =
              "Estas tibio diferencia menor o igual a 5 años del número a adivinar ");
          } else if (this.difference > -5 && this.difference <= -1) {
            return (this.clue =
              "Estas tibio diferencia menor o igual a 2 años del número a adivinar ");
          }
        }
      }
    },
    backHome: function () {
      this.main = 0;
      this.nameUser = "";
      this.year = "";
      this.attempts = 7;
      this.punctuation = 100;
      this.watchUser = 0;
    }
  },
});