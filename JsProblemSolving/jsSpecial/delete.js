// Function to delete posts one by one with a 4-second interval
const deletePosts = () => {
    const getPosts = () => document.querySelectorAll(".x6s0dn4.x78zum5.xdt5ytf.x193iq5w.x1t2pt76.xh8yej3"); // Function to get the latest posts
    let index = 0; // To track the current post

    const intervalId = setInterval(() => {
        const posts = getPosts(); // Fetch the updated list of posts on each iteration
        if (index >= posts.length) {
            clearInterval(intervalId); // Stop the interval if all posts are processed
            console.log("All posts processed.");
            return;
        }

        const currentPost = posts[index];
        const menuButton = currentPost.querySelector(".x1b0d499.xep6ejk"); // Find the menu button

        if (menuButton) {
            menuButton.click(); // Open the menu

            // Wait for the menu options to load and find the "Delete" button
            setTimeout(() => {
                const menuOptions = document.querySelectorAll(
                    ".x1i10hfl.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x972fbf.xcfux6l.x1qhh985.xm0m39n.xe8uvvx.x1hl2dhg.xggy1nq.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x87ps6o.x1lku1pv.x1a2a7pz.xjyslct.x9f619.x1ypdohk.x78zum5.x1q0g3np.x2lah0s.x1i6fsjq.xfvfia3.xnqzcj9.x1gh759c.x1n2onr6.x16tdsg8.x1ja2u2z.x6s0dn4.x1y1aw1k.xwib8y2.x1q8cg2c.xnjli0"
                );

                let deleteButton = null;
                menuOptions.forEach(option => {
                    if (option.innerText === "Delete") {
                        deleteButton = option;
                    }
                });

                if (deleteButton) {
                    deleteButton.click(); // Click the "Delete" button

                    // Wait for the confirmation dialog and click the final "Delete" button
                    setTimeout(() => {
                        const confirmDeleteButton = document.querySelector(
                            ".x1ja2u2z.x78zum5.x2lah0s.x1n2onr6.xl56j7k.x6s0dn4.xozqiw3.x1q0g3np.xi112ho.x17zwfj4.x585lrc.x1403ito.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xbxaen2.x1u72gb5.xtvsq51.x1r1pt67"
                        );
                        if (confirmDeleteButton && confirmDeleteButton.innerText === "Delete") {
                            confirmDeleteButton.click(); // Confirm the deletion
                            console.log(Post ${index + 1} deleted.);
                        }
                    }, 1000); // Wait 1 second for the confirmation dialog
                } else {
                    console.log(No "Delete" button found for post ${index + 1}. Skipping.);
                }
            }, 1000); // Wait 1 second for the menu to load
        } else {
            console.log(No menu button found for post ${index + 1}. Skipping.);
        }

        // Move to the next post dynamically
        setTimeout(() => {
            index = getPosts().length > index ? index : index - 1;
        }, 4000);
    }, 4000); // Delete every post after 4 seconds
};

// Start deleting posts
deletePosts();
