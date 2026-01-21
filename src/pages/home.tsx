import { Suspense } from 'react';

function Home() {

    return (
        <>
            <div className="w-full">
                <Suspense fallback={<div>Loading intro...</div>}>
                    <h1 className='flex mb-5 slide-in-right'>
                        Who am I
                    </h1>
                    <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left card'>
                        <div className='flex rounded-md p-4 gap-4 bg-gray-800 card-content'>
                            <p>
                                Welcome to Werewolf!
                            </p>
                        </div>
                        <a
                        href="https://drive.google.com/file/d/1lTAeS0twYl5lMHWXfc_wPFGdLNZpxLIe/view?usp=drive_link" 
                        target="_blank"
                        className="underline card-overlay">
                        CV
                        </a>
                        
                    </div>
                </Suspense>
            </div>
        </>
    )
}

export default Home