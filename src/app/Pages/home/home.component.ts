import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../../Components/header/header.component';
import { BtnPrimaryComponent } from '../../Components/btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../../Components/newsletter-form/newsletter-form.component';
import { FooterComponent } from '../../Components/footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    NgOptimizedImage, 
    BtnPrimaryComponent,
    NewsletterFormComponent,
    FooterComponent
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
