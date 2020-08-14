import React from "react";
import Navbar from "../components/navbar"
import Jumbotron from "../components/Jumbotron";
import FormSearchBook from "../components/Form"
import ResultCard from "../components/ResultCard"

function Home() {
  return (
   //Start adding elements here
   <div>
     <Navbar />
     <br />
     <div className="container">
     <Jumbotron />
     <FormSearchBook />
     <br />
       <h2>Results!</h2>
       <div>
         <ResultCard
        //  bookName = 
        //  bookAuthors=
        //  img=
        //  bookDescription=
          />
       </div>


     </div>
     
     
   



   </div>
   

  );
}


export default Home;
