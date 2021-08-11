import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button} from 'antd';


function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime =  props.movieInfo.runtime


    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)



        
    //이 돔이 켜지자마자 얼마나 많은 사람들이 Favorite에 넣었는가 정보를 얻을수 있게 로직작성
    let variables = {
        userFrom: userFrom,
        movieId : movieId,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRunTime: movieRunTime
    }
    
    
    useEffect(() => {

        
        Axios.post('/api/favorite/favoriteNumber', variables)
          .then(response=>{

              console.log(response.data)
              setFavoriteNumber(response.data.FavoriteNumber)

              if(response.data.success){
                  
              }else{
                  alert('숫자 정보를 가져오는데 실패했습니다')
              }
          })



        Axios.post('/api/favorite/favorited', variables)
          .then(response =>{
              
              if(response.data.success){

                setFavorited(response.data.favorited)
                  console.log('favorited', response.data)
              }else{
                  alert('정보를 가져오는데 실패했습니다')
              }
          })
    }, [])
 

    const onClickFavorite = () =>{
        if(Favorited){
            Axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response =>{
                if(response.data.success){
                    setFavoriteNumber(FavoriteNumber + 1)
                    setFavorited(!Favorited)
               
                }else{
                    alert('Favorite 리스트에서 지우는걸 시패했습')
                }
            })       
        }else{
            Axios.post('/api/favorite/addToFavorite', variables)
            .then(response =>{
                if(response.data.success){
                    setFavoriteNumber(FavoriteNumber + 1)
                    setFavorited(!Favorited)
               
               
                }else{
                    alert('Favorite 리스트에서추가하는것 실패 ')
                }
            })
        }

    }


    return (
        <div>
            <Button onClick={onClickFavorite}>{Favorited ? "Not Favorite" : "Add to Favorite"}{FavoriteNumber}</Button>
        </div>
    )
}

export default Favorite
