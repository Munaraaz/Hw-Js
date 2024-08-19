//! Task 1
// const posts = {
//     name: "posts",
//     isLoading: true,

//     byId: {
//         post1: {
//             id: "post1",
//             author: "user1",
//             body: "......",
//             comments: ["comment1", "comment2"],
//         },
//         post2: {
//             id: "post2",
//             author: "user2",
//             body: "......",
//             comments: ["comment3", "comment4", "comment5"],
//         },
//     },
//     allIds: ["post1", "post2"],
// };


// const copyOfPosts={...posts};
// console.log(copyOfPosts);

//! Task 2


// const copyOfPosts = JSON.parse(JSON.stringify({...posts}));
// console.log(copyOfPosts);



//! Task 3

// const post = {
//     name: "posts",
//     isLoading: true,
//     id: "post1",
//     author: "user1",
//     body: "......",
//     comments: ["comment1", "comment2"],
// };
// const {comments: color, hello, ...rest} = post;
// console.log(color); //! в консоле выйдеть  ['comment1', 'comment2'] значение свойствы (comments)
// console.log(hello); //! undefined
// console.log(rest);  //! В консоле выйдеть новый объект, но в этот раз без свойствы (comments:).



//! Task 4

// const comments = ["comment3", "comment4", "comment5", "comment1"];

// const [undefined, comment1, ...rest] = comments

// console.log(undefined);  //! Ошибка

// console.log(comment1);   //! Ошибка

// console.log(rest);       //! Ошибка

