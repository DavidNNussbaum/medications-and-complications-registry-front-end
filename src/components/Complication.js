function Complication({severity, duration, description, resolved}) {

   return(
       <div>
         <h3>{severity}</h3>
         <h3>{duration}</h3>
         <h3>{description}</h3>
         <h3>{resolved}</h3>
       </div>
   
   )
}
export default Complication;

t.integer "complication_severity"
    t.string "complication_duration"
    t.text "complication_description"
    t.boolean "completely_resolved"

 