import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategory = [
    "Fiction",
    "Fantasy",
    "Paranormal",
    "Teen",
  ]
  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategory[0]);
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
    
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form className="flex w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="Title" value="Title" />
            </div>
            <TextInput id="Book Title" type="text" placeholder="Book name " required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="Author Name" value="Author Name" />
            </div>
            <TextInput id="Author Name" type="text" placeholder="Author Name " required />
          </div>
        </div>

        {/* 2nd row */}
        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <TextInput id="Book description" type="text" placeholder="Book description " required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="imageUrl" />
            </div>
            <TextInput id="imageUrl " type="text" placeholder="imageUrl " required />
          </div>
        </div>

        {/* 3rd row */}
        <div className='flex gap-8 '>
          {/* category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputstate" value="Book Category" />
            </div>
            <Select id='inputstate' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategory.map((option) => <option key={option}>{option}</option>)
              }
            </Select>
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <TextInput id="Book description" type="text" placeholder="Book description " required />
          </div>
        </div>
      

      {/* last section */}
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
        
    </form>
    </div>
  )
}

export default UploadBook