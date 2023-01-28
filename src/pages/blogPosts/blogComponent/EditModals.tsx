import React from 'react'
import PostForm from './PostForm'

export default function ditModals({id}:any) {
    return (
        <>
            <div className="modal fade" id={id} tabIndex={1} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold text-capitalize">Edit blog</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <PostForm isCreatePost={false}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
