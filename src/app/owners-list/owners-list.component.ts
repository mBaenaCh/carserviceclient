import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../shared/owners/owners.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {
  owners: Array<any>;
  constructor(private ownerService: OwnersService) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      console.log(data._embedded.owners.href);
      this.owners = data._embedded.owners.filter((owner) => {
        const dni = parseInt(owner.dni, 10);
        if(isNaN(dni)){
          return false;
        }
        return true;
      });
    });
  }

}
