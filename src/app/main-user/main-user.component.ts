
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../model/user';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent {
  users: Users[] =[
    {
      idCustomer: 1,
      firstName: "Mila",
      lastName: " Kunis",
      birthDate: "1999-06-30",
      accountCategory: "Admin",
      email: "mila@kunis.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
      profession: "Software Engineer"
      },
      {
      idCustomer: 2,
      firstName: "George",
      lastName: "Clooney",
      birthDate: "1999-06-30",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
      profession: "Software Engineer"
      },
      {
      idCustomer: 3,
      firstName: "George",
      lastName: "Clooney",
      birthDate: "1999-06-30",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
      profession: "Software Engineer"}

  ];

  filteredUsers: Users[] = [];
  accountCategory: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.accountCategory = params['accountCategory'];
      this.filterUsersByCategory(this.accountCategory);
    });
  }

  filterUsersByCategory(category: string | null) {
    if (category === null) {
      // Si la catégorie est nulle, affichez tous les utilisateurs
      this.filteredUsers = this.users;
    } else {
      // Sinon, filtrez les utilisateurs par catégorie de compte
      this.filteredUsers = this.users.filter(user => user.accountCategory === category);
    }
  }

  showAllUsers() {
    // Lorsque le bouton "Show All" est cliqué, réinitialisez la catégorie sélectionnée à null
    this.router.navigate(['user', null]);
  }
}




