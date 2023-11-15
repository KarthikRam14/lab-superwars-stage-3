const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {

    // Instead of forloop use Map method
    // Code here
    const detailedPlayers= PLAYERS.map((player, index) => ({
        name:player,
        image:`images/super-${index+1}.png`,
        strength:getRandomStrength(),
        type: index % 2 === 0 ? "hero":"villain",
    }))
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.floor(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    const fragment = players.filter(player => player.type === type).map(player => `<div class="player"> 
            <img src="${player.image}">
            <p>${player.name}</p>
            <h1>${player.strength}</h1>
            </div>`).join('');//this para filters and creates a new array for elements which satisfy the condition
    return fragment;//then the formed array is mapped and a new array is created which mathes with the html and is joined by a space.
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}