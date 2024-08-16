// cards.js
import brexitImage from '../assets/imgs/powers/brexit.png';
import stackCoinsImage from '../assets/imgs/powers/stack-coins.png';
import crabCrackImage from '../assets/imgs/bait/bait-crab-crack.png'; 
import diceImage from '../assets/imgs/bait/dice-bait.png'
import randoCrabImage from  '../assets/imgs/powers/rando-crab.png';

// react version of services, dependency injection

const allPowers = [
    {
        rarity: 1,
        title: 'Greenfingers',
        img: brexitImage,
        description: 'Increase coins recieved from trash by 1',
        effect: function (setPowerAttributes) {
            setPowerAttributes(prevPowers => ({
              ...prevPowers,
              trashBonus: prevPowers.trashBonus += 1
          }));
      },
        

    },

    {
        rarity: 1,
        title: 'Cash Dollar Yo',
        img: stackCoinsImage,
        description: 'Start the round with 3 extra coins',
        effect: function (setPowerAttributes) {
            setPowerAttributes(prevPowers => ({
              ...prevPowers,
              startingCoins: prevPowers.startingCoins += 3
          }));
      },
        

    },

    {
        rarity: 1,
        title: 'Cash Money Yo',
        img: stackCoinsImage,
        description: 'Start the round with 4 extra coins',
        effect: function (setPowerAttributes) {
            setPowerAttributes(prevPowers => ({
              ...prevPowers,
              startingCoins: prevPowers.startingCoins += 4
          }));
      },
        

    },

    {
        rarity: 1,
        title: 'Feel the Power',
        img: stackCoinsImage,
        description: 'Have an additional power to choose from at the end of the day',
        effect: function (setPowerAttributes) {
            setPowerAttributes(prevPowers => ({
              ...prevPowers,
              numOfPowers: prevPowers.numOfPowers += 1
          }));
      },
        

    },

    {
        rarity: 1,
        title: 'Crab de Week',
        img: stackCoinsImage,
        description: 'Increase the Crab de Jour bonus multiplier by 1',
        effect: function (setPowerAttributes) {
            setPowerAttributes(prevPowers => ({
              ...prevPowers,
              cdjBonus: prevPowers.cdjBonus += 1
          }));
      },
        

    },

    {
        rarity: 1,
        title: 'Loaded Dice',
        img: diceImage,
        description: 'Increase your maxiumum roll by 1',
        effect: function (setPowerAttributes) {
            setPowerAttributes(prevPowers => ({
              ...prevPowers,
              dice: prevPowers.dice += 1
          }));
      },
        

    },

    {
        rarity: 1,
        title: 'Squatters Rights',
        img: randoCrabImage,
        description: 'Start the day with a random crab in the tank',
        effect: function (setPowerAttributes) {
            const crab = 1 + Math.floor(Math.random() * 12);
            setPowerAttributes(prevPowers => ({
              ...prevPowers,
              crabs: prevPowers.crabs.push(crab)
          }));
      },
        

    },

]


export {allPowers}