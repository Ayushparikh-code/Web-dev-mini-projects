import "./style.css";
import post_img from "../images/neerajchopra.webp"

const Post = () => {
    return (
        <>
            <div className="post_container">
                <div className="heading_part">
                    <img src={post_img} alt="profile_pic" className="profile_pic"></img>
                    <p className="name">Neeraj Chopra</p>
                </div>
                <div className="image_part">
                    <img src={post_img} alt="post_pic" className="post_pic"></img>
                </div>
                <div className="bottom_part">
                    <div>
                        <li><i class="far fa-heart"></i></li>
                        <li><i class="fas fa-location-arrow"></i></li>
                        <li><i class="far fa-comment"></i></li>
                        <li><i class="fas fa-ellipsis-h"></i></li>
                    </div>
                    <div>
                        <img src={post_img} alt="liked_by_pic" className="liked_by_pic"></img>
                        <p className="liked_by">Liked by &nbsp; <strong style={{ display: 'inline-block' }}> jugesh_raghav </strong> &nbsp; and &nbsp;<strong> 1,234,988&nbsp; </strong> others.</p>
                    </div>
                    <div>
                        <h4 >neeraj__chopra</h4>
                        <p >   Still processing this feeling. To all of India and beyond, thank you so much for your support and blessings that have helped me reach this stage.
                            This moment will live with me forever 🙏🏽🇮🇳</p>
                    </div>
                    <div>
                        <h4 >neeraj__chopra</h4>
                    </div>
                    <div>
                        <h4 >neeraj__chopra</h4>
                    </div>
                </div>
                <div className="comment_part">
                    <p>Add a Comment...</p>
                    <p>Add a Comment...</p>
                    <p>Add a Comment...</p>
                </div>
            </div>

        </>
    )
}

export default Post