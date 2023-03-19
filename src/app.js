const express = require('express')
const app = express()

const port = process.env.PORT || 3000

   
const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))
/////////////////////////////////////////////////////////////////////////////
 app.set('view engine','hbs')

//  const viewsDirectory = path.join(__dirname , "../Templete/views" )
//  app.set( "views" , viewsDirectory)
 ///////////////////////////////////////////////////////////////
 var hbs = require ('hbs')

 const partialsPath = path.join (__dirname , "../partials")

 hbs.registerPartials(partialsPath)
 /////////////////////////////////////////////////////////////////////////////
 app.get('/' , (req , res) => {
        res.render('index' , {
            title: "HIGH QUALITY CODE",
            desc : "HTML & CSS & node.js",
        })
    })

/////////////////////////////////////////////////////////////////////////////
app.get('/service' , (req , res) => {
    res.render('service' , {
        title : "SERVICES",
        service1: "WEB DESIGN",
        service2 : "LOGO DESIGN",
        service3: "WEB APP",
    })
})
///////////////////////////////////////////////////////////////////////////
app.get('/about' , (req , res) => {
    res.render('about' , {
        title : "ABOUT",
        desc: "Some information about us"
    })
})
////////////////////////////////////////////////////////////////////////////

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    
////////////////////////////////////////////////////////////////////////////////
