

// Create an array of the links to choose from:
var links = new Array();
links[0] ="{{url_for('news1India')}}";
links[1] = "http://www.bing.com/";
links[2] = "http://www.yahoo.com/";
links[3] = "http://www.apple.com/";

function openLink() {
  // Chooses a random link:
  var i = Math.floor(Math.random() * links.length);
  // Directs the browser to the chosen target:
  parent.location = links[i];
  return false;
}

