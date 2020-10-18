import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  url = URL[0];
  url1 = URL1[0];

  toLoad = true;
  timeStamp = "";
  index = 0;

  name = "Angular " + VERSION.major;

  dropDown() {
    document.getElementById("drop").classList.toggle("show");
  }
}

const URL = [
  "https://desktopwalls.net/wp-content/uploads/2014/10/Wish%20You%20Were%20Here%20Pink%20Floyd%20Cover%20Desktop%20Wallpaper.jpg"
];

const URL1 = [
  "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
];
