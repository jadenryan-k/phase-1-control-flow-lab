function scuberGreetingForFeet(someValue){
  // Write your code here!
    let ride 
    if(someValue <= 400){
      ride = someValue
      return 'This one is on me!'
    }
    else if(someValue <= 2500){
      ride = someValue
      return 'I will gladly take your thirty bucks.'
    }
    else {
      return 'No can do.'
    }    
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
    
}
function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous' :
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'

      default:
      return 'Bye.'
  }
}