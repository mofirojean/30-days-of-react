import {Fragment} from "react";

function Profile() {
    return (
        // one can use Fragments or <div>
        <Fragment>
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        </Fragment>
    );
}

function Gallery() {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export default Gallery;