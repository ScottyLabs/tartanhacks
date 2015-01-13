particlesJS('splash-bg', {
  particles: {
    color: '#fff',
    shape: 'triangle',
    opacity: 1,
    size: 2,
    size_random: false,
    nb: $(window).width() / 5,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 0.9,
      widapp: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: false
  },
  retina_detect: true
});

window.app = {};

app.auth = {
  clientId: '70162173884-dpo77017763anqa35rp7tus54681qkgb.apps.googleusercontent.com',
  scopes: 'profile',
  initialised: false
};

app.auth.init = function() {
  delete window.handleClientLoad;
  gapi.client.setApiKey(app.auth.apiKey);
  return gapi.auth.authorize({
    client_id: app.auth.clientId,
    scope: app.auth.scopes,
    immediate: true,
    cookie_policy: 'single_host_origin',
    accesstype: 'offline',
    redirecturi: 'postmessage'
  }, app.auth.authHandler);
};

window.handleClientLoad = app.auth.init;

app.auth.clickHandler = function() {
  return gapi.auth.authorize({
    client_id: app.auth.clientId,
    scope: app.auth.scopes,
    immediate: false,
    cookie_policy: 'single_host_origin',
    accesstype: 'offline',
    redirecturi: 'postmessage'
  }, app.auth.authHandler);
};

app.auth.authHandler = function(res) {
  if ((res != null) && !res.error) {
    console.log('Logged in!');
    return console.log(res['access_token']);
  } else {
    console.log('Not logged in');
    return $("#googleSignIn").on('click', app.auth.clickHandler);
  }
};

Handlebars.registerHelper('toLowerCase', function(val) {
  if (val != null) {
    return new Handlebars.SafeString(val.toLowerCase());
  } else {
    return '';
  }
});

app.templates = {
  announcements: Handlebars.compile($("#announcements-template").html())
};

app.init = function() {
  $("#announcements").html(app.templates.announcements({
    announcements: []
  }));
  return app.update.all();
};

app.update = {
  announcements: function(data) {
    data = data.sort(function(a, b) {
      return a.timestamp - b.timestamp;
    }).map(function(elem) {
      elem.timestamp = moment(elem.timestamp, 'x').fromNow();
      return elem;
    }).slice(-5);
    return $("#announcements").html(app.templates.announcements({
      announcements: data
    }));
  },
  all: function() {
    return $.ajax({
      dataType: 'json',
      url: '/api/data',
      type: 'GET'
    }).success(function(data) {
      app.update.announcements(data.announcements);
      return console.log("Update.");
    }).fail(function(err) {
      return console.log("Error: " + err + ".  Please refresh the page.");
    });
  }
};

$(window).on('ready', app.init());
