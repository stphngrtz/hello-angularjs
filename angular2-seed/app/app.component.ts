import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {

    alerts:Object[] = [];

    ngOnInit() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
        $(function () {
            $('[data-toggle="popover"]').popover({trigger:'hover'})
        });
    }

    addAlert(message: String, type: String) {
        this.alerts.push({message:message, type:type});
    }

    removeAlert(index:number) {
        this.alerts.splice(index, 1);
    }

    saveModal() {
        console.info("save modal");
    }
}
