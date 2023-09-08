

import {Button, Container, Typography} from "@mui/material";



export default  function App(){
  
  
  return (
    <Container sx = {{ border: 1, boxShadow: 3, pb: 10}}>
     
  
    <h1><center>"MiPropioJefe.Tu"</center></h1>
    <Typography
    variant="h3"
    color= "primary"
    >
    </Typography>
    <center>
<Button  variant="contained" color="success">
  Quienes somos 
</Button>
<Button variant="contained" color="success">
  Formatos
</Button>
<Button variant="contained" color="success">
  contactanos
</Button>
<Button variant="contained" color="success">
  Productos nuevos
</Button>  
</center>

    <Container  sx = {{ border: 1, boxShadow: 80, pb: 30 }}></Container>
   
    

    <Container sx = {{ border: 1, boxShadow: 60, pb: 30}}></Container>


    <Container sx = {{ border: 1, boxShadow: 90, pb: 90}}></Container>
    
    
    
    </Container>
  );
  
  
  
}
         
  