import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../model/Invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit{
  idFacture: number | null = null;
  montantFacture: number | null = null;
  montantRemise: number | null = null;
  dateFacture: string | null = null;
  active: boolean | null = null;
  invoice: Invoice | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.idFacture = +params['idFacture'];
      this.active = params['active'] === 'true';
    });
    console.log(this.idFacture, this.active);
  }

  ngOnInit() {}
  retour() {
    this.router.navigate(['']);
  }
}
