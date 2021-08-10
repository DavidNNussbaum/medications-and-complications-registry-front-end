function Home() {
    return (
    <div>
       <h1>Welcome to this site!</h1>
       <img src={process.env.PUBLIC_URL+"/pano_oralmedications.jpg"}/>
       <p>Description.</p>
    </div>
    )
}
     
export default Home;