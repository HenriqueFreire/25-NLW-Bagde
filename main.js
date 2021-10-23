const profileSociaMedia = {
    github: '/HenriqueFreire',
    youtube: ' ',
    facebook: '/profile.php?viewas=100000686899395&id=100071540950400',
    instagram: ' ',
    twitter: ' ',
}

function changeSocialMediaLinks(){
    for (let li of socialLinks.children) {
        const socialMedia = li.getAttribute('class')
        li.firstElementChild.href += `${profileSociaMedia[socialMedia]}`
    }
}

function getGithubProfileInfos() {
    const url = `https://api.github.com/users${profileSociaMedia.github}`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        userName.textContent = data.name
        profileGithub.href = data.html_url
        userNickname.textContent = data.login
        userBio.textContent = data.bio
        //userPhoto.src = data.avatar_url
    })
    
    
}

getGithubProfileInfos()
changeSocialMediaLinks()