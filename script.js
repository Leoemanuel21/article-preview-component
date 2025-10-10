function share(){
    if(window.innerWidth <= 767){
        const profile = document.querySelector(".profile");
        const profile_share = document.querySelector(".profile-share");
        if(profile_share.style.display == "none"){
            profile.style.display = "none";
            profile_share.style.display = "flex";
        }else{
            profile.style.display = "flex";
            profile_share.style.display = "none";
        }
        
    }else{
        const profile = document.querySelector(".profile");
        const profile_share = document.querySelector(".profile-share");
        if(profile_share.style.display == "none"){
            profile_share.style.display = "flex";
        }else{
            profile_share.style.display = "none";
        }
    }
}