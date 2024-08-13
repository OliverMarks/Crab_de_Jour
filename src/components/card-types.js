// cards.js
import wormImage from '../assets/imgs/bait/bait-worm.png';
import fishImage from '../assets/imgs/bait/bait-fish.png';
import crabCrackImage from '../assets/imgs/bait/bait-crab-crack.png'; 
import baitBoosterImage from '../assets/imgs/bait/bait-booster.png';
import secretSauceImage from '../assets/imgs/bait/secret-sauce.png'
import oneOfUsImage from '../assets/imgs/bait/one-of-us.png'

// react version of services, dependency injection

const allCards = [
    {
        type: 'Bait',
        id: 1,
        title: 'Worm',
        img: wormImage,
        description: '+1 to your catch roll this round',
        cost: 1,
        effect: function (setPlayers) {
          setPlayers(prevPlayers => ({
              ...prevPlayers,
              currentModifier: prevPlayers.currentModifier + 1
          }));
      },
        

    },
    {
        type: 'Bait',
        id: 2,
        title: 'Fish',
        img: fishImage,
        description: '+2 to your catch roll this round',
        cost: 2,
        effect: function (setPlayers) {
          setPlayers(prevPlayers => ({
              ...prevPlayers,
              currentModifier: prevPlayers.currentModifier + 2
          }));
         
      },

    },
    {
        type: 'Bait',
        id: 3,
        title: 'Crab Crack',
        img: crabCrackImage,
        description: '+3 to your catch roll this round',
        cost: 3,
        effect: function (setPlayers) {
          setPlayers(prevPlayers => ({
              ...prevPlayers,
              currentModifier: prevPlayers.currentModifier + 3
          }));
         
      },

    }, 

    {
      type: 'Bait',
      id: 4,
      title: 'Bait Booster',
      img: baitBoosterImage,
      description: 'x2 to your modifiers this round',
      cost: 5,
      effect: function (setPlayers) {
        setPlayers(prevPlayers => ({
            ...prevPlayers,
            currentModifier: prevPlayers.currentModifier * 2
        }));
       
    },

  }, 

  {
    type: 'Bait',
    id: 5,
    title: 'Secret Sauce',
    img: secretSauceImage,
    description: 'x3 to your modifiers this round',
    cost: 7,
    effect: function (setPlayers) {
      setPlayers(prevPlayers => ({
          ...prevPlayers,
          currentModifier: prevPlayers.currentModifier * 3
      }));
     
  },
},

{
  type: 'Bait',
  id: 6,
  title: 'Secret Sauce',
  img: secretSauceImage,
  description: 'x3 to your modifiers this round',
  cost: 7,
  effect: function (setPlayers) {
    setPlayers(prevPlayers => ({
        ...prevPlayers,
        currentModifier: prevPlayers.currentModifier * 3
    }));
   
},
},

{
  type: 'Bait',
  id: 7,
  title: 'One of Us',
  img: oneOfUsImage,
  description: ' add the number of crabs in your tank to your modifiers this round',
  cost: 2,
  effect: function (setPlayers) {
    setPlayers(prevPlayers => ({
        ...prevPlayers,
        currentModifier: prevPlayers.currentModifier + prevPlayers.crabs.length
    }));
   
},
}



  //   { type : 'Action',
  //     title: 'Tidal Surge',
  //     img: wormImage,
  //     description:'ignore tide modifiers for your catches this turn',
  //     cost:2,
  //     effect: function () {
  //       console.log("test")

  //   },
  //   location: 'shop'
  //   },
  //   { type : 'Action',
  //     title: 'Mooncrooner',
  //     img: wormImage,
  //     description:'reverse the tidal modifier for your own catches this turn',
  //     cost:2,
  //     effect: function () {
  //       console.log("test")
  //   },

  //   },
  //   { type : 'Action',
  //     title: 'Sussy Looking Crab',
  //     img: wormImage,
  //     description:'At the end of the game this counts as one crab',
  //     cost:2,
  //     effect: function () {
  //       console.log("test")
  //   },

  //   },




  // { type : 'Companion',
  //   title: 'Exactatron-3000',
  //   img: wormImage,
  //   description:'Each time you roll exactly what is needed (after modifiers) gain an additional crab',
  //   cost:2,
  //   effect: function () {
  //       console.log("test")
  //   },
  // },
  // { type : 'Companion',
  //   title: 'Lucky Pete',
  //   img: wormImage,
  //   description:'You may re-roll one of your catch rolls per round',
  //   cost:2,
  //   effect: function () {
  //       console.log("test")
  //   },

  // },
  // { type : 'Companion',
  //   title: 'The Crab Charmer',
  //   img: wormImage,
  //   description:'If you roll a double during a catch attempt, gain an additional crab or trash',
  //   cost:2,
  //   effect: function () {
  //       console.log("test")
  //   },

  // }
]

export { allCards };




