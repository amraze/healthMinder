import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../app.constants';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.css']
})
export class BlogsPageComponent implements OnInit {
  // Attributes 
  blogs: any = [];
  baseURL: string = GlobalConstants.baseURL;
  page: number = 1;
  // Constructor and Init
  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
    this.getBlogs();
  }
  // CRUD Methods
  private getBlogs() {
    this.blogService.getBlogs(this.page).subscribe(response => { this.blogs = response; });
  }

  public changePage(evt: any) {
    this.page = evt.target.innerHTML;
    this.getBlogs();
    window.scrollTo(0, 0);
  }
}
