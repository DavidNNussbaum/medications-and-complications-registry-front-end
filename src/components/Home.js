function Home() {
    return (
    <div>
       <h1>Welcome to this site!</h1>
       <img src={process.env.PUBLIC_URL+"/pano_oralmedications.jpg"}/>
       <p>Anyone can view the list of medications and related complications</p>
       <p>without having to sign up or log in.</p>
       <p>A person who signs up if it is their first time or logs in if they have signed up previously</p>
       <p>can view the list of medications and related complications,</p>
       <p>add new medications and complications, as well as edit or delete</p>
       <p>any complications that they have entered. </p>
    </div>
    )
}
     
export default Home;