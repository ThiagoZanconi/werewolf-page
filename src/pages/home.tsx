import { Suspense } from 'react';

function Home() {

    return (
        <>
            <div className="w-full">
                <Suspense fallback={<div>Loading intro...</div>}>
                    <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left'>
                        <div className='flex rounded-md p-4 gap-4 bg-gray-800'>
                            <p>
                                Welcome to Werewolf!
                            </p>
                        </div>
                    </div>
                </Suspense>
            </div>
        </>
    )
}

export default Home