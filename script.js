const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const mothlyBtn = document.querySelector('#monthly');

const hours = document.querySelectorAll('.hours');
const lastTime = document.querySelectorAll('.last-time');



function daily() {
 fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        hours.forEach((e, i) => {
            hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
            lastTime[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
        });
        document.getElementById('daily').style.color ='hsl(236, 100%, 87%)';
        document.getElementById('weekly').style.color = 'hsl(235, 45%, 61%)';
        document.getElementById('monthly').style.color = 'hsl(235, 45%, 61%)';
    });
   
}

function weekly(){
 fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        hours.forEach((e, i) => {
            hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
            lastTime[i].innerHTML = 'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs';
        });
        document.getElementById('daily').style.color = 'hsl(235, 45%, 61%)';
        document.getElementById('weekly').style.color = 'hsl(236, 100%, 87%)';
        document.getElementById('monthly').style.color = 'hsl(235, 45%, 61%)';
    });   
}

function monthly(){
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            hours.forEach((e, i) => {
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
                lastTime[i].innerHTML = 'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs';
            });
            document.getElementById('daily').style.color = 'hsl(235, 45%, 61%)';
            document.getElementById('weekly').style.color = 'hsl(235, 45%, 61%)';
            document.getElementById('monthly').style.color = 'hsl(236, 100%, 87%)';
        });
}

