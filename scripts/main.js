let mainTitle = document.createElement('h1');
mainTitle.textContent = 'Adoptadog Blog';
document.body.appendChild(mainTitle);

let blogs = [
    {
        headline: 'Traveling with your dog',
        blogText: 'this is the blog text',
    },
    {
        headline: 'How to walk multiple dogs',
        blogText: 'this is th next blog text',
    }
];

for (let i = 0; i < blogs.length; i++) {
    let blog = blogs[i];

    let blogHeadline = document.createElement('h2');
    blogHeadline.textContent = blog.headline;

    let blogBlogText = document.createElement('p');
    blogBlogText.textContent = blog.blogText;

    mainTitle.appendChild(blogHeadline);
    mainTitle.appendChild(blogBlogText);
}
