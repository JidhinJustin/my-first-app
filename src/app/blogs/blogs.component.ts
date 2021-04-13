import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Post } from '../post';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  loadedPosts: any[]=[];
  errors: any;
  
  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
  }
  
  onCreatePost(postData: Post) {
    this.blogsService.createPost(postData).subscribe((responseData) => {
      console.log(responseData);
    });
  }
  
  fetchPosts() {
    this.blogsService.fetchPost().subscribe((posts) => {
      this.loadedPosts = posts;
    },
    (error) => {
      this.errors = error.message;
    }
    );
  }
  onClickFetchPosts() {
    this.fetchPosts();
  }

  onDeletePosts() {
    this.blogsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}

  
