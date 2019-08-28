import React from "react";
import './Modal.css'

export function Modal (props) {
    return (
        <div className='modal-wrapper'
            style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-content">

                <div className='modal-header'>
                    <h4 className='modal-title center'>
                        Purchase {props.product}
                    </h4>
                </div>

                <div className='modal-body'>
                        {props.children}  
        
                    <div className='row'>
                        <button className="btn btn-danger" onClick={props.close}>CLOSE</button>        
                    </div>
                </div>
            </div>
        </div>
    )
}
