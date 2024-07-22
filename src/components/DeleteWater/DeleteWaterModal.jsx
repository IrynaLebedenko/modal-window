import './DeleteWaterModal.module.css'

export default function DeleteWaterModal(props) {
    
    if (!props.call) {
        return null;
    }

    return (
        
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
                <button className="close" onClick={props.onClose} >×</button>
                <h2>Delete entry</h2>
                <p>Are you sure you want to delete the entry?</p>
                <div className='btn'>
                    <button className="accept" type="button" >Delete</button>
                    <button className="reject" type="button" >Cancel</button> 
                </div>    
            </div>
        </div>
        
    )
}



// import DeleteWaterModal from " ";
// import { useState } from 'react';


// function App() {
//     const [deleteWatModal, setDeleteWatModal] = useState(false);

//     return ( 
//         <div>
//             <DeleteWaterModal call={deleteWatModal} onClose={() => setDeleteWatModal(false)}></DeleteWaterModal>
//             // для відкриття модального вікна в потрібному місті (наприклад button)
//             <button onClick = {()=> setDeleteWatModal(true)}></button>
//         </div>
//     )
// }
// export default App;


// import LogOutModal from " ";
// import { useState } from 'react';


// function App() {
//     const [logOutModal, setLogOutModal] = useState(false);

//     return ( 
//         <div>
//             <LogOutModal call={logOutModal} onClose={() => setLogOutModal(false)}></LogOutModal>
//             // для відкриття модального вікна в потрібному місті (наприклад button)
//             <button onClick = {()=> setLogOutModal(true)}></button>
//         </div>
//     )
// }
// export default App;