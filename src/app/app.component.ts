import { Component, OnInit } from '@angular/core';
import { StorageService } from './components/utils/storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pagomovil Netcom';

 constructor ( private readonly storageService: StorageService
  ) {}

  user?: any;

ngOnInit(): void {
  this.user = this.storageService.getUser();
  if (this.user) console.log("Inicio",this.user);
}
}
