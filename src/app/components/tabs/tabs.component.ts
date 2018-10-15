import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tabSelect(event, tabName) {
  //   var i, tabcontent, tablinks;

  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for(i=0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }

  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //       tablinks[i].className = tablinks[i].className.replace(":active", "");
  //   }

  //   document.getElementById(tabName).style.display = "block";
  //   event.currentTarget.className += ":active";
  //   console.log(event.currentTarget)
  //   console.log(`${tabName} clicked`)
  // }

  tabSelect(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
}
