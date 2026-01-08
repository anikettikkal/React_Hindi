import React from "react";
import Card from "../utils/Card";
function Home() {
    return (
        <>
        <h1>Home</h1>
        <div className="flex justify-center gap-2.5">
        <Card img="https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_hybrid&w=740&q=80" title="ChapterOne" description="This is an First Card"/> <br />
        <Card img="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg" title="second image" description ="this is an second card"/>
        </div>
        </>
    )
}
export default Home;