var accentContainer = $('.accent-container')[0];
var containerHeight = $(accentContainer).height();
console.log(containerHeight);
var accents = $(".accent");
var accentHeight = 32;
var numLanes = Math.floor(containerHeight / accentHeight);
var maxDelay = 2;
var msPerSec = 1000;

var colors = [ 'bg1', 'bg2', 'bg3', 'bg4', 'bg5' ];
var widths = [ 'w1', 'w2', 'w3', 'w4', 'w5' ];
var transitPaths = [ 'transit-1', 'transit-2', 'transit-3', 'transit-4' ];

// List of accent widths with multiple elents to weight longer widths more
var randomElement = function(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var laneSize = Math.floor(containerHeight / numLanes);
for (var ind = 0; ind < numLanes; ind++) {
    // Some hacky function bullshit because JS, which uses anonymous functions
    // everywhere, doesn't understand scope
    (function(i) {
        var newAccent = $(document.createElement('div'));
        newAccent.addClass('accent');
        newAccent.addClass(randomElement(colors));
        newAccent.addClass(randomElement(widths));
        newAccent.addClass(randomElement(transitPaths));

        // For now, equally space the accents, and only include one in each
        // lane
        var offset = '' + laneSize * i + 'px';
        newAccent.css({ 'top': offset });

        var temp = Math.floor(Math.random() * 8);
        var duration = '' + (4 + temp * temp) + 's';
        newAccent.css({ 'animation-duration': duration });

        // Offset the start times of each accent by a bit
        var tmpDelay = Math.random() * maxDelay;
        var delay = Math.floor(tmpDelay * tmpDelay * msPerSec);
        console.log(delay);
        setTimeout(function() {
            newAccent.appendTo(accentContainer);
        }, delay);
    })(ind);
}

