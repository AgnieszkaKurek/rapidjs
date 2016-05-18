  var arena = [];
  
  function Gladiator (name, attack, defense, hitPoints) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hitPoints = hitPoints;
      this.Weapon = "sword";
     
  }
  
  Gladiator.prototype.roll = function(howMany, whatType) {
      var total = 0;
      for(var i = 0;i<howMany; i++) {
          var result = Math.round(Math.random() * whatType);
          total = total + result;
      }
      return total;
  };
 

  Gladiator.prototype.attackTarget = function(theTargetWereAttacking) {
      var attackRoll = this.roll(1, 20);
      attackRoll = attackRoll + this.attack;
      if (attackRoll >= theTargetWereAttacing.defense)
      {
          return true;
      }
      else
      {
          return false;
      }
  };
  Gladiator.prototype.applyDamage = function(theThingWeHit) {
     
      var roll = this.roll(this.weapon.howManyDie, this.weapon.typeOfDie);
      roll = roll + this.attack;
     theThingWeHit.hitPoints = theThingWeHit.hitPoints - roll;
      return roll;
  };
  
   Gladiator.prototype.getRandomTargetInArena = function(arena) {
      var myIndex = arena.indexOf(this);
      var targetArray = arena, concat;
      targetArray.splice(myIndex, 1);
      var randomIndex = Math.floor(Math.random() * targetArray.lenght);
      return targetArray[randomIndex];
     
  };
  function Weapon(howManyDie, typeOfDie)
  {
      this.howManyDie = howManyDie;
      this.typeOfDie = typeOfDie;
  }
  
  function Human(name, attack, defense, hitPoints) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hitPoints = hitPoints;
      this.weapon =new Weapon(1, 1);
  };
  Human.prototype = new Gladiator();
  Human.prototype.constructor = Human;
  
  Human.prototype.getRandomTargetInArena = function(arena) {
      var myIndex = arena.indexOf(this);
      var targetArray = arena, concat;
      targetArray.splice(myIndex, 1);
      var sortByHighesHitPoins = function(a, b)
     {
         if (a.hitPoints > b.hitPoints)
         {
             return -1;
         }
         else if (a.hitPoints < b.hitPoints)
         {
             return 1;
         }
        else
        {
            return 0;
        }
     };
     targetArray.sort(sortByHigestHitPoins);
     console.debug("targetArray");
     console.debug(targetArray);
     return targetArray[0];
    
  };
  
  

    
 function Animal (name, attack, defense, hitPoints) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hitPoints = hitPoints;
      this.weapon = new Weapon(1, 2);
 }
 Animal.prototype = new Gladiator();
 Animal.prototype.constructor = Animal;
 Animal.prototype.getRandomTargetInArena = function(arena) {
      var myIndex = arena.indexOf(this);
      var targetArray = arena, concat;
      targetArray.splice(myIndex, 1);
      var sortByLowestHitPoins = function(a, b)
     {
         if (a.hitPoints > b.hitPoints)
         {
             return 1;
         }
         else if (a.hitPoints < b.hitPoints)
         {
             return -1;
         }
        else
        {
            return 0;
        }
     };
     targetArray.sort(sortByLowestHitPoins);
     return targetArray[0];
      //var randomIndex = Math.floor(Math.random() * targetArray.lenght);
     // return targetArray[randomIndex];
     
  };
  
 
  var jesse = new Human ("Jesse", 10, 12, 10);
  var john =  new Human ("John", 12, 10, 12);
  var karl = new Animal ("Karl", 14, 10, 14);
  karl.weapon = new Weapon(2, 6);
  
  arena.push(jesse, john, karl);
  
  
  
  
//Tiger.prototype.getRandomTargetInArena = function(arena) {
     //var myIndex = arena.indexOf(this);
    // var targetArray = arena.concat();
     //targetArray.splice(myIndex, 1);
     // var randomIndex = Math.floor(Math.random() * targetArray.lenght);
     // return targetArray(randomIndex);
     //var sortByLowestHitPoins = function(a, b)
    // {
         //if (a.hitPoints > b.hitPoints)
        // {
         //    return 1;
        //}
         //else if (a.hitPoints < b.hitPoints)
         //{
            // return -1;
         //}
        //else
       //{
         //   return 0;
        //}
     //};
    // targetArray.sort(sortByLowestHitPoins);
    // return targetArray[0];
 //};
 