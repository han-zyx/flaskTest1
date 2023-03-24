function randomTopStories() {
    var urls = ["News_Pages/Five migrants die when boat sinks.html",
        "News_Pages/Ferrari reveal their 'Valentine as new car launched for 2023 Formula 1 championship challenge.html",
        "News_Pages/FBI Russia probe helped by Australian diplomat tip.html",
        "News_Pages/Earthquake fans anti-Syrian sentiment in Turkey amid desperate conditions.html",
        "News_Pages/Court orders Trump administration to give immigrant teens abortion access.html",
        "News_Pages/China Xi calls for early resolution of Iran nuclear issue.html.html",
        "News_Pages/Ben Duckett will take every chance for England, while New Zealand overlook Trent Boult.html",
        "News_Pages/As U.S. budget fight looms, Republicans flip their fiscal script.html",
        "News_Pages/Air India seals record order for almost 500 Airbus Boeing jets.html",
    ];

    var randomIndex = Math.floor(Math.random() * urls.length);
    var randomUrl = urls[randomIndex];
    window.location = randomUrl;
}
