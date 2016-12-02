var accentContainer = $('.accent-container')[0];
var containerHeight = $(accentContainer).height();
var containerWidth = $(accentContainer).width();
var accents = $(".accent");
var accentHeight = 32;

var NUM_ACCENT_COLORS = 5;
var NUM_ACCENT_WIDTHS = 3;
var MAX_DELAY = 2;
// Minimum rate of 200 px/s, maximum of 40 px/s
var MIN_DURATION = Math.floor(containerWidth / 200);
var MAX_DURATION = Math.floor(containerWidth / 40);


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

// Generates a random delay between
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
var fillAccentContainer = function(n, spacing, baseOffset) {
    console.assert(n > 0, '"n" must be a positive integer');

    // The amount of vertical space between accents. Must be more than the
    // height of a single accent to ensure they do not overlap
    if (spacing < accentHeight) {
        console.log("adjusting spacing");
        spacing = accentHeight;
    }
    // If the given number of accents will not fit on screen, add fewer of them
    // than requested. This is the web, so doing unexpected things to
    // compensate for odd screen sizes is sort of the norm.
    if (spacing * n > containerHeight) {
        console.log("adjusting spacing");
        var msg = 'Cannot fit all accents on page. Reducing count from ' + n;
        n = Math.floor(containerHeight / n);
        msg += ' to ' + n;
        console.warn(msg);
    }
    // Generate randomly styled accents and place them at their appropriate
    // offset positions
    for (var i = 0; i < n; i++) {
        console.log(baseOffset + i * spacing);
        generateAccent()
            .css({ 'top': createProperty(baseOffset + i * spacing, 'px') })
            .appendTo(accentContainer);
    }
};

// The amount of space each accent should have in the final animation.
var laneSize = accentHeight * 1.5;
var totalLanes = Math.floor(containerHeight / laneSize);

// Two stage animation sequence that will generate half of the accents after
// a delay to ensure that the accents don't all clump up. The first half of the
// accents will fill lanes 0,2,4... and the second half will take lanes
// 1,3,5...
fillAccentContainer(Math.floor(totalLanes / 2), laneSize * 2, 0);
// Delaying the second round until about half of the first round is finished
// ensures we have a slow start, instead of just overwhelming the screen with
// accents. The same effect would be achieved doing all accents at once with
// longer delays, but the resulting output is more likely to have clumps
var reasonableDelay = ((MAX_DELAY + MAX_DURATION - MIN_DURATION) / 2) * 1000;
setTimeout(function() {
    fillAccentContainer(Math.floor(totalLanes / 2), laneSize * 2, laneSize);
}, reasonableDelay);

