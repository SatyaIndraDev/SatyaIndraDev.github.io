import React from 'react'

import { Box , HStack,Heading,Text,Image,Button,Link} from '@chakra-ui/react'


import style from './Aboutme.module.css'



const Home = () => {


  const OpenPDF = () => {

    const url = `https://drive.google.com/file/d/1dftS8HpYQ_BqvDxcdJ2SfST7pDqlVybe/view`

    window.open(url, '_blank');



  }

  return (

    <Box    id = 'home' mb = '30px'border="2px solid rgb(224, 242, 241)" >
      
      {/* //mt = {{base : '20px','456px' : '25px','612px' : '30px','735px' : '40px', '934px':'100px'}} */}

      <HStack mt = {{base : '86px','456px' : '94px','612px' : '95px','735px' : '105px', '934px':'150px'}}  flexDirection={{base : 'column','934px' : 'row'}} pl = '25px'  backdropFilter={'blur(10px)'}  justify={'space-between'} bg= {"#E0EFF8"} >


        <Box mb = {{base : '50px','934px' : 'none'}} pt = {{base : '30px','934px' : 'none'}} pr = {{base : '30px','934px' : 'none'}} w = {{base : '98%','934px' : '50%'}}  textAlign={'left'} bg="#E0EFF8" >

            <Heading fontSize = '50px'  color = '#1A202C' letterSpacing={'2px'} as = 'h1'>Hi! I Am</Heading>

            <Heading fontSize = '50px' id="user-detail-name"  color = '#1A202C' fontFamily={'monospace'} letterSpacing={'2px'}  as = 'h1'>Satya Indra Dev</Heading>

            <Text mt = '15px' fontSize = '15px' color = '#1A202C' id="user-detail-intro">An aspiring Full Stack Web Developer.Proficient in front-endtechnologies like HTML, CSS, JavaScript, React, Redux, and ChakraUI.A proactive problem-solver with excellent communication skills and a strong work ethic.</Text>

            <Button onClick = {OpenPDF} id="resume-button-2"  mb = '20px' _hover = {{background : 'black'}} mt = '15px' className="nav-link resume" size = {['sm','md']} variant = 'none' bg = '#1A202C;' border = '1px solid' boxShadow={'1px 1px 5px'} color = 'white'><Link  id="resume-link-2" _hover = {{textDecoration : 'none'}} href = 'SatyaIndraDev-Resume.pdf' isExternal download = "SatyaIndraDev-Resume.pdf">Resume</Link></Button>

            <HStack w = '170px' justify={'space-between'}>

                  
                <Link id="contact-linkedin" isExternal href = 'https://www.linkedin.com/in/satya-indra-dev-885a37193'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '30px' src = 'linkedin.png'></Image> </Link>

                 
                  
                <Link id="contact-github" isExternal href = 'https://github.com/SatyaIndraDev'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '40px' src = 'github.png'></Image> </Link>

                  

                <Link  id="contact-email" isExternal href = 'mailto:satyaindrad@gmail.com'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '35px' src = 'gmail.png'></Image>  </Link>

                <Link  id="contact-phone" isExternal href = 'https://wa.me/+917055280933'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '35px' src = 'whatsapp.png'></Image>  </Link>





            </HStack>



          </Box>

      



      <Image   w ={{ base : '85%','401px' : '75%','457px' : '60%','697px' : '50%','798px' : '40%','934px' : '30%'}} src = 'sid.jpg' ></Image>



      </HStack>

   





    </Box>
  )
}

export default Home