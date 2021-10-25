import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'


function PersonalBookForm(props){

    
    const [formData, setFormData] = useState({
        image_url: null,
        title: '',
        genre: '',
        publishing_date: '',
        rating: '',
        author: '',
    })
    

    function handleOnChange (event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function handleFormSubmit(event){
        event.preventDefault()
        alert("Your book has been added! Go take a look!")
        fetch('http://localhost:3000/personal_books', configObject())
        .then(response => response.json())
        .then(data => props.history.push('/personal_books'))
        setFormData(formData)
           
    }

    const configObject = () => {
        return {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(formData)
        }
    }
    


    return (
        <div >
            <br />
            <div >Book Submission</div>
            <Form onSubmit={handleFormSubmit}>
                <div className="formField"> 
                <Form.Field>
                    <label>Title</label>
                    <input 
                        placeholder="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                     <label >Author's Full Name</label>
                     <input 
                        placeholder="Full Name"
                        name="author"
                        value={formData.author}
                        onChange={handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                     <label>Rating</label>
                    <input 
                        placeholder="Enter a number from 1 - 10"
                        name="rating"
                        value={formData.rating}
                        type="number"
                        onChange={handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                    
                </Form.Field>
                <Form.Field>
                    <label >Genre</label>
                    <input 
                        placeholder="Genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label >Date of Publish</label>
                    <input 
                        placeholder="Date"
                        name="publishing_date"
                        value={formData.publishing_date}
                        type="date"
                        onChange={handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                </div>
                <br />
               <Form.Field>
                   <div >
                        <Form.Button >Submit</Form.Button>
                        <br />
                    </div>   
               </Form.Field>
            </Form>

            <div >
                <Form.Button ><a href="http://localhost:4000/personal_books"> Back </a></Form.Button>  
            </div>
        </div>
    )
}

export default PersonalBookForm;