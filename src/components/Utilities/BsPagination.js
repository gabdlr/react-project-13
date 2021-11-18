import React, { useState, useEffect, Fragment } from 'react';
import { Pagination, Col } from 'react-bootstrap';
import axiosClient from '../../config/axiosClient';

export default function BsPagination() {
    const [ totalPages, setTotalPages ] = useState(1);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [currentFirstPage, setCurrentFirstPage] = useState(0);
    const [ currentLastPage, setCurrentLastPage ] = useState(0);
    const [ loading, setLoading] = useState(true)
    const [ usersList, setUsersList ] = useState([]);

    useEffect(() => {
        if (usersList === []) return;
        if (loading === true) {
        const getUsersList = async () => {
            const response = await axiosClient.get('/api/v1/user/all');
            setUsersList(response.data);
        }
        getUsersList();

        return () => {
            setLoading(false)
        }
    }
    }, [usersList, loading]);

    useEffect(() => {
        const pages = Math.ceil(usersList.length/3);
        setTotalPages(pages)
        if(totalPages < 3){
            setCurrentLastPage(totalPages-1);
        }
        if((currentPage < 2 && totalPages >= 3) || currentPage === 2){
            setCurrentFirstPage(0);
            setCurrentLastPage(3);
        }
        if(currentPage > 2 && totalPages + 1 > currentPage + 2){
            setCurrentLastPage(currentPage+2)
            setCurrentFirstPage(currentPage)
        }
        if(currentPage > 2 && totalPages + 1 < currentPage + 2){
            setCurrentLastPage(totalPages)
            setCurrentFirstPage(currentPage)
        }
    }, [usersList, currentPage, totalPages, currentFirstPage, currentLastPage]);

    //Aliases for user on usersList (as it is disgusting to handle)
    let user1 = usersList[currentPage*3];
    let user2 = usersList[currentPage*3+1];
    let user3 = usersList[currentPage*3+2];

    //Navigation
    const goToPage = (page) => {setCurrentPage((page))};

    const goFirstPage = () => { if (currentPage === 0) return;
                                    setCurrentPage(0) };

    const goLastPage = () => {  if (currentPage === totalPages)  return; 
                                    setCurrentPage(parseInt(totalPages - 1))};

    const goToNextPage = () => { if (currentPage === totalPages - 1) return;
                                    setCurrentPage(currentPage + 1)};

    const goToPrevPage = () => {if (currentPage === 0) return;
                                    setCurrentPage(currentPage - 1)};

    return(
        <Fragment>
            <div className="navbar-dark text-white pagination-results ps-4 ps-md-0">
                <h4>More recently added Resumes</h4>
                <ul className="list-unstyled">
                    {/* {usersList[currentPage*3] ? <li><img src={usersList[currentPage*3].picture} className="pagination-pictures" alt="pic"/> {usersList[currentPage*3].name} {usersList[currentPage*3].lastname}</li> : null}
                    {usersList[currentPage*3+1] ? <li><img src={usersList[currentPage*3+1].picture} className="pagination-pictures" alt="pic"/> {usersList[currentPage*3+1].name} {usersList[currentPage*3+1].lastname}</li> : null}
                    {usersList[currentPage*3+2] ? <li><img src={usersList[currentPage*3+2].picture} className="pagination-pictures" alt="pic"/> {usersList[currentPage*3+2].name} {usersList[currentPage*3+2].lastname}</li> : null} */}
                    {user1 ? 
                    <li>
                        <img 
                            src={user1.picture} 
                            className="pagination-pictures" 
                            alt="pic"
                        />
                        <a href={`/ViewProfile/${user1._id}`}> {user1.name} {user1.lastname}</a>
                    </li> 
                    : null}
                    {user2 ? 
                    <li>
                        <img 
                            src={user2.picture} 
                            className="pagination-pictures" 
                            alt="pic"
                        />
                        <a href={`/ViewProfile/${user2._id}`}> {user2.name} {user2.lastname}</a>
                    </li> 
                    : null}
                    {user3 ?
                    <li>
                        <img 
                            src={user3.picture} 
                            className="pagination-pictures" 
                            alt="pic"
                        />
                        <a href={`/ViewProfile/${user3._id}`}> {user3.name} {user3.lastname}</a>
                    </li> 
                    : null}
                </ul> 
            </div>
            <Pagination className="footer justify-content-center justify-content-md-start">
                <Pagination.First 
                    onClick={ goFirstPage }
                />
                <Pagination.Prev 
                    onClick={ goToPrevPage }
                />
                
                <Pagination.Item 
                    active={currentPage===currentFirstPage}
                    onClick={() => goToPage(currentFirstPage)}
                >{currentFirstPage+1}
                </Pagination.Item> 
                
                <Pagination.Item 
                    active={currentPage===currentFirstPage+1}
                    onClick={() => goToPage(currentFirstPage+1)}
                >{currentFirstPage+2}
                </Pagination.Item>

                {currentFirstPage+1 === currentLastPage || currentFirstPage+2 === currentLastPage ? null : 
                <Pagination.Item
                    active={currentPage===currentLastPage-1} 
                    onClick={() => goToPage(currentLastPage-1)}
                >{currentLastPage}
                </Pagination.Item>}

                { totalPages > currentLastPage + 1  ? 
                <Pagination.Ellipsis
                    onClick={() => goToPage(currentLastPage)}
                /> 
                : null}

                <Pagination.Next
                    onClick={ goToNextPage }
                />
                <Pagination.Last 
                onClick={ goLastPage }
                />
            </Pagination>
        </Fragment>
    );
}
