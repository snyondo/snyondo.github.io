"use strict"
/*
    Author: Brian Nyathi
    last Modified: 29 September 2024
    File Name: script.js
*/ 




/* Making hamburger icon for mobile viewports functional*/
let hamIcon = document.getElementById("menu-icon");
let navLinks = document.getElementById("nav-links");

hamIcon.onclick = function() {
    if (navLinks.style.display ==="block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
        
    }
};


/* Multidimensional list containing eac content in the order of Title, Description, Url, Id */
let southAfrica = [
    [// 1
        "See if you Need Your Data Protected!",
        "Enter your information now to get started.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=63432",
        "offer1"
    ],

    [// 2
        "Become A Millionaire!",
        "Enter your information now for a chance to win.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=54748",
        "offer2"
    ],

    [// 3
        "Get Rewarded for Taking the Finance Survey!",
        "Enter your mobile number now for a chance to win.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=41029",
        "offer3"
    ],

    [// 4
        "Get the Latest Content Now!",
        "Enter your information now to get started.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=42174",
        "offer4"
    ],
    [// 5
        "Enter for a Samsung A53!",
        "Enter your information now for a chance to win.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=56780",
        "offer5"
    ],
    [// 6
        "Get the Brand New Xbox Series X!",
        "Enter your mobile number now to get started.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=35305",
        "offer6"
    ],
    [// 7
        "Download the best Football Content!",
        "Enter your mobile number now to start downloading.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=66342",
        "offer7"
    ],
    [// 8
        "Play the Latest Games Now!",
        "Enter your information now to get started.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=41948",
        "offer8",
    ],
    [//9
        "Get the Latest Content Now!",
        "Enter your information now to get started.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=42174",
        "offer9"
    ],
    [// 10
        "Download Your Content!",
        "Enter your mobile number now to start downloading.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=60353",
        "offer10"
    ],
    [// 11
        "Get Your iPhone 15 Pro Now!",
        "Enter your credit card information to get started.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=64332",
        "offer11"    
    ],
    [// 12
        "Enter for Your PlayStation 5!",
        "Enter your information now for a chance to win.",
        "https://singingfiles.com/show.php?l=0&u=1895561&id=63317",
        "offer12"
    ]

];

/* Get the class elements which information is to be added too */
let title = document.getElementsByClassName("title");
let contImg = document.getElementsByClassName("contImg");
let contUrl = document.getElementsByClassName("contUrl");
let description = document.getElementsByClassName("description");

/* Adding content from the country list */
    for (let i = 0; i < title.length; i++) {
        title[i].textContent = southAfrica[i][0];
        contImg[i].setAttribute("src", "images/south_africa/" + southAfrica[i][3] + ".png");
        contUrl[i].setAttribute("href", southAfrica[i][2]);
        description[i].textContent = southAfrica[i][1];

}

