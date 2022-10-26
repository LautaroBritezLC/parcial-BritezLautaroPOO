import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personal: any[] = [];

  constructor(
    private _personalService: FirestoreService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getPersonalTablaMostrar()
  }

  getPersonalTablaMostrar() {
    this._personalService.getPersonalTabla().subscribe(data => {
      this.personal = [];
      data.forEach((element: any) => {
        this.personal.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
  }

  deletePersonalTabla(id: string) {
    this._personalService.deletePersonal(id).then(() => {
      this.toastr.error('El personal fue eliminado con exito', 'Personal eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(() => {})
  }

}

