import Complications from './Complications'

function Medication({name, frequency, route, complications}) {

   return(
       <div>
         <h1>{name}</h1>
         <h3>{frequency}</h3>
         <h3>{route}</h3>
       </div>
   
   )
}
export default Medication;

