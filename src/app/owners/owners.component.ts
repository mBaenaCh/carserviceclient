import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OwnersService } from '../shared/owners/owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  owner: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ownersService: OwnersService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  gotoList(){
    this.router.navigate(['/car-list']);
  }

  save(form: NgForm){
    this.ownersService.create(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href){
    this.ownersService.delete(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


}
