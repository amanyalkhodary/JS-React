const posts = [
    { id: 1, title: "HTML Basic", content: "Learn HTML fundamentals", image: "html-cover.png" },
    { id: 2, title: "CSS Tips", content: "Styling tips and tricks", image: "" },
    { id: 3, title: "JavaScript", content: "All about arrays and objects", image: "js-arrays.png" },
    { id: 4, title: "Web Design", content: "UI and UX principles", image: "null" },
    { id: 5, title: "React Intro", content: "Getting started with React", image: "react-cover.png" },

];

posts.forEach((post)=>{
    const postImage=post.image ? post.image: "default image";

    console.log(`Post ID:${post.id} |Title:${post.title}| Image:${postImage}`);
});