function ageInDays() {
    let birthYear = prompt("What year were you born... Good friend?");
    let result = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + result + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}
