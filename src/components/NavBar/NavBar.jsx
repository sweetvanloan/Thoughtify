import React from 'react'
import { Link } from 'react-router-dom'
function NavBar(props) {

    return (
        <>
            <div>
                <strong>menu </strong>
                <button className="Navbar">
                    <a>Lorem ipsum</a>
                </button>
                <button className="Navbar">
                    <a>Ipsum schmipsum</a>
                </button>
                <button className="Navbar">
                    <a>About</a>
                </button>
                {/* below is the sign in/sign up button that we will need to add a tenerary to */}
                <Link className="Navbar" to='' onClick={props.handleLogout}>
                    sign out
                </Link>

                {/* <a href="https://twitter.com/intent/tweet?button_hashtag=Thoughtify&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="Check out Thoughtify! Made by @PainterPixo, @sweetavnloan, &amp; @ianchuianchu" data-url="https://github.com/sweetvanloan/Thoughtify" data-related="@sweetavnloan,@PainterPixo" data-dnt="true" data-show-count="false">Tweet #Thoughtify</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}

                <button><a href="https://twitter.com/intent/tweet?hashtags=Thoughtify%2C&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonRecommendation%3D%2540sweetvanloan%252C%2540PainterPixo%26buttonText%3DCheck%2520out%2520Thoughtify%2521%2520Made%2520by%2520%2540PainterPixo%252C%2520%2540sweetvanloan%252C%2520%2526%2520%2540ianchuianchu%26buttonType%3DHashtagButton%26buttonUrl%3Dhttps%253A%252F%252Fgithub.com%252Fsweetvanloan%252FThoughtify%26dnt%3D1%26query%3D%2523Thoughtify%26widget%3DButton&ref_src=twsrc%5Etfw&related=%40sweetvanloan%2C%40PainterPixo&text=Check%20out%20Thoughtify!%20Made%20by%20%40PainterPixo%2C%20%40sweetvanloan%2C%20%26%20%40ianchuianchu&tw_p=tweetbutton&url=https%3A%2F%2Fgithub.com%2Fsweetvanloan%2FThoughtify" target="_blank">Tweet #Thoughtify</a></button>
            </div>
        </>
    )

}
export default NavBar;