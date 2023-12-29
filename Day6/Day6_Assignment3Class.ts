/*
### Assignment 3: Social Media Platform Features (TypeScript)
 
Objective:
Practice using interfaces with multiple implementation
Instructions:
1. create an interface `SocialMediaFeature` with a method `sharePost()`.
2. Export the both SocialMediaFeature and UIComponent (From Assignment2)
2. Create `Post`, `Comment`, and `Like` classes and implement the `SocialMediaFeature` interface 
   and UIcomponent
4. Create instances of `Post`, `Comment`, and `Like` and Call the methods to render, handle events, 
   and share posts in a social media platform application.
 */

import { SocialMediaFeature } from "./Day6_Assignment3Interface";
import { uiComponent  } from       "./Day6_Assignment2Interface";

//import { SocialMediaFeature } from "./03_interfaceForSocialMedia";
//import { UIComponent } from "./02_interfaceForuiComponent";

class Post implements SocialMediaFeature, uiComponent {
    render(): void {
        console.log("Post is Rendered");     
    }
    handleEvent(): void {
        console.log("PostEvent is handled"); 
    }
    sharePost(): void {
        console.log("Post is shared");
    }
}

class Comment implements SocialMediaFeature, uiComponent {
    render(): void {
        console.log("Comment is Rendered");     
    }
    handleEvent(): void {
        console.log("CommentEvent is handled"); 
    }
    sharePost(): void {
        console.log("Comment is shared");
    }
}

class Like implements SocialMediaFeature, uiComponent {
    render(): void {
        console.log("Like is Rendered");     
    }
    handleEvent(): void {
        console.log("LikeEvent is handled"); 
    }
    sharePost(): void {
        console.log("Like is shared");
    }
}

const myPost = new Post();
myPost.render();
myPost.handleEvent();
myPost.sharePost();

const myLike = new Like();
myLike.render();
myLike.handleEvent();
myLike.sharePost();

const myComment = new Comment();
myComment.render();
myComment.handleEvent();
myComment.sharePost();