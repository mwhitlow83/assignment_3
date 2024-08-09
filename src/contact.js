import React from 'react'

const contact = () => {
  
    return (
    <div className="cbody">
       
                <div className="form-row">
                        <label class="cfield">First Name:
                                <input 
                                type="text" 
                                name="first-name" 
                                required />
                        </label>
                </div>
 

                <div className="form-row">
                        <label class="cfield">Last Name:
                            <input 
                                type="text" 
                                name="last-name" />
                        </label>

                 </div>
              
                <div className="form-row">
                        <label class="cfield">Email:
                            <input                            
                                type="email" 
                                name="email" 
                            required />
                        </label>
                </div>

         
            <div className="form-row">
                <label class="cfield">Comment
                    <textarea 
                        name="message" 
                        cols="30" 
                        rows="10" 
                        required></textarea>
                </label>

            </div>

            
            <div className='form-row-b'>
                <button className='b' type="submit">Send</button>
                <button className='b' type="reset">Clear</button>
           
             </div>




    </div>
  )
}

export default contact
