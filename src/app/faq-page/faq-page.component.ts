import { Component } from '@angular/core';
import { GlobalConstants } from '../app.constants';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent {
  // Attributes 
  faqs: any = [];
  baseURL: string = GlobalConstants.baseURL;
  page: number = 1;
  // Constructor and Init
  constructor(private faqService: FaqService) { }
  ngOnInit(): void {
    this.getFaqs();
  }
  // CRUD Methods
  private getFaqs() {
    this.faqService.getFaqs(this.page).subscribe(response => { this.faqs = response; });
  }

  public changePage(evt: any) {
    this.page = evt.target.innerHTML;
    this.getFaqs();
    window.scrollTo(0, 0);
  }

  public toggleFaq(evt: any) {
    var answer = evt.target.parentElement.children[1];
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  }
}
