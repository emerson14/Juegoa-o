var app = new Vue({
  el: "#app",
  data() {
    return {
      dataYear: ["1999", "1995", "1998", "1997"],
      dataUser: [
        { id: 1,nameUser: "", punctuation: 0, },
        {id: 2,nameUser: "", punctuation: 0,},
      ],
      fecha1: '',
      fecha2:'',
      punctuation:100,
      attempts: 7,
      year: "",
      random: "",
      finish: "",
      clue: "",
      
      main: 0,
      watchUser: 0,
      id: 0,
      nameUser: "",
    
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
        alert('Escriba su nombre')
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
        return (this.main = 2), (this.finish = "Me has podido ganar ganado");
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
          return this.main = 2, this.finish = "No me has podido ganar! Vuelve a Intentarlo";
          
        } else {
          if (this.attempts === 6) {
            this.clue = `El numero inicial de la fecha es: ${this.random[0]}`;
            if (this.random == "1999")
              return (
                (this.fecha1 = "1997 "),
                (this.fecha2 = "1996")
              );
            if (this.random == "1995")
              return (
                (this.fecha1 = "1985"),
                (this.fecha2 = "1980")
              );
            if (this.random == "1998")
              return (
                (this.fecha1 = "1997"), (this.fecha2 = "1996")
              );
            if (this.random == "1997")
              return (
                (this.fecha1 = "1980"), (this.fecha2 = "1985")
              );
          } else if (this.attempts == 5) {
            this.clue = `El numero Final de la fecha es ${
              this.random[this.random.length - 1]
            }`;
          } else if (this.attempts == 4) {
            this.clue = `el numero es mayor : ${this.fecha2}`;
          } else if (this.attempts == 3) {
            this.clue = `el numero es mayor que ${this.fecha1}`;
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