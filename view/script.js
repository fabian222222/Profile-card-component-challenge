let imageEmplacement = document.querySelector('.profile_card_card_picture > img');

let nameEmplacement = document.querySelector('.profile_card_card_information_text_name');
let ageEmplacement = document.querySelector('.profile_card_card_information_text_age');

let placeEmplacement = document.querySelector('.profile_card_card_information_state');

let followerEmplacement = document.querySelector('.profile_card_card_information_stat.follower');
let likeEmplacement = document.querySelector('.profile_card_card_information_stat.likes');
let photoEmplacement = document.querySelector('.profile_card_card_information_stat.photos');

fetch("https://randomuser.me/api/").then((user) => {

    user.json().then((userInfo) => {

        userInfos = userInfo.results[0];

        userImage = userInfos.picture.large;
        userName = `${userInfos.name.last} ${userInfos.name.first}`;
        userAge = userInfos.dob.age;
        userLocation = userInfos.location.city;

        imageEmplacement.src = userImage;
        nameEmplacement.innerHTML = userName;
        ageEmplacement.innerHTML = userAge;
        placeEmplacement.innerHTML = userLocation;

    });
});

function randomNumber() {
    return Math.floor(Math.random() * 1000);
};

let followers = randomNumber();
let Likes = randomNumber();
let Photos = randomNumber();

followerEmplacement.innerHTML = followers;
likeEmplacement.innerHTML = Likes;
photoEmplacement.innerHTML = Photos;