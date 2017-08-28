import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  public name: String;

  constructor(private router: Router, public activatedRoute: ActivatedRoute) { }

  public back = function (): void {
    //this.router.navigateByUrl('home', { queryParams: { test: 'test' } });
    this.router.navigate(['home'], { queryParams: { test: 'test' } }, { QueryParamsHandling: 'merge' }); //or preserve (strategy to keep previous params values)
    //BOTH WORKS
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params1 => {
      if (params1.name)
        this.name = params1.name;
      else {
        this.activatedRoute.params.subscribe(params2 => {
          this.name = params2.name;
        });
      }
    })
  }

}
