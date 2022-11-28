// -------- Construction Function --------------// 
//function Person (full_name, money, sleep_mood, health_Rate)
// {
// this.full_name= full_name
// this.money=money 
// this.sleep_mood = sleep_mood
// this.health_Rate = health_Rate
// }
// Person.prototype.sleep= function(hours)  
// {
// if (hours ==7 ){
//     this.sleep_mood="happy";
//     return this.sleep
// }
// else if (hours <7){
//     this.sleep_mood ="Tired Person";
//     return this.sleep_mood
// }else 
// {
//    this.sleep_mood="Lazy person";
//    return this.sleep
// }
//  }

// Person.prototype.Eat= function (meals) {
// switch (meals){
//     case 3:
//       this.health_Rate =("100% health rate ");
//       return this.health_Rate 

//     case 2 :
//        this.health_Rate=("75% health rate");
//        return this.health_Rate 
//     case 1 :
//         this.health_Rate=("50% health rate");
//         return this.health_Rate
// }
// }

// Person.prototype.buy = function(items) {

// for (items==1 ; items >1 ; items ++)
// {
// this.money=("Decreases money by " + items*10 + " LE for byuing "+ items + " items");
// return this.money
// }
// }

// let Zienab = new Person ('Zienab',30,'tired',2);
// console.log(Zienab);
// console.log(Zienab.Eat(2));
// console.log(Zienab.buy(5));
// console.log(Zienab.sleep(12));






//-------------Class -----------------//
// class Person {
//     constructor(full_name, money, sleep_mood, health_Rate)
//     {
//         this.full_name= full_name
//         this.money=money 
//         this.sleep_mood = sleep_mood
//         this.health_Rate = health_Rate
//     }
// }
// Person.prototype.sleep= function(hours)  
// {
// if (hours ==7 ){
//     this.sleep_mood="happy";
//     return this.sleep
// }
// else if (hours <7){
//     this.sleep_mood ="Tired Person";
//     return this.sleep_mood
// }else 
// {
//    this.sleep_mood="Lazy person";
//    return this.sleep
// }
//  }

// Person.prototype.Eat= function (meals) {
// switch (meals){
//     case 3:
//       this.health_Rate =("100% health rate ");
//       return this.health_Rate 

//     case 2 :
//        this.health_Rate=("75% health rate");
//        return this.health_Rate 
//     case 1 :
//         this.health_Rate=("50% health rate");
//         return this.health_Rate
// }
// }

// Person.prototype.buy = function(items) {

// for (items==1 ; items >1 ; items ++)
// {
// this.money=("Decreases money by " + items*10 + " LE for byuing "+ items + " items");
// return this.money
// }
// }

// let Zienab = new Person ('Zienab',30,'tired',2);
// console.log(Zienab);
// console.log(Zienab.Eat(1));
// console.log(Zienab.buy(8));
// console.log(Zienab.sleep(7));





//--------------- (OLOO)-----------------//
// var Person = {
//     init (full_name, money, sleep_mood, health_Rate )
//     {
//         this.full_name= full_name
//         this.money=money 
//         this.sleep_mood = sleep_mood
//         this.health_Rate = health_Rate

//         return this ;
//     },

// sleep (hours)
// {
// if (hours ==7 ){
//         this.sleep_mood="happy";
//         return this.sleep_mood
//     }
//     else if (hours <7){
//         this.sleep_mood ="Tired Person";
//         return this.sleep_mood
//     }else 
//     {
//        this.sleep_mood="Lazy person";
//        return this.sleep_mood
//     }
// },
    
//     Eat (meals)
//      {
//     switch (meals){
//         case 3:
//           this.health_Rate =("100% health rate ");
//           return this.health_Rate 
    
//         case 2 :
//            this.health_Rate=("75% health rate");
//            return this.health_Rate 
//         case 1 :
//             this.health_Rate=("50% health rate");
//             return this.health_Rate
//     }
//     },
    
//    buy (items)
//     {
    
//     for (items==1 ; items >1 ; items ++)
//     {
//     this.money=("Decreases money by " + items*10 + " LE for byuing "+ items + " items");
//     return this.money
//     }
//     }
// }
// var Zienab = Object.create(Person).init("Zienab" , 10 , "Tired", 75);
// console.log("Zienab");
// console.log(Zienab.full_name);
// console.log(Zienab.sleep(3));
// console.log(Zienab.Eat(1));








//-----------------Factory functions------------------//
function Person (full_name, money, sleep_mood, health_Rate){
return{
    full_name,
    money,
    sleep_mood,
    health_Rate,

        
    
    sleep (hours)
    {
    if (hours ==7 ){
            this.sleep_mood="happy";
            return this.sleep_mood
        }
        else if (hours <7){
            this.sleep_mood ="Tired Person";
            return this.sleep_mood
        }else 
        {
           this.sleep_mood="Lazy person";
           return this.sleep_mood
        }
    },
        
        Eat (meals)
         {
        switch (meals){
            case 3:
              this.health_Rate =("100% health rate ");
              return this.health_Rate 
        
            case 2 :
               this.health_Rate=("75% health rate");
               return this.health_Rate 
            case 1 :
                this.health_Rate=("50% health rate");
                return this.health_Rate
        }
        },
        
       buy (items)
        {
        
        for (items==1 ; items >1 ; items ++)
        {
        this.money=("Decreases money by " + items*10 + " LE for byuing "+ items + " items");
        return this.money
        }
        }
    }
}
    var Zienab = Person ("Zienab" , 10 , "Tired", 75);
    console.log("Zienab");
    console.log(Zienab.full_name);
    console.log(Zienab.sleep(3));
    console.log(Zienab.Eat(1));