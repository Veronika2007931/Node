import {nanoid} from 'nanoid' 
 
import { alert, defaultModules } from '@pnotify/core'; 
import '@pnotify/core/dist/PNotify.css'; 
import * as PNotifyMobile from '@pnotify/mobile'; 
import '@pnotify/mobile/dist/PNotifyMobile.css'; 
import '@pnotify/core/dist/BrightTheme.css'; 
 
// nanoid 
const id = nanoid() 
const id2 = nanoid() 
console.log(id) 
console.log(id2) 
 
 
//  pnotify 
defaultModules.set(PNotifyMobile, {}); 
  
alert({ 
  text: 'Notice me, senpai!' 
}); 
 
 
 
const button = document.querySelector('button') 
const input = document.querySelector('input') 
button.addEventListener('click', ()=>{ 
  if(input.value){ 
  success({ 
    text: "i`m a success message" 
  }) 
}else{ 
  error ({ 
    text: "I`m an error message" 
  }) 
} 
   
})