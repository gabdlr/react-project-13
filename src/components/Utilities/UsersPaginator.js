import React, { useState, useEffect, Fragment } from 'react';
import { Pagination } from 'react-bootstrap';
import axiosClient from '../../config/axiosClient';

export default function UsersPaginator() {
    //TODO use redux for handling the component's state to keep current pages after loading a profile
    const [ paginator, setPaginator ] = useState({
         totalPages: 1,
         currentPage: 1,
         firstPage: 1,
         secondPage: 2,
         thirdPage: 3
    })

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
        let pages = Math.ceil(usersList.length/3);

        setPaginator({
            ...paginator,
            totalPages: pages
        });
    }, [usersList, setPaginator]);

    //Aliases for user on usersList (as it is disgusting to handle)
    let user1 = usersList[(paginator.currentPage - 1) * 3] ;
    let user2 = usersList[(paginator.currentPage - 1) * 3+1];
    let user3 = usersList[(paginator.currentPage - 1) * 3+2];

    const paginatorNextPage = () => {
        if(paginator.currentPage + 1 > paginator.totalPages) return;
        if(paginator.currentPage + 1 > paginator.thirdPage) {
            setPaginator({
                ...paginator,
                currentPage:(paginator.currentPage + 1),
                firstPage:  (paginator.currentPage + 1),
                secondPage: (paginator.currentPage + 2),
                thirdPage:  (paginator.currentPage + 3)
            });
        } else {
            setPaginator({
                ...paginator,
                //I know parentheses is not required, just looks cleaner to me
                currentPage: (paginator.currentPage + 1)
            });
        }
    }

    const paginatorPreviousPage = () => {
        if(paginator.currentPage - 1 < 1) return;
        if(paginator.currentPage - 1 < paginator.firstPage) {
            if(paginator.currentPage - 3 < 1) {
                setPaginator({
                    ...paginator,
                    currentPage:(paginator.currentPage - 1),
                    firstPage:  (1),
                    secondPage: (2),
                    thirdPage:  (3)
                });
            } else {
                setPaginator({
                    ...paginator,
                    currentPage:(paginator.currentPage - 1),
                    firstPage:  (paginator.currentPage - 3),
                    secondPage: (paginator.currentPage - 2),
                    thirdPage:  (paginator.currentPage - 1)
                });
            }
        } else {
            setPaginator({
                ...paginator,
                //I know parentheses is not required, just looks cleaner to me
                currentPage: (paginator.currentPage - 1)
            });
        }
    }

    const paginatorLastPage = () => {
        if(paginator.firstPage === paginator.totalPages 
            || paginator.secondPage === paginator.totalPages 
            || paginator.thirdPage === paginator.totalPages) {
                setPaginator({
                    ...paginator,
                    currentPage:(paginator.totalPages)
                }); 
            } else {
                setPaginator({
                    ...paginator,
                    currentPage:(paginator.totalPages),
                    firstPage:  (paginator.totalPages),
                    secondPage: (paginator.totalPages + 1),
                    thirdPage:  (paginator.totalPages + 2)
                });
            }
    }

    const paginatorFirstPage = () => {
        setPaginator({
            ...paginator,
            currentPage:(1),
            firstPage:  (1),
            secondPage: (2),
            thirdPage:  (3)
        });
    }

    const paginatorPages = (page) => {
        if(page === paginator.currentPage) return;
        if(page === 1){
            setPaginator({
                ...paginator,
                currentPage: paginator.firstPage,
            });
        } else if (page === 2) {
            setPaginator({
                ...paginator,
                currentPage: paginator.secondPage,
            });
        } else if (page === 3) {
            setPaginator({
                ...paginator,
                currentPage: paginator.thirdPage,
            }); 
        }
    }

    const paginatorEllipsis = () => {
        setPaginator({
            ...paginator,
            currentPage:(paginator.thirdPage + 1),
            firstPage:  (paginator.thirdPage + 1),
            secondPage: (paginator.thirdPage + 2),
            thirdPage:  (paginator.thirdPage + 3)
        });
    }
    return(
        <Fragment>
            <div className="navbar-dark text-white pagination-results ps-4 ps-md-0">
                <h4>More recently added Resumes</h4>
                {/*This could be handled with sliced arrays 
                TODO refactor in the futute */}
                <ul className="list-unstyled">
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
                    onClick={ paginatorFirstPage }
                />
                <Pagination.Prev 
                    onClick = { paginatorPreviousPage }
                />
                
                <Pagination.Item 
                    active={paginator.currentPage===paginator.firstPage}
                    onClick={() => paginatorPages(1) }
                >{paginator.firstPage}
                </Pagination.Item> 

                { paginator.secondPage <= paginator.totalPages ?
                (<Pagination.Item 
                    active={paginator.currentPage===paginator.secondPage}
                    onClick={() => paginatorPages(2) }
                >{paginator.secondPage}
                </Pagination.Item> ) : null }
                
                { paginator.thirdPage <= paginator.totalPages ?
                (<Pagination.Item
                    active={paginator.currentPage===paginator.thirdPage} 
                    onClick={() => paginatorPages(3) }
                >{paginator.thirdPage}
                </Pagination.Item>) : null }

                { paginator.totalPages > paginator.thirdPage ?
                (<Pagination.Ellipsis
                    onClick={paginatorEllipsis}
                /> ) : null }

                <Pagination.Next
                    onClick = {  paginatorNextPage }
                />
                <Pagination.Last 
                    onClick = { paginatorLastPage }
                />
            </Pagination>
        </Fragment>
    );
}
