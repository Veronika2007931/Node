// import Chart from 'chart.js/auto'; 
// import Chart from 'chart.js' 
import { error } from '@pnotify/core'; 
import '@pnotify/core/dist/BrightTheme.css'; 
 
 
const div = document.querySelector('.mainDiv') 
 
const heading = document.createElement("h1"); 
heading.textContent = 'Game started' 
div.append(heading) 
 
const keys = ['a','f','b','s','m','j','t','c','o','q'] 
 
// const scores = document.createElement("h4"); 
// scores.textContent = 0 
// div.append(scores) 
 
const text = document.getElementById('key') 
 
let currentKeyIndex = Math.floor(Math.random() * keys.length) 
 
text.textContent = keys[currentKeyIndex] 
// console.log('hello') 

window.addEventListener("keydown", (event)=>{
    console.log('hello')
}) 
 
function onKeyDown(event){ 
    console.log(event.key)
    if (event.key === keys[currentKeyIndex]) { 
        currentKeyIndex += 1 
        text.textContent = keys[currentKeyIndex] 
    } else{ 
        error({ 
            text: "ви натиснули невірну клавішу" 
        }); 
    } 
} 
 
 
 
// const canvas = document.getElementById('myChart'); 
 

 
// const chartData = { 
//   labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'], 
//   datasets: [{ 
//   label: 'Продажі за останній місяць', 
//   data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350], 
//   backgroundColor: '#2196f3', 
//   borderColor: '#2196f3', 
//   borderWidth: 1 
//   }] 
//   }; 
//   const salesChart = new Chart(canvas, config); 
 
 
// const config = { 
// type: 'line', 
// data: chartData, 
 
// };