'use client';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const FileUploading = () => {

    const [preview, setPreview] = useState('');

    const uploadFile = (e) => {
        const file = e.target.files[0];

        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'batches');
        fd.append('cloud_name', 'dqnstuhrg');

        axios.post('https://api.cloudinary.com/v1_1/dqnstuhrg/image/upload', fd)
            .then((result) => {
                toast.success('File Uploaded Successfully');
                console.log(result.data);
                setPreview(result.data.url);
                productForm.setFieldValue('image', result.data.url);
            }).catch((err) => {
                console.log(err);
                console.log('Something went wrong');
            });

    }

    return (
        <div>

            <label htmlFor="upload-file"
                className='block rounded-lg text-xl border-2 border-dashed p-5 mt-5 cursor-pointer w-1/2 text-blue-500'
            >Click Here to Upload File</label>
            <input id='upload-file' type="file" onChange={uploadFile} hidden />

            {
                preview && (
                    <img src={preview} alt="" />
                )
            }

        </div>
    )
}

export default FileUploading;