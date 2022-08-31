import React from 'react'
import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
function UserSearch() {
    const [text, setText] = useState('')
    
    const {users} = useContext(GithubContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
            alert('Please enter somthing')

        }else{
            setText('')
        }
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 mb-8 gap-8' >
        <div>
        <form onSubmit={handleSubmit} >
            <div className="form-control">
                <div className="relative">
                    <input type="text" 
                    className="w-full pr-40 bg-gray-200 input input-lg text-back" 
                    placeholder='Search'
                    value={text}
                    onChange={handleChange}
                    />
                    <button type='submit'
                     className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                        GO
                     </button>
                </div>
            </div>
        </form>
        </div>
        {users.length > 0 && (
            <div>
                    <button className="btn btn-ghost btn-lg">clear</button>
                </div>
        )}
    
      
    </div>
  )
}

export default UserSearch
