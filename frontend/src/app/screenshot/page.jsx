'use client'
import React, { useRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'

const Screenshot = () => {
    const ref = useRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const [width, setWidth] = useState(150)
    const [code, setCode] = useState('// Write your code here')

    const getImage = () => takeScreenshot(ref.current)

    const downloadImage = () => {
        const link = document.createElement('a')
        link.href = image
        link.download = 'screenshot.png'
        link.click()
        window.location.reload() // Refresh the page
    }

    return (
        <div className="p-5 font-sans max-w-3xl mx-auto">
            <h1 className="text-center text-2xl font-bold mb-5">Code Editor Screenshot Tool</h1>
            <div className="text-center mb-5">
                <button 
                    className="px-5 py-2 text-lg cursor-pointer bg-blue-500 text-white rounded" 
                    onClick={getImage}
                >
                    Take screenshot
                </button>
            </div>
            <div ref={ref} className="border border-gray-300 rounded p-3 bg-gray-800">
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
                    highlight={code => highlight(code, languages.javascript, 'javascript')}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14,
                        minHeight: '200px',
                        backgroundColor: '#2d2d2d',
                        color: '#f8f8f2'
                    }}
                />
            </div>
            {image && (
                <div className="text-center mt-5">
                    <button 
                        className="px-5 py-2 text-lg cursor-pointer bg-green-500 text-white rounded" 
                        onClick={downloadImage}
                    >
                        Download
                    </button>
                </div>
            )}
        </div>
    )
}

export default Screenshot