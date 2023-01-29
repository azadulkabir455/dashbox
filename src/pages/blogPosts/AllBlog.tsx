import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { BsSearch, BsFillPersonFill, BsColumnsGap, BsListUl, BsGridFill, BsGrid3X3GapFill, BsThreeDotsVertical, BsFillHeartFill, BsChatLeftTextFill, BsVectorPen, BsFillTrash2Fill, BsFillEyeFill } from "react-icons/bs";
import EditModals from './blogComponent/EditModals';
import "../../assets/css/blogPost.scss"


export default function AllBlog() {
  const [isList, setIsList] = useState<boolean>(false);
  const [isGrid, setGrid] = useState<boolean>(true);
  const [col, setCol] = useState<boolean>(false);

  const { users } = useSelector((state: any) => state.user)
  console.log(users)

  const listView = () => {
    setIsList(true);
    setGrid(false);
  }
  const gridView = () => {
    setIsList(false);
    setGrid(true);
  }
  const increseCol = () => {
    setCol((value) => !value)
  }

  return (
    <>
      <div className="filterArea d-flex justify-content-between align-items-center mt-2">
        <div className="filter d-flex align-items-center">
          <div className="input-group ">
            <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
            <input type="text" className="form-control" placeholder="Search Here" />
          </div>
          <div className="input-group ms-md-2">
            <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
            <select className="form-select" name="category" id="category">
              <option className="text-capitalize text-muted">Filter Writer</option>
            </select>
          </div>
          <div className="input-group ms-md-2">
            <span className="input-group-text" id="basic-addon1"><BsColumnsGap /></span>
            <select className="form-select" name="category" id="category">
              <option className="text-capitalize text-muted">Filter Category</option>
            </select>
          </div>
        </div>
        <div className="displayArea d-flex">
          <BsGrid3X3GapFill className='me-2 d-none d-md-block text-muted' role="button" onClick={increseCol} />
          <BsGridFill className='me-2 text-muted' role="button" onClick={gridView} />
          <BsListUl className='me-2 text-muted' role="button" onClick={listView} />
        </div>
      </div>
      <div className="contentArea mt-5">
        <div className="row">
          {
            isGrid &&
            <div className={`col-12 col-md-6 col-lg-${col?"3":"4"}`}>
              <div className="card">
                <div className="card-header">
                  <img src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="card-body">
                  <div className="authorContent d-flex justify-content-between">
                    <div className="author d-flex align-items-center">
                      <div className="authorImg">
                        <img src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='d-inline-block' />
                      </div>
                      <div className="authorContent ms-2">
                        <p className="m-0 text-capitalize">Azad ul kabir <small className='text-primary fw-semibold'>(admin)</small> </p>
                        <small className='text-muted'>01-01-2023</small>
                      </div>
                    </div>
                    <div className="category">
                      <span className="blogCategory badge rounded-pill bg-info text-capitalize">
                        Education
                      </span>
                    </div>
                  </div>
                  <div className="postContent mt-4">
                    <h4 className='fw-bold text-primary text-capitalize'>The title</h4>
                    <p className='m-0 text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cum.</p>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <div className="activity d-flex">
                    <p className='me-3 text-muted m-0'><BsFillHeartFill /> 20</p>
                    <p className='text-muted m-0'><BsChatLeftTextFill /> 3</p>
                  </div>
                  <div className="actions">
                    <div className="dropdown">
                      <span className="dropdown-toggle text-muted" role="button" data-bs-toggle="dropdown">
                        <BsThreeDotsVertical />
                      </span>
                      <ul className="dropdown-menu p-0">
                        <li className='px-3 py-1 text-muted' role="button" data-bs-toggle="modal" data-bs-target="#postEdit">
                          <BsVectorPen /> Edit
                        </li>
                        <li className='px-3 py-1 text-muted' role="button">
                          <BsFillTrash2Fill /> Delete
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          {
            isList &&
            <div className="col-12">
              <div className="row p-3 mb-2">
                <div className="col-3 p-0">
                  <img src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{ width: "100%", height: "160px" }} />
                </div>
                <div className="col-7 d-flex flex-column justify-content-center">
                  <h4 className='fw-bold text-primary text-capitalize m-0'>The title</h4>
                  <div className="authorContent d-flex justify-content-between mb-2">
                    <p className="m-0 text-capitalize">Azad ul kabir <small className='text-primary fw-semibold'>(admin)</small> </p>
                    <span className="blogCategory badge rounded-pill bg-info text-capitalize">
                      Education
                    </span>
                  </div>
                  <p className="text-muted mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium hic minima cupiditate blanditiis tenetur, commodi nulla.</p>
                  <div className="activity d-flex">
                    <p className='me-3 text-muted m-0'><BsFillHeartFill /> 20</p>
                    <p className='text-muted m-0'><BsChatLeftTextFill /> 3</p>
                  </div>
                </div>
                <div className="col-2 d-flex justify-content-end align-items-center">
                  <div className="action">
                    <BsFillEyeFill className='text-info' role="button" />
                    <BsVectorPen className='text-warning ms-2' role="button" data-bs-toggle="modal" data-bs-target="#postEdit" />
                    <BsFillTrash2Fill className='text-danger ms-2' role="button" />
                  </div>
                </div>
              </div>
            </div>
          }

        </div>
      </div>

      <EditModals id={"postEdit"} />
    </>
  )
}
