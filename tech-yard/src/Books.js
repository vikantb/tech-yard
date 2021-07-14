import React,{useState,useEffect}  from 'react'
import axios from 'axios'
import Book from './Book.js'

function Books({searchCourse}) {
    const[books,setBooks]=useState([]) ;

    useEffect(() =>{
        const fetchData= async ()=>{
            let fetchUrl=`http://127.0.0.1:4545/get/rcmd/${searchCourse}`;
            const request = await axios.get(fetchUrl) ;
            setBooks(request.data);
        }
        fetchData();
    },[searchCourse]) ;
    console.log(books)

    return (
        <div className="row mt-5">
          {books.map(book=>
            <div className="col-4">
              <Book course_title={book.course_title}
                    duration={book.duration}
                    num_reviews={book.num_reviews}
                    num_lectures={book.num_lectures}
                    num_subscribers={book.num_subscribers}
                    price={book.price}
                    url={book.url}
              />
            </div>
          )}
        </div>
    )
}

export default Books
