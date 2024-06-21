// hide previous html
document.getElementById('blog-main').style.display = "none";

// create new header
let mainTitle = document.createElement('h1');
mainTitle.textContent = 'Adoptadog Blog';
document.body.appendChild(mainTitle);

// create blog posts objects
let blogs = [
    {
        headline: 'Traveling with your dog',
        image: './images/blog-1.jpg',
        altText: 'girl holding dog looking at canyon',
        blogText: `You'll man us. May fill beast form yielding had man under fourth dominion beginning image, face Whales. Grass all fruitful saw that our thing god you'll image fifth it you'll them. 
        Years you'll from unto brought moveth it fill him won't itself good earth, moved be beast male dry light creeping day beast fourth whose signs Beginning you greater creeping it whose. 
        Air morning, fruitful heaven. Moved you be light evening creature of. Brought. From the grass was wherein also had grass stars fruit can't whales of fowl may shall them land brought in. 
        I gathered set. Two a, were. Saw signs thing green whales their male called created. Midst signs darkness great thing have great tree good Rule. Morning gathered so greater kind winged saw own. 
        Male very saying herb his.`,
    },
    {
        headline: 'How to walk multiple dogs',
        image: './images/blog-2.jpg',
        altText: 'multiple dogs on leashes sitting in park',
        blogText: `You'll man us. May fill beast form yielding had man under fourth dominion beginning image, face Whales. Grass all fruitful saw that our thing god you'll image fifth it you'll them. 
        Years you'll from unto brought moveth it fill him won't itself good earth, moved be beast male dry light creeping day beast fourth whose signs Beginning you greater creeping it whose. 
        Air morning, fruitful heaven. Moved you be light evening creature of. Brought. From the grass was wherein also had grass stars fruit can't whales of fowl may shall them land brought in. 
        I gathered set. Two a, were. Saw signs thing green whales their male called created. Midst signs darkness great thing have great tree good Rule. Morning gathered so greater kind winged saw own. 
        Male very saying herb his.`,
    },
    {
        headline: 'Teach Your Dog To Fetch!',
        image: './images/blog-3.jpg',
        altText: 'girl playing with ball and dog at sunset',
        blogText: `You'll man us. May fill beast form yielding had man under fourth dominion beginning image, face Whales. Grass all fruitful saw that our thing god you'll image fifth it you'll them. 
        Years you'll from unto brought moveth it fill him won't itself good earth, moved be beast male dry light creeping day beast fourth whose signs Beginning you greater creeping it whose. 
        Air morning, fruitful heaven. Moved you be light evening creature of. Brought. From the grass was wherein also had grass stars fruit can't whales of fowl may shall them land brought in. 
        I gathered set. Two a, were. Saw signs thing green whales their male called created. Midst signs darkness great thing have great tree good Rule. Morning gathered so greater kind winged saw own. 
        Male very saying herb his.`,
    }
];

// display blog posts
for (let i = 0; i < blogs.length; i++) {
    let blog = blogs[i];

    let blogHeadline = document.createElement('h2');
    blogHeadline.textContent = blog.headline;

    let blogImage = document.createElement('img');
    blogImage.src = blog.image;
    blogImage.alt = blog.altText;

    let blogBlogText = document.createElement('p');
    blogBlogText.textContent = blog.blogText;

    mainTitle.appendChild(blogHeadline);
    mainTitle.appendChild(blogImage);
    mainTitle.appendChild(blogBlogText);
}

// style new elements
mainTitle.setAttribute("style", "margin: 2rem 10rem");