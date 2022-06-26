var app = new Vue({
  el: "#app",
  data() {
    return {
      dataYear: ["1975", "1955", "1978", "1927"],
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
      actor: '',
      personaje:'',
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
      }else {
        this.attempts--
        this.watchUser = 1; 
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
          if (this.attempts === 6) {
            this.clue = `El numero inicial de la fecha es: ${this.random[0]}`;
            if (this.random == "1975")
              return (
                (this.actor = "Tobey Maguire"),
                (this.personaje = "Piter Parker")
              );
            if (this.random == "1955")
              return (
                (this.actor = "Willem Dafoe"),
                (this.personaje = "Norman Osborn")
              );
            if (this.random == "1978")
              return (
                (this.actor = "James Franco"), (this.personaje = "Harry Osborn")
              );
            if (this.random == "1927")
              return (
                (this.actor = "Rosemary Harris"), (this.personaje = "Tia May")
              );
          } else if (this.attempts == 5) {
            this.clue = `El numero Final de la fecha es ${
              this.random[this.random.length - 1]
            }`;
          } else if (this.attempts == 4) {
            this.clue = `El/Ella interpreto a : ${this.personaje}`;
          } else if (this.attempts == 3) {
            this.clue = `El actor a Adivinar es ${this.actor}`;
          } else if (this.attempts == 2) {
            this.clue = `El Segundo numero de la fecha es ${this.random[this.random.length - 3]
            }`;
          } else {
            this.clue = `El tercer numero de la fecha es ${
              this.random[this.random.length - 2]
            }`;
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