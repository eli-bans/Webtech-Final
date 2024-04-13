import React from 'react';
// // import './GroupModal.css';

// // /**
// //  * 
// //  * @param {boolean} isOpen - check whether or not modal should be open
// //  * @param {setOpen} setOpen - set the state of the modal
// //  * @param {Object} child - the data to be displayed in the modal 
// //  * @returns 
// //  */
// // const GroupModal = ({ isOpen, setOpen, child}) => {

// //     console.log(child == null)

// //     const handleCloseClick = () => {
// //         setOpen(false);
// //     }

// //     //TODO: Fix the child being null.
// //     // Child is being recorded as null. Probably has something to do with states. You'll have to figure that
// //     // out on your own though. Didn't want to move your states around. If it's fixed, the pop up will work
// //     // just fine.

// //     return (
// //         <>
// //             {isOpen && (
// //                 <div className="overlay">
// //                     <div className="modal">
// //                         <p className="close-btn" onClick={handleCloseClick}>X</p>
// //                         <h2>Group Details</h2>
// //                         <p>Group Name: {child && child.name}</p>
// //                         <p>Group Major: {child && child.major}</p>
// //                         <p>Group Creator: {child && child.creator}</p>
// //                     </div>
// //                 </div>
// //             )}
// //         </>
// //     );
// // };

// // export default GroupModal;

// import React from 'react';

// const GroupModal = ({ isOpen, setOpen, child }) => {

//     const handleCloseClick = () => {
//         setOpen(false);
//     }

//     return (
//         <>
//             {isOpen && (
//                 <div className="fixed z-10 inset-0 overflow-y-auto">
//                     <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

//                         <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//                             <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//                         </div>

//                         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

//                         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//                             <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                                 <div className="sm:flex sm:items-start">
//                                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                                         <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">{child.name}</h3>
//                                         <p className="text-sm text-gray-500 mb-2">Major: {child.major}</p>
//                                         <p className="text-sm text-gray-500 mb-2">Creator: {child.creator}</p>
//                                         <img src={child.group_image} alt={child.name} className="w-32 h-32 mx-auto mb-4" />
//                                         <div className="flex justify-center">
//                                             <a href={child.whatsAppLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                                                 Join WhatsApp Group
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                                 <button onClick={handleCloseClick} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
//                                     Close
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default GroupModal;



const GroupModal = ({ isOpen, setOpen, groupDetails }) => {
    const handleCloseClick = () => {
        setOpen(false);
    }

    return (
        <>
            {isOpen && (
                <div className="overlay">
                    <div className="modal">
                        <p className="close-btn" onClick={handleCloseClick}>X</p>
                        <h2>Group Details</h2>
                        {groupDetails && (
                            <>
                                <p>Group Name: {groupDetails.name}</p>
                                <p>Group Major: {groupDetails.major}</p>
                                <p>Group Creator: {groupDetails.creator}</p>
                               
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default GroupModal;