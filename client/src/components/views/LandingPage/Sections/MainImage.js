import React from 'react';


//메인이미지에서 뿌려주는것
//props을 이용해서 이미지 정보를 가져올수 있다
function MainImage(props){
    return (

        <div style={{background:`linear-gradient(to bottom, rgba(0,0,0,0)
        39%, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #1c1c1c`,
           height:'500px',
           backgroundSize:'100%, cover',
           backgroundPosition: 'center, center',
           width:'100%',
           position: 'relative'
        
        
        }}>

            <div>

                <div style={{position:'absolute',maxWidth:'500px', bottom:'2rem', marginLeft:'2rem'}}>
                    <h2 style={{color:'white'}}> {props.title} </h2>
                    <p style={{color:'white', fontSize:'1rem'}}> {props.text} </p>

                </div>
            </div>
        </div>


    )
}

export default MainImage