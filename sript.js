const fetchUser = (userName, callback) => {
    setTimeout(() => {
        callback ({ userName });
    }, 2000);
}

const fetchUserPhotos = (userName, callback) => {
    setTimeout(() => {
        console.log(`-Now we have the photos for ${userName}:`);
        callback(['Photo 1','Photo 2']);
    }, 2000);
}

const fetchPhotoDetails = (photo, callback) => {
    setTimeout(() => {
        console.log(`-${photo} details are:`)
        callback('Details...')
    }, 2000);
}

fetchUser("Michael", (user) => {
    console.log(`Your name is: ${user.userName}`);

    fetchUserPhotos(user.userName, (userPhotos) => {
        console.log(`The Photos are: ${userPhotos[0]}`);

        fetchPhotoDetails(userPhotos[0], (details)=>{
            console.log(details);
        });
    });
});