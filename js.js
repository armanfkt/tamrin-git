function showTime() {
    document.getElementById('demo').innerHTML = 'hello'

    var obj = {
        name: 'Arman',
        age: 24
    }

    document.getElementById('demo').style.color = 'blue'

    console.log();
}

function logValue() {
    var test = document.getElementById('input').value

    console.log(test);
}

function printNumbers() {
    // let i = 0

    // const a = 10

    // // while (i <= 10) {
    // //     console.log(i);

    // //     i = i + 1
    // // }

    // for(var count =0; count>-100; count--){
    //     console.log(count);

    // }

    const array = [
        "Arman",
        "Hamidreza",
        "gholam",
        "mammad",
    ]

    const sortedArray =  array.sort()
    console.log(sortedArray);

    array.splice(2, 1)
    console.log(array);

    const testFunc = (name, age) => {
        if (name === array[0] && age > 18) {
            alert(name, age);
        } else {
            alert('nam eshtebah ast!')
        }
    }

    // testFunc("Arman", 10)

    array.map((item) => {
        console.log(item);
    })

    const firstName = array.find(item => {
        return item === "Arman"
    })



    console.log(firstName);
}


const showSeason = () => {
    const season = document.getElementById('season').value

    // if(season === "Spring"){
    //     console.log(season);
    // }else if(season === "Summer"){
    //     console.log("hava garme!");
    // }else if(season === "Fall"){
    //     console.log("BARAN!");
    // }else if(season === "Winter"){
    //     console.log("booooo sarde!");
    // }else{
    //     console.log("Not a season!");
    // }

    switch (season) {
        case "Spring":
            console.log(season);
            break;
        case "Summer":
            console.log("hava garme!");
            break;
        case "Fall":
            console.log("BARAN!");
            break;
        case "Winter":
            console.log("booooo sarde!");
            break;
        default:
            console.log("Not a season!");

    }

}

const str = "Test"



console.log(str.startsWith('T'));

const idValidation = () => {
    const id = document.getElementById('codeMelli').value

    if(id.length<=10){
        console.log('accepted');
    }
    else{
        console.log('oskol');
    }
}

const x=1.235645654645

console.log((Math.random()*10).toFixed(0));