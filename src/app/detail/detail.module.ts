import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailComponent
      }
    ])
  ]
})
export class DetailModule { }
