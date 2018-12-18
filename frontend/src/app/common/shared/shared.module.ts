import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { UpperFirstCharacterPipe } from './pipes/upper-first-character.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UpperFirstCharacterPipe, 
    HeaderComponent, 
    FooterComponent, 
    FormSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatRadioModule
  ],
  exports: [
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    UpperFirstCharacterPipe,
    HeaderComponent,
    FooterComponent,
    FormSearchComponent,
    FormsModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class SharedModule { }
