import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'


function PersonalBookForm(props){

    
    const [formData, setFormData] = useState({
        image_url: null,
        title: '',
        genre: {
            fiction: '',
            non_fiction: '',
            science_fiction: '',
            romance: '',
            mystery: '',
            biography: '',
            auto_biography: '',
            speech: '',
            other: ''
        },
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
            <br />
            <Form onSubmit={handleFormSubmit}>
                <div> 
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
                </Form.Field>
                <Form.Field>
                     <label >Author's Full Name</label>
                     <input 
                        placeholder="Full Name"
                        name="author"
                        value={formData.author}
                        onChange={handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
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
                    <select name="genre" onChange={handleOnChange} value={formData.genre}>
                        <option value="">--Please select an option--</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Ficton</option>
                        <option value="Science-Fiction">Science-Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Biography">Biography</option>
                        <option value="Autobiography">Autobiography</option>
                        <option value="Speech">Speech</option>
                        <option value="Other">Other: 
                        </option>
                    </select>
                    <input 
                        name="genre"
                        value={formData.genre.other}
                        onChange={handleOnChange}
                        style={{width: "100%"}}
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
               <Form.Field>
                    <Form.Button >Submit</Form.Button>
               </Form.Field>
               </div>
            </Form>
            <br />
            <div >
                <Form.Button ><a href="http://localhost:4000/personal_books"> Back </a></Form.Button>  
            </div>
        </div>
    )
}

export default PersonalBookForm;