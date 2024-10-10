const topSec = document.getElementById("top-sec")
const bottomSec = document.getElementById("bottom-sec")
const homeBtn = document.getElementById("home-btn")
const aboutBtn = document.getElementById("about-btn")
const viewMoreBtn = document.getElementById("view-more-btn")
const totalPosts = 6
const startPosts = 3

let allPostsAreShown = false


const fillBottom =(amount)=>{
    let html =""
    for(let i =0;i <amount;i++){
        html +=`
        <div class="blog-post flex-colum flex-group">
          <img src="imgs/blog-image-0${i+1}.png">
          <div class="post-info flex-colum flex-group">
            <p class="post-date">JULY 23,2022</p>
            <h2> Blog ${i+1}</h2>
            <p class="blog-desc">I'm excited to start a new learning journey as a 
            Scrimba Bootcamp student! After several months of learning 
            in the Frontend Developer Career Path.</p>
            </div>
        </div>
      `
    }
    bottomSec.innerHTML = html
}
fillBottom(startPosts)
const updateTextAndState = (text,bool,amount)=>{
  viewMoreBtn.innerText = text
  allPostsAreShown = bool
  fillBottom(amount)
}
const showPosts =() =>{
  if(allPostsAreShown == false){
    updateTextAndState("View Less",true,totalPosts)
  }else if(allPostsAreShown == true){
    updateTextAndState("View More",false,startPosts)
  }

}


const showHomePage =()=>{
  topSec.innerHTML =`
          <div id="home-part" class="flex-group flex-colum">
            <div>
            <p class="post-date">JULY 23,2022</p>
            <h2> My new journey as a bootcamp student.</h2>
            <p class="blog-desc">After several months of learning in the Frontend Developer Career Path,
   I've made the big jump over to the Bootcamp to get expert code reviews 
   of my Solo Projects projects and meet like-minded peers.</p>
            </div>
   </div>
  `
}
const showAboutPage =()=>{
  topSec.innerHTML =`
  <div id="about-part" class="flex-group flex-colum">
    <div id="about-top-part" class="flex-group flex-colum">
      <img id="person-pic"src="imgs/image 18.png"/>
      <div class="about-container">
        <h2>Hi there! My name is Roku 
        and welcome to my learning journal.</h2>
        <p>After several months of learning in the 
        Frontend Developer Career Path, I've made the 
        big jump over to the Bootcamp to get expert 
        code reviews of my Solo Projects projects and 
        meet like-minded peers.</p>
      </div>
    </div>
    <div id="about-bottom-part">
      <div class="about-container">
        <h2>How I stay committed to learning</h2>

        <p>I like to think of myself as a lifelong learner. I used to spend hours and hours 
        learning, then try to create simple projects using what I learned or work new techniques 
        into existing projects.</p>
        <p>While that was fun, I felt like it would be helpful to share what I was learning 
        and most things about my journey with the world.</p>

      </div>

      <div class="about-container">
        <h2>How I got started</h2>

        <p>I started simple and gradually grew my learning journal site. I would take notes about what I was 
        learning. After each learning session, I'd use my notes to not only reflect on what I learned but also 
        write short summaries of what I learned using my own words.</p>

        <p>That helped me grow what I was learning, and I realized that posting my learning summaries was also helping 
        others learn and stay motivated.</p>

      </div>

    </div>
  </div>
  `
}

document.addEventListener("click",(e)=>{
  if(e.target.id =="home-btn"){
    showHomePage()
  }else if(e.target.id == "about-btn"){
    showAboutPage()
  }else if(e.target.id== "view-more-btn")
    showPosts()
})
showHomePage()