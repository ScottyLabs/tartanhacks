// spawn-accents.js
//
// Creates accent animations for the TartanHacks 2017 landing page. "Accents"
// refer to the rectangular colored blocks used for TartanHacks 2017 branding.
// Once spawned, accents will scroll across the screen in a continuous loop.
// The appearance of
//
// Accent colors and concept by Noah Johnson, implementation by Scott Krulcik.
// (c) 2017 ScottyLabs

// Accent Container - Parent object to hold all accents
var ACCENT_CONTAINER = $('div#accent-container');
console.assert(ACCENT_CONTAINER,
    "Accent container cannot be found. Cannot spawn accents.");
var CONTAINER_HEIGHT = $(ACCENT_CONTAINER).height();
var CONTAINER_WIDTH = $(ACCENT_CONTAINER).width();

// Animation Options
// Minimum rate of 30 px/s, maximum of 180 px/s
var MIN_DURATION = CONTAINER_WIDTH / 180;
var MAX_DURATION = CONTAINER_WIDTH / 30;
var MAX_DELAY = Math.floor((MAX_DURATION - MIN_DURATION) / 3);

// Accent Styling (see accent.css)
var ACCENT_HEIGHT = 32;
var NUM_ACCENT_COLORS = 5;
var NUM_ACCENT_WIDTHS = 3;

// Generate a random integer in the range [start, end)
var randInt = function(start, end) {
    console.assert(start < end, "Invalid range");
    return start + Math.floor(Math.random() * (end - start));
};

// Generate a random floating point value in the range [start, end)
var randDecimal = function(start, end) {
    console.assert(start < end, "Invalid range");
    return start + Math.random() * (end - start);
}

// Improves readability for code that creates CSS properties
var createProperty = function(value, units) {
    return '' + value + units;
};

// Generate animation parameters
var generateDuration = function() {
    return createProperty(randDecimal(MIN_DURATION, MAX_DURATION), 's');
};
var generateDelay = function() {
    return createProperty(randDecimal(0, MAX_DELAY), 's');
};

// Creates new accent objects with randomized properties (color, size and
// animation properties)
var generateAccent = function() {
    var accent = $(document.createElement('div'));

    accent.addClass('accent transit');
    accent.addClass('w' + randInt(0, NUM_ACCENT_WIDTHS));
    accent.addClass('bg' + randInt(0, NUM_ACCENT_COLORS));

    // Randomize both the start times and durations of animations to create
    // a chaotic staggered affect
    accent.css({ 'animation-duration': generateDuration() });
    accent.css({ 'animation-delay': generateDelay() });

    return accent;
};

// Fills the screen with n evenly spaced accents, starting from the base offset
var fillAccentContainer = function(n, laneHeight) {
    console.assert(n > 0, '"n" must be a positive integer');

    // The amount of vertical space between accents. Must be more than the
    // height of a single accent to ensure they do not overlap
    if (laneHeight < ACCENT_HEIGHT) {
        console.warn('Cannot fit accents in lanes. Increasing height from '
            + laneHeight + ' to ' + ACCENT_HEIGHT);
        laneHeight = ACCENT_HEIGHT;
    }
    // If the given number of accents will not fit on screen, add fewer of them
    // than requested. This is the web, so doing unexpected things to
    // compensate for odd screen sizes is sort of the norm.
    if (laneHeight * n > CONTAINER_HEIGHT) {
        var newN = Math.floor(CONTAINER_HEIGHT / n);
        console.warn('Cannot fit all accents on page. Reducing count from '
            + n + ' to ' + newN);
        n = newN;
    }
    // Generate randomly styled accents and place them at their appropriate
    // offset positions
    for (var i = 0; i < n; i++) {
        generateAccent()
            .css({ 'top': createProperty(i * laneHeight, 'px') })
            .appendTo(ACCENT_CONTAINER);
    }
};

// The amount of space each accent should have in the final animation.
var laneSize = ACCENT_HEIGHT * 1.5;
var totalLanes = Math.floor(CONTAINER_HEIGHT / laneSize);

fillAccentContainer(totalLanes, laneSize);

